'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VideoPlayer = ({ videoSrc, maxHeight }: { videoSrc: string; maxHeight?: string }) => {
  const [hovering, setHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div
      className="relative inline-block w-full"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <button
        onClick={handlePlayClick}
        className="relative w-full"
      >
        <video
          ref={videoRef}
          src={videoSrc}
          className="rounded-lg w-full object-contain"
          style={{ maxHeight: maxHeight || '500px' }}
          preload="metadata"
          controls
        />
        <AnimatePresence>
          {hovering && (
            <motion.div
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 text-white backdrop-blur-[1px] rounded-lg pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm">
                <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};

export default VideoPlayer;
