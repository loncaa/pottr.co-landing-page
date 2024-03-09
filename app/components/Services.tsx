import ShowcaseItem from "./ShowcaseItem";

interface IServicesProps {
  label: string;
  services: {
    title: string;
    description: string;
    url: string;
  }[];
}

export default function Services({ label, services }: IServicesProps) {
  return (
    <div className="relative items-center w-full">
      <h2 className="font-semibold tracking-tight text-[#FF4F01] text-lg mb-2 text-center md:text-left">
        {label}
      </h2>
      services
      <div className="relative flex-col items-start m-auto align-middle grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map(({ title, description, url }) => (
          <ShowcaseItem
            key={url}
            title={title}
            description={description}
            heroLinkUrl={url}
          />
        ))}
      </div>
    </div>
  );
}
