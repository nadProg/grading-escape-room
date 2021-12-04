import { useEffect, useState, MutableRefObject } from 'react';
import { BaseIconOptions, Icon, Map, Marker, TileLayer } from 'leaflet';
import { Point } from '../types/types';

const IconSize = {
  Width: 48,
  Height: 61,
};

const ICON_OPTIONS: BaseIconOptions = {
  iconUrl: '/img/icon-marker.svg',
  iconSize: [IconSize.Width, IconSize.Height],
  iconAnchor: [IconSize.Width / 2, IconSize.Height]
};

type UseMapOptions = {
  withMarker?: boolean;
}

const useMap = (
  mapRef: MutableRefObject<HTMLElement | null>,
  initialPoint: Point,
  { withMarker }: UseMapOptions = {}
): Map | null => {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const {lat, lng, zoom} = initialPoint;

      const instance = new Map(mapRef.current, {
        center: {
          lat,
          lng,
        },
        zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );

      instance.addLayer(layer);

      if (withMarker) {
        const marker = new Marker({
          lat: lat,
          lng: lng
        });


        const icon = new Icon(ICON_OPTIONS);

        marker.setIcon(icon).addTo(instance);
      }


      setMap(instance);
    }
  }, [mapRef, map, initialPoint]);

  return map;
};

export default useMap;
