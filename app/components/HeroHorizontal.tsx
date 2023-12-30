export default function HeroHorizontal() {
  return (
    <div className="relative max-w-7xl px-5 mx-auto grid grid-rows-1 lg:grid-cols-2 gap-3">
      <div className="col-span-1 text-center lg:text-start m-auto lg:m-0">
        <h1 className="text-3xl font-semibold tracking-tight text-[#201515] sm:text-5xl">
          Technologies
        </h1>
        <h4 className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
          This are main technologies used in our projects. Some of your
          technologies are not listed here? It's not a problem, we can do it!
        </h4>
        <div className="hidden lg:flex justify-center gap-3 mt-10 lg:justify-start">
          <a
            className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-[#FF4F01] focus:outline-none focus-visible:outline-gray-600 hid"
            href={"#"}
          >
            <span>contact us &nbsp; → </span>
          </a>
        </div>
      </div>
      <div className="items-center space-x-6 lg:space-x-8 col-span-1">
        <div className="mx-auto max-w-lg items-center gap-x-8 gap-y-10 mt-6 lg:mt-0 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none grid grid-cols-2 lg:grid-cols-4">
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
        <div className="flex justify-center gap-3 mt-10 lg:justify-start lg:hidden">
          <a
            className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-[#FF4F01] focus:outline-none focus-visible:outline-gray-600"
            href={"#"}
          >
            <span>Contact us &nbsp; → </span>
          </a>
        </div>
      </div>
    </div>
  );
}
