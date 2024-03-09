import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/cloudflare";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Team from "~/components/Team";

const usecases = [
  {
    name: "Lokot App",
    use: "",
    url: "https://lokot.app",
    description: "https://www.linkedin.com/in/antonio-loncar",
  },
  {
    name: "PhishAR",
    url: "https://phishar.com",
    description: "https://www.linkedin.com/in/antonio-loncar",
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Pottr.co - Node.js Use cases" },
    { name: "description", content: "Node.js uses cases" },
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const lang = params.lang;
  return json({ language: lang });
}

export default function NodejsUsecases() {
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
                        About
                      </h2>
                      <p className="mt-6 text-lg leading-8 text-gray-600">
                        With a passion for e-commerce excellence and a track
                        record of 8 years in Node.js mastery, we stand at the
                        intersection of technology and business strategy. From
                        creating game-changing Shopify solutions to fueling
                        startup dreams with Node.js expertise, our journey is
                        defined by collaboration, creativity, and client
                        success. Join us as we turn ideas into reality and
                        businesses into digital triumphs.
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
                <Team
                  header={"Meet the team"}
                  description={
                    "We're a multi-disciplinary team of individuals from Croatia with a passion for creativity, problem-solving, and innovation."
                  }
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
