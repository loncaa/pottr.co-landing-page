import { form } from "../locales/en/contact.json";
import { url } from "../locales/en/meta.json";

export default function ContactForm() {
  return (
    <form action="https://formsubmit.co/aloncar.mail@gmail.com" method="POST">
      <input
        type="hidden"
        name="_subject"
        value={`New submission from ${url.replace(/(^\w+:|^)\/\//, "")}!`}
      />
      <input type="hidden" name="_captcha" value="true"></input>
      <div className="space-y-12">
        <div className="pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="project-type"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {form.label}
              </label>
              <div className="mt-2">
                <select
                  required={true}
                  id="project-type"
                  name="project-type"
                  className="block w-full bg-white border border-[#16161d]py-1.5 text-gray-900  focus:border-[#FF4F01] focus:outline-none focus:ring-0 placeholder:text-gray-400 sm:text-sm sm:leading-6 sm:max-w-xs"
                >
                  <option disabled={true} value={""}>
                    {form.optionDefault}
                  </option>
                  {form.options.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-span-1 sm:col-span-3">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {form.fullname}
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
                {form.email}
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

            <div className="col-span-full">
              <label
                htmlFor="message"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {form.message}
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
          <span>&nbsp;→&nbsp;→&nbsp;→&nbsp;{form.send}&nbsp;→</span>
        </button>
      </div>
    </form>
  );
}
