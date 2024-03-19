import { Link } from "@remix-run/react";
import { technology } from "../../public/locales/en/home.json";

export default function HeroHorizontal() {
  return (
    <div className="relative">
      <h3 className="font-semibold tracking-tight text-[#FF4F01] text-lg mb-4 text-center md:text-left">
        {technology.title}
      </h3>
      <h4 className="text-3xl font-semibold tracking-tight text-[#201515] sm:text-5xl col-span-2 md:col-span-1">
        {technology.label}
      </h4>
      <div className="relative flex-col items-start m-auto align-middle grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
        <div className="grid gap-y-3 mt-2">
          <h4 className="text-base tracking-tight text-gray-600">
            {technology.description}
          </h4>
          <div className="flex md:mt-6 lg:justify-start">
            <Link
              className="inline-flex text-sm font-semibold text-black duration-200 hover:text-[#FF4F01] focus:outline-none focus-visible:outline-gray-600 hid"
              to={"/contact"}
            >
              <span>{technology.contactUs} &nbsp; → </span>
            </Link>
          </div>
        </div>

        <div className="items-center space-x-6 lg:space-x-8 col-span-2 md:col-span-1">
          <div className="mx-auto max-w-lg items-center gap-x-8 gap-y-10 lg:mt-0 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none grid grid-cols-2 lg:grid-cols-4">
            <img
              src="/nodejs.svg"
              alt="Node.js"
              className="max-h-12 w-full object-contain col-span-1"
            />
            <img
              src="/shopify.svg"
              alt="Shopify"
              className="max-h-12 w-full object-contain col-span-1"
            />
            <img
              src="/glc.svg"
              alt="Google Cloud"
              className="max-h-12 w-full object-contain col-span-1"
            />

            <img
              src="/react.svg"
              alt="React.js"
              className="max-h-12 w-full object-contain col-span-1"
            />
            <img
              src="/graphql.svg"
              alt="Graphql"
              className="max-h-12 w-full object-contain col-span-1"
            />
            <img
              src="/firebase.svg"
              alt="Firebase"
              className="max-h-12 w-full object-contain col-span-1"
            />
            <img
              src="/postgresql.svg"
              alt="Postgresql"
              className="max-h-12 w-full object-contain col-span-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
