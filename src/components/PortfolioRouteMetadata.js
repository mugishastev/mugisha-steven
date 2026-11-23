import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageMetadata from "./components/PageMetadata";

// The metadata component can be added at the Router level by consumers.
export function PortfolioRouteMetadata() {
  const location = useLocation();
  useEffect(() => {
    const event = new Event("portfolio-location-change");
    window.dispatchEvent(event);
  }, [location.pathname]);
  return <PageMetadata pathname={location.pathname} />;
}

export default PortfolioRouteMetadata;
