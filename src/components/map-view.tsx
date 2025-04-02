"use client";

import { useEffect } from "react";
import { useMap } from "@/components/map-provider";

interface MapViewProps {
  longitude: number;
  latitude: number;
  title: string;
}

export function MapView({ longitude, latitude, title }: MapViewProps) {
  const { showLocation } = useMap();

  useEffect(() => {
    if (longitude && latitude) {
      showLocation(longitude, latitude, title);
    }
  }, [longitude, latitude, title, showLocation]);

  return null;
}
