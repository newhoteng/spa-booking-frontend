import { useState, useEffect } from 'react';

function useWindowSize() {
  const [slidesPerView, setSlidesPerView] = useState(3);

  const handleResize = () => {
    if (window.innerWidth <= 660) {
      setSlidesPerView(1);
    } else if (window.innerWidth > 660 && window.innerWidth < 768) {
      setSlidesPerView(2);
    } else if (window.innerWidth >= 768 && window.innerWidth < 950) {
      setSlidesPerView(1);
    } else if (window.innerWidth >= 950 && window.innerWidth < 1250) {
      setSlidesPerView(2);
    } else if (window.innerWidth >= 1250) {
      setSlidesPerView(3);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return slidesPerView;
}

export default useWindowSize;
