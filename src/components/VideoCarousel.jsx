import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from 'react-icons/fa';

// Helper function to generate thumbnail from Cloudinary video URL
const getCloudinaryThumbnail = (videoUrl) => {
  if (!videoUrl || typeof videoUrl !== 'string') return null;
  
  // If it's already a thumbnail URL, return as is
  if (videoUrl.includes('/image/upload/') || videoUrl.match(/\.(jpg|jpeg|png|webp)$/i)) {
    return videoUrl;
  }
  
  // Convert Cloudinary video URL to thumbnail using Cloudinary's video transformation
  // Example: https://res.cloudinary.com/cloud/video/upload/v123/video.mp4
  // To: https://res.cloudinary.com/cloud/video/upload/so_0/w_800/v123/video.jpg
  if (videoUrl.includes('res.cloudinary.com') && videoUrl.includes('/video/upload/')) {
    try {
      // Extract the base URL and path
      const urlParts = videoUrl.split('/video/upload/');
      if (urlParts.length === 2) {
        const baseUrl = urlParts[0] + '/video/upload';
        const pathParts = urlParts[1].split('/');
        const version = pathParts[0];
        const filename = pathParts.slice(1).join('/');
        
        // Generate thumbnail URL with transformation
        // so_0 = start offset 0 seconds, w_800 = width 800px, f_jpg = format jpg
        return `${baseUrl}/so_0,w_800,f_jpg/${version}/${filename.replace(/\.(mp4|webm|mov|avi|mkv)$/i, '.jpg')}`;
      }
    } catch (error) {
      console.warn('Error generating Cloudinary thumbnail:', error);
    }
  }
  
  return null;
};

// Helper function to normalize video data
const normalizeVideos = (videos) => {
  if (!videos || videos.length === 0) return [];
  
  return videos.map((video, index) => {
    // If video is a string (just a URL), convert to object
    if (typeof video === 'string') {
      return {
        id: index + 1,
        url: video,
        thumbnail: getCloudinaryThumbnail(video),
        title: `Video ${index + 1}`
      };
    }
    
    // If video is an object, ensure it has required properties
    return {
      id: video.id || index + 1,
      url: video.url || video.src || '',
      thumbnail: video.thumbnail || video.poster || getCloudinaryThumbnail(video.url || video.src),
      title: video.title || video.name || `Video ${index + 1}`
    };
  });
};

const VideoCarousel = ({ videos = [], autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isVideoPlaying, setIsVideoPlaying] = useState({});
  const [thumbnailErrors, setThumbnailErrors] = useState({});
  const [showControls, setShowControls] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const videoRefs = useRef({});
  const intervalRef = useRef(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Normalize videos array
  const normalizedVideos = normalizeVideos(videos);
  
  // Get current video state
  const currentVideoId = normalizedVideos[currentIndex]?.id;
  const isCurrentVideoPlaying = isVideoPlaying[currentVideoId] || false;

  useEffect(() => {
    // Don't auto-advance if current video is playing
    if (isPlaying && autoPlay && normalizedVideos.length > 1 && !isCurrentVideoPlaying && isVideoPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === normalizedVideos.length - 1 ? 0 : prevIndex + 1
        );
      }, interval);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isPlaying, autoPlay, interval, normalizedVideos.length, isCurrentVideoPlaying, isVideoPaused]);

  // Pause all videos when current index changes
  useEffect(() => {
    // Pause all videos
    Object.values(videoRefs.current).forEach((video) => {
      if (video && !video.paused) {
        video.pause();
      }
    });
    // Reset play state for new video
    setIsVideoPlaying({});
    setShowControls(false);
    setIsVideoPaused(true);
    // Clear any pending auto-advance resumes
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, [currentIndex]);

  const goToSlide = (index) => {
    // Pause current video before switching
    const currentVideo = videoRefs.current[currentVideoId];
    if (currentVideo && !currentVideo.paused) {
      currentVideo.pause();
    }
    setCurrentIndex(index);
    // Stop auto-advance when user manually navigates
    setIsPlaying(false);
    clearInterval(intervalRef.current);
  };

  const goToPrevious = () => {
    // Pause current video before switching
    const currentVideo = videoRefs.current[currentVideoId];
    if (currentVideo && !currentVideo.paused) {
      currentVideo.pause();
    }
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? normalizedVideos.length - 1 : prevIndex - 1
    );
    // Stop auto-advance when user manually navigates
    setIsPlaying(false);
    clearInterval(intervalRef.current);
  };

  const goToNext = () => {
    // Pause current video before switching
    const currentVideo = videoRefs.current[currentVideoId];
    if (currentVideo && !currentVideo.paused) {
      currentVideo.pause();
    }
    setCurrentIndex((prevIndex) => 
      prevIndex === normalizedVideos.length - 1 ? 0 : prevIndex + 1
    );
    // Stop auto-advance when user manually navigates
    setIsPlaying(false);
    clearInterval(intervalRef.current);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVideoPlay = (videoId) => {
    setIsVideoPlaying((prev) => ({ ...prev, [videoId]: true }));
    setIsVideoPaused(false);
    setShowControls(true);
    // Stop auto-advance when video starts playing
    setIsPlaying(false);
    clearInterval(intervalRef.current);
  };

  const handleVideoPause = (videoId) => {
    setIsVideoPlaying((prev) => ({ ...prev, [videoId]: false }));
    setIsVideoPaused(true);
    // Don't automatically resume auto-advance - let user control it
    // Auto-advance will resume when video ends or user clicks play again
  };

  const handlePlayPauseClick = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    const video = videoRefs.current[currentVideoId];
    if (video) {
      try {
        if (video.paused) {
          await video.play();
          setIsVideoPaused(false);
          setShowControls(true);
        } else {
          video.pause();
          setIsVideoPaused(true);
        }
      } catch (error) {
        console.error('Error playing video:', error);
        // If autoplay is blocked, show controls so user can manually play
        setShowControls(true);
      }
    }
  };

  const handleVideoLoaded = () => {
    // Ensure video starts paused when loaded
    const video = videoRefs.current[currentVideoId];
    if (video) {
      if (!video.paused) {
        video.pause();
      }
      setIsVideoPaused(video.paused);
    }
    setIsVideoPlaying((prev) => ({ ...prev, [currentVideoId]: false }));
  };

  if (normalizedVideos.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>No videos available. Please add video URLs to display the carousel.</p>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      {/* Main Carousel Container */}
      <div 
        className="relative overflow-hidden rounded-lg shadow-2xl bg-black"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => {
          if (!isCurrentVideoPlaying) {
            setShowControls(false);
          }
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="relative w-full"
          >
            <div 
              className="relative w-full bg-black"
              style={{
                aspectRatio: isMobile ? '16/9' : '21/9',
                maxHeight: isMobile ? '400px' : '500px',
                height: isMobile ? 'auto' : 'auto'
              }}
            >
              <video
                ref={(el) => {
                  if (el && normalizedVideos[currentIndex]) {
                    videoRefs.current[normalizedVideos[currentIndex].id] = el;
                  }
                }}
                key={normalizedVideos[currentIndex].id}
                src={normalizedVideos[currentIndex].url}
                className="w-full h-full object-contain"
                controls={showControls || isCurrentVideoPlaying}
                poster={normalizedVideos[currentIndex].thumbnail}
                onPlay={() => handleVideoPlay(normalizedVideos[currentIndex].id)}
                onPause={() => handleVideoPause(normalizedVideos[currentIndex].id)}
                onEnded={() => {
                  // When video ends, pause it and resume auto-advance after a short delay
                  const video = videoRefs.current[normalizedVideos[currentIndex].id];
                  if (video) {
                    video.pause();
                  }
                  handleVideoPause(normalizedVideos[currentIndex].id);
                  // Resume auto-advance after video ends (if autoPlay is enabled)
                  if (autoPlay && normalizedVideos.length > 1) {
                    setTimeout(() => {
                      setIsPlaying(true);
                    }, 3000); // Wait 3 seconds after video ends before auto-advancing
                  }
                }}
                onLoadedMetadata={handleVideoLoaded}
                onLoadedData={handleVideoLoaded}
                preload="metadata"
                playsInline
              />
            
            {/* Centered Play Button Overlay */}
            {isVideoPaused && !isCurrentVideoPlaying && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer z-20"
                onClick={handlePlayPauseClick}
              >
                <motion.button
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/95 hover:bg-white text-gray-900 p-5 md:p-7 lg:p-8 rounded-full shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50"
                  aria-label="Play video"
                  type="button"
                >
                  <FaPlay className="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 ml-1" />
                </motion.button>
              </motion.div>
            )}
            
            {/* Video Overlay Info */}
            {normalizedVideos[currentIndex].title && (
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6 pointer-events-none z-10">
                <h3 className="text-white text-lg md:text-xl font-semibold">
                  {normalizedVideos[currentIndex].title}
                </h3>
              </div>
            )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {normalizedVideos.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gray-900 p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Previous video"
            >
              <FaChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gray-900 p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Next video"
            >
              <FaChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </>
        )}

        {/* Auto-play Toggle Button */}
        {autoPlay && normalizedVideos.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              togglePlayPause();
            }}
            className="absolute top-2 md:top-4 right-2 md:right-4 z-30 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label={isPlaying ? 'Pause autoplay' : 'Play autoplay'}
          >
            {isPlaying ? (
              <FaPause className="w-3 h-3 md:w-4 md:h-4" />
            ) : (
              <FaPlay className="w-3 h-3 md:w-4 md:h-4" />
            )}
          </button>
        )}
      </div>

      {/* Indicators/Dots */}
      {normalizedVideos.length > 1 && (
        <div className="flex justify-center items-center gap-2 mt-6">
          {normalizedVideos.map((video, index) => (
            <button
              key={video.id}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-full ${
                index === currentIndex
                  ? 'bg-gray-900 w-8 h-3'
                  : 'bg-gray-400 hover:bg-gray-600 w-3 h-3'
              }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Thumbnail Navigation (Optional - for larger screens) */}
      {normalizedVideos.length > 1 && (
        <div className="hidden md:flex justify-center gap-3 mt-6 overflow-x-auto pb-2">
          {normalizedVideos.map((video, index) => (
            <button
              key={video.id}
              onClick={() => goToSlide(index)}
              className={`shrink-0 relative overflow-hidden rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 ${
                index === currentIndex
                  ? 'border-gray-900 shadow-lg scale-105'
                  : 'border-transparent hover:border-gray-400 opacity-70 hover:opacity-100'
              }`}
              aria-label={`Go to video ${index + 1}`}
            >
              {video.thumbnail && !thumbnailErrors[video.id] ? (
                <img
                  src={video.thumbnail}
                  alt={video.title || `Video ${index + 1} by Irfan Mohiuddin`}
                  className="w-24 h-16 object-cover"
                  loading="lazy"
                  onError={() => {
                    setThumbnailErrors((prev) => ({ ...prev, [video.id]: true }));
                  }}
                />
              ) : (
                <div className="w-24 h-16 bg-gray-800 flex items-center justify-center">
                  <FaPlay className="w-6 h-6 text-white opacity-50" />
                </div>
              )}
              {index === currentIndex && (
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoCarousel;

