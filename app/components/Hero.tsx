export default function Hero() {
  return (
    <div className="relative bg-white my-5 md:my-20">
      <div className="pb-8 py-20 sm:pb-40 sm:pt-24 lg:pb-16 lg:pt-16">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-1 gap-3">
          <div className="col-span-1 m-auto mb-7 md:mb-10 max-w-2xl">
            <div className="grid grid-rows-1">
              <div className="grid-cols-1">
                <h1 className="text-3xl font-semibold tracking-tight text-[#201515] sm:text-5xl">
                  Technologies
                </h1>
                <h4 className="max-w-xl text-base tracking-tight text-gray-600 mt-4">
                  This are main technologies used in our projects. Some of your
                  technologies are not listed here? It's not a problem, we can
                  do it!
                </h4>
                <div className="lg:flex justify-center gap-3 mt-3 lg:justify-start">
                  <a
                    className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-[#FF4F01] focus:outline-none focus-visible:outline-gray-600 hid"
                    href={"#"}
                  >
                    <span>Contact us &nbsp; → </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="items-center space-x-6 lg:space-x-8 col-span-1 px-6">
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
          </div>
        </div>
      </div>
    </div>
  );
}
