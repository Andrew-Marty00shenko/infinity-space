import { useEffect, useState } from "react";

const useBreakpoint = () => {
  const [breakpoint, setBreakPoint] = useState("");
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    if (0 < windowSize.width && windowSize.width < 690) {
      setBreakPoint("0");
    }
    if (690 < windowSize.width && windowSize.width < 768) {
      setBreakPoint("640");
    }
    if (768 < windowSize.width && windowSize.width < 1024) {
      setBreakPoint("768");
    }
    if (1024 < windowSize.width && windowSize.width < 1280) {
      setBreakPoint("1024");
    }
    if (windowSize.width >= 1280) {
      setBreakPoint("1280");
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize.width]);
  return breakpoint;
};

export default useBreakpoint;
