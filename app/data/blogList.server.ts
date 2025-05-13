// We do not import the mdx files here inorder to make use of dynamic imports inside $postId file
export interface BlogList {
  slug: string;
  title: string;
  publishDate: string;
  description: string;
  pathName: string;
  readingTime: string;
  thumbnail: string;
}

export const blogList: Array<BlogList> = [
  {
    slug: "shopify-checkout-extension", // Filename
    title: "Shopify Checkout Upsell Extension",
    publishDate: "26 Apr 2025",
    description:
      "In today's competitive e-commerce landscape, enhancing the checkout experience is pivotal for increasing sales and customer satisfaction.",
    pathName: "/blog/shopify-checkout-extension",
    readingTime: "2 min",
    thumbnail: '/assets/images/casual-life-3d-meditation-crystal.webp'
  },
  {
    slug: "custom-integration",
    title: "Custom Shopify-Warehouse Integration",
    publishDate: "01 May 2025",
    description:
      "In the fast-paced world of e-commerce, seamless operations between online stores and fulfillment centers are crucial.",
    pathName: "/blog/custom-integration",
    readingTime: "5 min",
    thumbnail: '/assets/images/casual-life-3d-workspace.webp'
  },
  {
    slug: "building-startups",
    title: "Building Product Apps for Startups",
    publishDate: "13 May 2025",
    description: "In the dynamic world of startup development, speed, security, and scalability are everything.",
    pathName: "/blog/building-startups",
    readingTime: "3 min",
    thumbnail: '/assets/images/casual-life-3d-likes.webp'
  },
];
