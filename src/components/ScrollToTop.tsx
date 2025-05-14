import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    const isNewNavigation = navigationType === "PUSH";

    if (isNewNavigation && location.pathname !== prevPathRef.current) {
      window.scrollTo(0, 0);
    }

    prevPathRef.current = location.pathname;
  }, [location, navigationType]);

  return null;
}