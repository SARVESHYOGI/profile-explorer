"use client";

import type React from "react";

import { createContext, useContext, useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Use a dummy key for demonstration purposes
const MAPBOX_TOKEN = "pk.dummy.mapbox.token.for.demonstration";

type MapContextType = {
  map: mapboxgl.Map | null;
  showLocation: (longitude: number, latitude: number, title: string) => void;
};

const MapContext = createContext<MapContextType>({
  map: null,
  showLocation: () => {},
});

export function MapProvider({ children }: { children: React.ReactNode }) {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Initialize map when component mounts
    mapboxgl.accessToken = MAPBOX_TOKEN;

    const initializeMap = () => {
      const mapContainer = document.getElementById("map-container");
      if (!mapContainer) return;

      const newMap = new mapboxgl.Map({
        container: mapContainer,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-74.5, 40], // Default center (New York)
        zoom: 9,
      });

      newMap.on("load", () => {
        setMap(newMap);
      });

      return newMap;
    };

    let mapInstance: mapboxgl.Map | null = null;

    // Small delay to ensure the DOM is ready
    const timer = setTimeout(() => {
      mapInstance = initializeMap() || null;
    }, 100);

    return () => {
      clearTimeout(timer);
      if (mapInstance) {
        mapInstance.remove();
      }
    };
  }, []);

  const showLocation = (longitude: number, latitude: number, title: string) => {
    if (!map) return;

    // Clear existing markers
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    // Add new marker
    const marker = new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .setPopup(new mapboxgl.Popup().setHTML(`<h3>${title}</h3>`))
      .addTo(map);

    markersRef.current.push(marker);

    // Fly to location
    map.flyTo({
      center: [longitude, latitude],
      zoom: 14,
      essential: true,
    });

    // Open popup
    marker.togglePopup();
  };

  return (
    <MapContext.Provider value={{ map, showLocation }}>
      {children}
    </MapContext.Provider>
  );
}

export const useMap = () => useContext(MapContext);
