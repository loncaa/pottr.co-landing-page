import type { MetaFunction } from "@remix-run/cloudflare";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import HeroHorizontal from "~/components/HeroHorizontal";
import LogoCloud from "~/components/LogoCloud";
import SectionWrapper from "~/components/SectionWrapper";
import Showcase from "~/components/Showcase";

export const meta: MetaFunction = () => {
  return [
    { title: "Pottr.co - Home" },
    {
      name: "description",
      content:
        "A small digital agency for Shopify integrations and custom app development",
    },
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
          <Showcase />
        </SectionWrapper>

        <SectionWrapper>
          <HeroHorizontal />
        </SectionWrapper>

        <SectionWrapper>
          <LogoCloud />
        </SectionWrapper>

        <Footer />
      </BodyContent>
    </>
  );
}
