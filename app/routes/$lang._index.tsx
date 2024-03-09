import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/cloudflare";
import BodyContent from "~/components/BodyContent";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import HeroHorizontal from "~/components/HeroHorizontal";
import LetsChat from "~/components/LetsChat";
import LogoCloud from "~/components/LogoCloud";
import SectionWrapper from "~/components/SectionWrapper";
import Services from "~/components/Services";

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

export async function loader({ params }: LoaderFunctionArgs) {
  const lang = params.lang;

  // fetch translations based on the language from params

  return json({ language: lang });
}

export default function Index() {
  return (
    <>
      <Header />

      <BodyContent>
        <SectionWrapper>
          <Services
            label="services"
            services={[
              {
                title: "Shopify Custom App Design & Development",
                description:
                  "Tailor-made Shopify apps and extensions, designed to look pixel-perfect every time. Our dedicated team is here to deliver you the ideal e-commerce experience.",
                url: "/custom-shopify-apps-usecases",
              },
              {
                title: "Shopify Custom Integration Development",
                description:
                  "Custom Shopify integrations, created and integrated into your store by seasoned experts. We'll make sure that your e-commerce ecosystem functions in complete harmony.",
                url: "/custom-shopify-integrations-usecases",
              },
              {
                title: "Custom UI/UX Research and Design",
                description:
                  "Research and design for your e-commerce project that's tailored to your business goals. Our team is ready to validate and build a design solution to delight your customers.",
                url: "/nodejs-usecases",
              },
              {
                title: "Website Copywriting and SEO",
                description:
                  "All-inclusive website copywriting and SEO services for your e-commerce Shopify store. Let our experts guide and help craft messaging that converts customers at scale.",
                url: "/nodejs-usecases",
              },
            ]}
          />
        </SectionWrapper>

        <SectionWrapper>
          <LogoCloud label="trusted by companies" />
        </SectionWrapper>

        <SectionWrapper>
          <HeroHorizontal
            label="tech stack"
            header="Technology"
            description="Here are the main technologies used in our projects. Don't see your
            technologies listed here? No problem – we've got it covered!"
          />
        </SectionWrapper>

        <SectionWrapper>
          <LetsChat
            label=" Looking for custom services?"
            description="Get in touch directly and we'll set up a discovery workshop."
            actionLabel="let's chat &nbsp; → "
          />
        </SectionWrapper>

        <Footer />
      </BodyContent>
    </>
  );
}
