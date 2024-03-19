import type { MetaFunction } from "@remix-run/cloudflare";
import BodyContent from "~/components/BodyContent";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import HeroHorizontal from "~/components/HeroHorizontal";
import LetsChat from "~/components/LetsChat";
import LogoCloud from "~/components/LogoCloud";
import SectionWrapper from "~/components/SectionWrapper";
import Services from "~/components/Services";
import { home } from "../../public/locales/hr/meta.json";

export const meta: MetaFunction = () => {
  return [
    { title: home.title },
    {
      name: "description",
      content: home.description,
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
