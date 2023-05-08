import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import "./index.scss";

export const MapContent = ({
  submit,
  coors,
}: {
  submit: any;
  coors: number[];
}) => {
  return (
    <div className="map">
      <YMaps>
        <Map
          width={725}
          height={200}
          defaultState={{
            center: [43.238949, 76.889709],
            zoom: 6,
          }}
          onClick={(e: any) => {
            submit("coordinates", e._sourceEvent.originalEvent.coords);
          }}
        >
          {coors ? <Placemark geometry={coors} /> : null}
        </Map>
      </YMaps>
    </div>
  );
};
