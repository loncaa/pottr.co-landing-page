import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import BodyContent from "~/components/BodyContent";
import Footer from "~/components/Footer";
import SectionWrapper from "~/components/SectionWrapper";
import type { BlogList } from "~/data/blogList.server";
import { blogList } from "~/data/blogList.server";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const pathname = url.pathname;

  const currentPost = blogList.find(({ pathName }) => pathName === pathname);

  return json(currentPost);
};


export default function BlogLayout() {
  const currentPost = useLoaderData<BlogList>();

  return (
    <>
      <BodyContent>
        {currentPost ? (
          <header className="text-center">
            <p
              className="my-10 font-sans font-semibold uppercase text-text-secondary dark:text-d-text-secondary"
            >
              {currentPost.publishDate} ~ {currentPost.readingTime} read
            </p>
            <h1
              className="mb-20 text-4xl font-bold leading-[1.3] md:text-6xl"
            >
              {currentPost.title}
            </h1>
          </header>
        ) : (
          <></>
        )}

        <SectionWrapper>
          <div className="prose max-w-none w-screen py-[1em] px-[2em] dark:prose-invert  md:prose-lg lg:prose-xl prose-headings:text-text-primary prose-a:no-underline prose-pre:p-0 dark:prose-headings:text-d-text-primary">
            <Outlet />
          </div>
        </SectionWrapper>
      </BodyContent >

      <Footer />
    </>
  );
}
