import { json, type LoaderFunction, type MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import BodyContent from "~/components/BodyContent";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import HeroHorizontal from "~/components/HeroHorizontal";
import LetsChat from "~/components/LetsChat";
import LogoCloud from "~/components/LogoCloud";
import SectionWrapper from "~/components/SectionWrapper";
import Services from "~/components/Services";
import UseCases from "~/components/UseCases";
import { blogList, BlogList } from "~/data/blogList.server";
import { home } from "~/locales/en/meta.json";

export const meta: MetaFunction = () => {
  return [
    { title: home.title },
    {
      name: "description",
      content: home.description,
    },
  ];
};

export const loader: LoaderFunction = async () => {
  return json(blogList);
};

export default function Index() {
  const posts = useLoaderData<BlogList[]>();

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
          <UseCases posts={posts} />
        </SectionWrapper>

        <SectionWrapper>
          <LogoCloud />
        </SectionWrapper>

        <SectionWrapper>
          <LetsChat />
        </SectionWrapper>

        <Footer />
      </BodyContent>
    </>
  );
}
