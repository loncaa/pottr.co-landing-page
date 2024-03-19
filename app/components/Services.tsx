import ShowcaseItem from "./ShowcaseItem";
import { services } from "../../public/locales/en/home.json";

export default function Services() {
  return (
    <div className="relative items-center w-full">
      <h2 className="font-semibold tracking-tight text-[#FF4F01] text-lg mb-2 text-center md:text-left">
        {services.label}
      </h2>
      <div className="relative flex-col items-start m-auto align-middle grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.list.map(({ title, description }) => (
          <ShowcaseItem
            key={title}
            title={title}
            description={description}
            heroLinkUrl={"/"}
          />
        ))}
      </div>
    </div>
  );
}
