import type { MetaFunction } from "@remix-run/cloudflare";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Team from "~/components/Team";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
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
                  <div className="mx-auto  gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-2xl">
                      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Mission
                      </h2>
                      <p className="mt-6 text-lg leading-8 text-gray-600">
                        We are a multidisciplinary team from Croatia, and our
                        mission is to provide the best possible service to our
                        clients. With multiple years of experience in IT and
                        backend development, we are eligible to attack a whole
                        spectrum of problems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="text-left">
        <div className="sm:px-28">
          <section className="relative flex items-center w-full">
            <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
              <div className="relative flex-col items-start m-auto align-middle">
                <Team />
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
