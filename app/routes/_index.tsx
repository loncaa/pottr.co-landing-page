import type { MetaFunction } from "@remix-run/cloudflare";
import BodyContent from "~/components/BodyContent";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import HeroHorizontal from "~/components/HeroHorizontal";
import LetsChat from "~/components/LetsChat";
import LogoCloud from "~/components/LogoCloud";
import SectionWrapper from "~/components/SectionWrapper";
import Services from "~/components/Services";
import TeamHero from "~/components/TeamHero";

export const meta: MetaFunction = () => {
  return [
    { title: "Pottr.co - Digital e-commerce agency" },
    {
      name: "description",
      content:
        "E-commerce digital agency focusing on Shopify integration and custom app development.",
    },
  ];
};

export default function Index() {
  return (
    <>
      <Header />

      <BodyContent>
        <SectionWrapper>
          <Services />
        </SectionWrapper>

        <SectionWrapper>
          <LogoCloud />
        </SectionWrapper>

        <SectionWrapper>
          <TeamHero />
        </SectionWrapper>

        <SectionWrapper>
          <HeroHorizontal />
        </SectionWrapper>

        <SectionWrapper>
          <LetsChat />
        </SectionWrapper>

        <Footer />
      </BodyContent>
    </>
  );
}
