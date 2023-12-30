import type { MetaFunction } from "@remix-run/cloudflare";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "Pottr.co - Contact" },
    { name: "description", content: "Send us a message" },
  ];
};

export default function Contact() {
  return (
    <div>
      <section>
        <Header />
      </section>
      <div className="text-left">
        <div className="sm:px-28">
          <section className="relative flex items-center w-full">
            <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
              <div className="relative flex-col items-start m-auto align-middle">
                <div className="bg-white py-4 sm:py-6">
                  <div className="m-auto max-w-2xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-2xl">
                      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Send a message!
                      </h2>
                      <p className="mt-6 text-lg leading-8 text-gray-600">
                        Explain to us in a few words what are your concerns or
                        what are your requirements. Technical part leave to us!
                      </p>
                    </div>
                    <div className="w-full">
                      <form
                        action="https://formsubmit.co/aloncar.mail@gmail.com"
                        method="POST"
                      >
                        <input
                          type="hidden"
                          name="_subject"
                          value="Pottr.co submission!"
                        />
                        <input
                          type="hidden"
                          name="_captcha"
                          value="true"
                        ></input>
                        <div className="space-y-12">
                          <div className="pb-12">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                              <div className="col-span-1 sm:col-span-3">
                                <label
                                  htmlFor="name"
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Full name
                                </label>
                                <div className="mt-2">
                                  <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
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
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
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
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
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
                                    name="message"
                                    id="message"
                                    rows={3}
                                    defaultValue={""}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
