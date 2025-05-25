import { Link } from "@remix-run/react";
import { BlogList } from "~/data/blogList.server";
import { usecases } from "~/locales/en/home.json";

interface UseCasesProps {
    posts: BlogList[]
}

export default function UseCases({ posts }: UseCasesProps) {
    return (
        <div className="relative items-center w-full">
            <h2 className="font-semibold tracking-tight text-[#FF4F01] text-lg mb-2 text-center md:text-left">
                {usecases.label}
            </h2>

            <div className="justify-between align-baseline flex-col grid grid-cols-1 md:grid-cols-3 gap-12">
                {posts.slice(0, 3).map((post, index) => {
                    return (
                        <div key={index}>
                            <div className="w-full h-[200px] overflow-hidden rounded-md">
                                <img
                                    className="w-full h-full object-contain col-span-1"
                                    src={`${post.thumbnail}`}
                                    alt={`${post.title}`}
                                />
                            </div>
                            <h2 className="mb-4 mt-6 font-sans text-xl font-bold leading-[1.3] md:text-3xl hover:text-[#FF4F01] focus:outline-none focus-visible:outline-gray-600">
                                <Link prefetch="intent" to={`/blog/${post.slug}`}>
                                    {post.title}
                                </Link>
                            </h2>
                            <div className="grid gap-y-3 mt-2">
                                <h4 className="text-base tracking-tight text-gray-600">{post.description}</h4>
                                <div className="flex lg:justify-start">
                                    <Link
                                        className="inline-flex text-sm font-semibold text-black duration-200 hover:text-[#FF4F01] focus:outline-none focus-visible:outline-gray-600 hid"
                                        to={`/blog/${post.slug}`}>
                                        <span>{usecases.readMore} </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
