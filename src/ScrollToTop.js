import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToTop } from "./functions/";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    scrollToTop();
  }, [pathname]);
  return null;
};

export { ScrollToTop };
