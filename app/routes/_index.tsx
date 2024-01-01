import type { MetaFunction } from "@remix-run/cloudflare";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import HeroHorizontal from "~/components/HeroHorizontal";
import LogoCloud from "~/components/LogoCloud";
import SectionWrapper from "~/components/SectionWrapper";
import Services from "~/components/Services";

export const meta: MetaFunction = () => {
  return [
    { title: "Pottr.co - Digital agency" },
    {
      name: "description",
      content:
        "A small digital agency for Shopify integration and custom app development",
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
          <Services />
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
