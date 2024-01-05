export default function ContactForm() {
  return (
    <form action="https://formsubmit.co/aloncar.mail@gmail.com" method="POST">
      <input type="hidden" name="_subject" value="Pottr.co submission!" />
      <input type="hidden" name="_captcha" value="true"></input>
      <div className="space-y-12">
        <div className="pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="project-type"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                What type of project do you have in mind?
              </label>
              <div className="mt-2">
                <select
                  required={true}
                  id="project-type"
                  name="project-type"
                  className="block w-full bg-white border border-[#16161d]py-1.5 text-gray-900  focus:border-[#FF4F01] focus:outline-none focus:ring-0 placeholder:text-gray-400 sm:text-sm sm:leading-6 sm:max-w-xs"
                >
                  <option selected disabled={true} value={""}>
                    Choose a gig type
                  </option>
                  <option value={"Create an custom Shopify app"}>
                    Create an custom Shopify app
                  </option>
                  <option value={"Create a custom Shopify integration"}>
                    Create a custom Shopify integration
                  </option>
                  <option value={"Work on a Node.js project"}>
                    Work on a Node.js project
                  </option>
                  <option value={"Create and MVP project"}>
                    Create and MVP project
                  </option>
                  <option value="I'm not sure">I'm not sure</option>
                </select>
              </div>
            </div>

            <div className="col-span-1 sm:col-span-3">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full name
              </label>
              <div className="mt-2">
                <input
                  required={true}
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  className="block w-full border border-[#16161d]py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:border-[#FF4F01] focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  required={true}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full border border-[#16161d]py-1.5 text-gray-900  focus:border-[#FF4F01] focus:outline-none focus:ring-0 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="budget"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Budget
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="budget"
                  id="budget"
                  className="block w-full border border-[#16161d]py-1.5 text-gray-900  focus:border-[#FF4F01] focus:outline-none focus:ring-0 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="message"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2">
                <textarea
                  required={true}
                  name="message"
                  id="message"
                  rows={3}
                  defaultValue={""}
                  className="block w-full border border-[#16161d]py-1.5 text-gray-900  focus:border-[#FF4F01] focus:outline-none focus:ring-0 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-x-6">
        <button
          className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-[#FF4F01] focus:outline-none focus-visible:outline-gray-600"
          type="submit"
        >
          <span>&nbsp;→&nbsp;→&nbsp;→&nbsp;send&nbsp;→</span>
        </button>
      </div>
    </form>
  );
}
