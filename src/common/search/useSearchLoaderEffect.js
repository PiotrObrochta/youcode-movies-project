import { useEffect, useState } from "react";

export const useSearchLoaderEffect = ({ isSearchActive, page }) => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (!isSearchActive) return;

    setShowLoader(true);
    window.scrollTo({ top: 0 });

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [page, isSearchActive]);

  return showLoader;
};
