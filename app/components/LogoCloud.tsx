import { trustedBy } from "~/locales/en/home.json";

export default function LogoCloud() {
  return (
    <div className="relative items-center w-full">
      <h3 className="font-semibold tracking-tight text-[#FF4F01] text-lg mb-4 text-center md:text-left">
        {trustedBy.label}
      </h3>
      <div className="mx-auto max-w-lg items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none grid grid-cols-2 md:grid-cols-5">

        <a href={"https://www.linkedin.com/company/paldesk/"} target="_blank" rel="noreferrer">
          <img
            className="max-h-12 w-full object-contain col-span-1"
            src="/paldesk.svg"
            alt="Paldesk"
            width={158}
            height={48}
          />
        </a>
        <a href={"https://www.linkedin.com/company/aarke/"} target="_blank" rel="noreferrer"><img
          className="max-h-12 w-full object-contain col-span-1"
          src="/aarke.svg"
          alt="Aarke"
          width={158}
          height={48}
        /></a>
        <a href={"https://www.linkedin.com/company/coi-agency/"} target="_blank" rel="noreferrer"><img
          className="max-h-12 w-full object-contain col-span-1 "
          src="/coi.svg"
          alt="Coi"
          width={158}
          height={48}
        /></a>
        <a href={"https://www.linkedin.com/company/droppanow/"} target="_blank" rel="noreferrer"><img
          className="max-h-12 w-full object-contain col-span-1 grayscale"
          src="/droppa.svg"
          alt="Droppa"
          width={158}
          height={48}
        /></a>
        <a href={"https://www.linkedin.com/company/phishar/"} target="_blank" rel="noreferrer"><img
          className="max-h-12 w-full object-contain col-span-1 grayscale"
          src="/phishar.svg"
          alt="PhishAR"
          width={158}
          height={48}
        /></a>
      </div>
    </div>
  );
}
