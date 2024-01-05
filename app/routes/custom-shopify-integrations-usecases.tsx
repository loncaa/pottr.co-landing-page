import type { MetaFunction } from "@remix-run/cloudflare";
import BodyContent from "~/components/BodyContent";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import SectionWrapper from "~/components/SectionWrapper";

const usecases = [
  {
    name: "Droppa",
    url: "https://lokot.app",
    description: "https://www.linkedin.com/in/antonio-loncar",
  },
  {
    name: "Aarke",
    url: "https://phishar.com",
    description: "https://www.linkedin.com/in/antonio-loncar",
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Pottr.co - Custom Shopify Integrations Usecases" },
    { name: "description", content: "Custom Shopify Integrations Usecases" },
  ];
};

export default function ShopifyUsecases() {
  return (
    <div>
      <Header />

      <BodyContent>
        <SectionWrapper>
          <div className="gap-x-8 gap-y-20 m-auto">
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
      </BodyContent>

      <Footer />
    </div>
  );
}
