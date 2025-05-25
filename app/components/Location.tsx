import { location } from "~/locales/en/about.json";
import Map from "./Map";

export default function Location() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {location.label}
      </h1>
      <div className="grid gap-x-8 gap-y-10 xl:grid-cols-3 mt-6">
        <div
          role="list"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7 gap-x-1 xl:col-span-2"
        >
          <Map />
        </div>
      </div>
    </div>
  );
}
