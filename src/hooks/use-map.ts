import { useEffect, useState, MutableRefObject } from 'react';
import {
  Icon,
  Map,
  Marker,
  TileLayer
} from 'leaflet';
import { Point } from '../types/types';
import { ICON_OPTIONS, TILE_LAYER_OPTIONS, TILE_LAYER_URL } from 'constants/constants';

type UseMapOptions = {
  withMarker?: boolean;
};

const useMap = (
  mapRef: MutableRefObject<HTMLElement | null>,
  initialPoint: Point,
  { withMarker }: UseMapOptions = {},
): Map | null => {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const { lat, lng, zoom } = initialPoint;

      const instance = new Map(mapRef.current, {
        center: {
          lat,
          lng,
        },
        zoom,
      });

      const layer = new TileLayer(TILE_LAYER_URL, TILE_LAYER_OPTIONS);

      instance.addLayer(layer);

      if (withMarker) {
        const marker = new Marker({
          lat,
          lng,
        });

        const icon = new Icon(ICON_OPTIONS);

        marker.setIcon(icon).addTo(instance);
      }

      setMap(instance);
    }
  }, [mapRef, map, initialPoint, withMarker]);

  return map;
};

export default useMap;
