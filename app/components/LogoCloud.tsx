export default function LogoCloud() {
  return (
    <div className="bg-white py-20 sm:py-14 px-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-2xl font-semibold tracking-tight text-[#201515] sm:text-3xl">
          Trusted by
        </p>
        <div className="mx-auto mt-10 max-w-lg items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none grid grid-cols-2 sm:grid-cols-4">
          <img
            className="max-h-12 w-full object-contain col-span-1"
            src="/paldesk.svg"
            alt="Paldesk"
            width={158}
            height={48}
          />
          <img
            className="max-h-12 w-full object-contain col-span-1"
            src="/aarke.svg"
            alt="Aarke"
            width={158}
            height={48}
          />
          <img
            className="max-h-12 w-full object-contain col-span-1"
            src="/coi.svg"
            alt="Coi"
            width={158}
            height={48}
          />
          <img
            className="max-h-12 w-full object-contain col-span-1"
            src="/droppa.svg"
            alt="Droppa"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
}
