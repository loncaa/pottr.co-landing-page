import type { LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import BodyContent from "~/components/BodyContent";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import SectionWrapper from "~/components/SectionWrapper";
import type { BlogList } from "~/data/blogList.server";
import { blogList } from "~/data/blogList.server";

export const loader: LoaderFunction = async () => {
  return json(blogList);
};

export default function Blog() {
  const posts = useLoaderData<BlogList[]>();

  return (
    <>
      <Header />
      <BodyContent>
        <SectionWrapper>
          <div className="gap-x-8 gap-y-20 m-auto">
            {posts.map((post, index) => {
              return (
                <div key={index}>
                  {index !== 0 && <hr className="mx-auto my-[60px]" />}

                  <h2 className=" mb-4 mt-6 font-sans text-xl font-bold leading-[1.3] md:text-3xl">
                    <Link prefetch="intent" to={post.slug}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="my-6 md:text-lg">{post.description}</p>
                  <div className="font-sans font-bold">
                    <span className="mr-4 text-left uppercase text-text-secondary dark:text-d-text-secondary">
                      — {post.publishDate}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </SectionWrapper>
      </BodyContent>
      <Footer />
    </>
  );
}
