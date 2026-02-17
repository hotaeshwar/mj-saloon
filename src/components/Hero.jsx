import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const videoRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const isIPadDevice = (width, height) => {
    return (
      (width === 768 && height === 1024) ||
      (width === 820 && height === 1180) ||
      (width === 834 && height === 1194) ||
      (width === 1024 && height === 1366) ||
      (height === 768 && width === 1024) ||
      (height === 820 && width === 1180) ||
      (height === 834 && width === 1194) ||
      (height === 1024 && width === 1366) ||
      navigator.userAgent.includes('iPad') ||
      (navigator.userAgent.includes('Macintosh') && 'ontouchend' in document)
    );
  };

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsSmallScreen(width < 768 && !isIPadDevice(width, window.innerHeight));
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    const video = videoRef.current;
    if (!video) return;

    // Set all mute/autoplay attributes immediately
    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;

    const adjustVideoFit = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const screenRatio = width / height;
      const videoRatio = 16 / 9;

      video.style.objectFit = 'cover';
      video.style.width = '100%';
      video.style.height = '100%';
      video.style.position = 'absolute';
      video.style.top = '0';
      video.style.left = '0';
      video.style.transform = 'translateZ(0)';

      if (isIPadDevice(width, height)) {
        video.style.objectPosition = 'center center';
        video.style.minWidth = '100%';
        video.style.minHeight = '100%';
      } else if (screenRatio > videoRatio) {
        video.style.objectPosition = 'center center';
      } else {
        video.style.objectPosition = 'center 40%';
      }
    };

    adjustVideoFit();

    // Attempt play immediately — no artificial delays
    const attemptPlay = () => {
      video.play().catch(() => {
        // Autoplay blocked: retry on first user interaction
        const enableVideo = () => {
          video.play().catch((err) => console.log('Video play failed:', err));
          document.removeEventListener('click', enableVideo);
          document.removeEventListener('touchstart', enableVideo);
          document.removeEventListener('scroll', enableVideo);
        };
        document.addEventListener('click', enableVideo, { once: true });
        document.addEventListener('touchstart', enableVideo, { once: true });
        document.addEventListener('scroll', enableVideo, { once: true });
      });
    };

    // Play as soon as there's enough data; fallback to canplay event
    if (video.readyState >= 3) {
      attemptPlay();
    } else {
      video.addEventListener('canplay', attemptPlay, { once: true });
    }

    let resizeTimeout;
    const throttledResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(adjustVideoFit, 200);
    };

    window.addEventListener('resize', throttledResize, { passive: true });
    window.addEventListener('orientationchange', () => {
      setTimeout(adjustVideoFit, 300);
    }, { passive: true });

    return () => {
      video.removeEventListener('canplay', attemptPlay);
      window.removeEventListener('resize', throttledResize);
      window.removeEventListener('resize', checkScreenSize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  const getContainerHeight = () => {
    if (typeof window === 'undefined') return '100vh';

    const width = window.innerWidth;
    const height = window.innerHeight;

    if (width < 768) {
      return Math.min(height * 0.6, 500);
    } else if (isIPadDevice(width, height)) {
      return Math.min(width * 0.5625, height * 0.6);
    } else if (width < 1024) {
      return Math.min(height * 0.7, 600);
    } else {
      return '100vh';
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        height: getContainerHeight(),
        minHeight: isSmallScreen ? '300px' : '400px',
      }}
    >
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full"
          src="/media/doctor.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          style={{
            objectFit: 'cover',
            objectPosition: 'center center',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            WebkitTransform: 'translateZ(0)',
            WebkitBackfaceVisibility: 'hidden',
          }}
        />
      </div>
    </div>
  );
};

export default Hero;