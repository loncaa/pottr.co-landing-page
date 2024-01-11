import type { MetaFunction } from "@remix-run/cloudflare";
import BodyContent from "~/components/BodyContent";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import SectionWrapper from "~/components/SectionWrapper";
import Team from "~/components/Team";

export const meta: MetaFunction = () => {
  return [
    { title: "Pottr.co - About" },
    { name: "description", content: "Get us know better" },
  ];
};

export default function Index() {
  return (
    <>
      <Header />
      <BodyContent>
        <SectionWrapper>
          <div className="gap-x-8 gap-y-20 m-auto">
            <h1 className="font-semibold tracking-tight text-[#FF4F01] text-lg mb-2 text-center md:text-left">
              about us
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <p className="mt-6 text-lg leading-8 text-gray-600 col-span-1">
                We are a small team of creative problem-solvers, who are
                specialized in delivering custom software solutions. Our
                experience is built on a e-commerce solutions, and in startups.
              </p>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <Team />
        </SectionWrapper>
      </BodyContent>

      <Footer />
    </>
  );
}
