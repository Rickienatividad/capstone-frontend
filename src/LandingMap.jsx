import {
  Popup,
  Marker,
  MapContainer,
  TileLayer,
  useMap,
  Polygon,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { statesData } from "./data";

export function LandingMap() {
  return (
    <div>
      <MapContainer
        center={[33.682527343697544, -80.55168163301227]}
        zoom={6}
        style={{ width: "100vw", height: "100vh" }}
        scrollWheelZoom={true}
      >
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <TileLayer url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=dHOxVmOvjGkOeyQX5urc">
          attribution="
          <a href="https://www.maptiler.com/copyright/" target="_blank">
            &copy; MapTiler
          </a>{" "}
          <a href="https://www.openstreetmap.org/copyright" target="_blank">
            &copy; OpenStreetMap contributors
          </a>
          ""
        </TileLayer>
        {statesData.features.map((state) => {
          const coordinates = state.geometry.coordinates[0].map((item) => [
            item[1],
            item[0],
          ]);

          return (
            <Polygon
              pathOptions={{
                fillColor: "#D7F9F9",
                fillOpacity: 0.5,
                weight: 2,
                opacity: 1,
                dashArray: 3,
                color: "white",
              }}
              positions={coordinates}
            />
          );
        })}
      </MapContainer>
    </div>
  );
}
