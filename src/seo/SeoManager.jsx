import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { syncPageSeo } from "./resolvePageSeo";

const SeoManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    syncPageSeo(pathname);
  }, [pathname]);

  return null;
};

export default SeoManager;
