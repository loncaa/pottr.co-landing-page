import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import type { LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { Outlet, useLoaderData } from "@remix-run/react";
import BodyContent from "~/components/BodyContent";
import ContactForm from "~/components/ContactForm";
import Footer from "~/components/Footer";
import SectionWrapper from "~/components/SectionWrapper";
import type { BlogList } from "~/data/blogList.server";
import { blogList } from "~/data/blogList.server";
import { description } from "../locales/en/blog.json";

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
      <main className="px-5">
        <section className="sm:px-28">
          <div
            className="pt-8 lg:pt-16 mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg"
          >
            {currentPost ? (
              <>
                <div className="inline-flex text-gray-900 items-center">
                  <a href="/blog" className="hover:text-[#FF4F01]"><ArrowLeftIcon className="mr-4 w-8 h-8" /></a>
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">{currentPost.title}</h1>
                </div>
                <p className="font-sans text-text-secondary ml-12">
                  {currentPost.publishDate} ~ {currentPost.readingTime} read
                </p>
              </>
            ) : (
              <></>
            )}
          </div>
        </section>
        <BodyContent>
          <div className="prose mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg">
            <Outlet />
          </div>
        </BodyContent >
      </main>

      <SectionWrapper>
        <div className="prose mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg border-t border-[#FF4F01] border-double">
          <div className="py-14">
            <p>
              {description}
            </p>
            <p></p>
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
}
