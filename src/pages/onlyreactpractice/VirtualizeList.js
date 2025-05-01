import React, { useState, useRef, useEffect } from 'react';

const VirtualizedList = ({ itemHeight, height }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);
  const totalHeight = items.length * itemHeight;
  const viewportRef = useRef(null);

  // Update scrollTop when scrolling
  const handleScroll = () => {
    if (viewportRef.current) {
      setScrollTop(viewportRef.current.scrollTop);
    }
  };

  // Ensure valid calculations for startIndex and endIndex
  const startIndex = Math.floor(scrollTop / itemHeight) || 0;
  const endIndex = Math.min(items.length - 1, startIndex + Math.ceil(height / itemHeight));

  // Slice out the visible items based on scroll position
  const visibleItems = items.slice(startIndex, endIndex + 1).map((item, index) => (
    <div key={startIndex + index} style={{ height: itemHeight }}>
      {item}
    </div>
  ));

  // Ensure that the scrollTop is updated correctly on mount
  useEffect(() => {
    if (viewportRef.current) {
      setScrollTop(viewportRef.current.scrollTop);
    }
  }, []);

  return (
    <div
      ref={viewportRef}
      onScroll={handleScroll}
      style={{ height, overflowY: 'auto', position: 'relative' }}
    >
      {/* Spacer div to ensure the scrollable container has a height equal to the total height */}
      <div style={{ height: totalHeight }}>
        {visibleItems}
      </div>
    </div>
  );
};

export default VirtualizedList;
