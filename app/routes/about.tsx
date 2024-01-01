import type { MetaFunction } from "@remix-run/cloudflare";
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

function BodyContent({ children }) {
  return <section className="sm:px-28">{children}</section>;
}

export default function Index() {
  return (
    <>
      <Header />
      <BodyContent>
        <SectionWrapper>
          <div className="gap-x-8 gap-y-20 xl:grid-cols-3 m-auto ">
            <h1 className="font-semibold tracking-tight text-[#FF4F01] text-lg mb-2 text-center md:text-left">
              about us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              With a passion for e-commerce excellence and a track record of 8
              years in Node.js mastery, we stand at the intersection of
              technology and business strategy. From creating game-changing
              Shopify solutions to fueling startup dreams with Node.js
              expertise, our journey is defined by collaboration, creativity,
              and client success. Join us as we turn ideas into reality and
              businesses into digital triumphs.
            </p>
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
