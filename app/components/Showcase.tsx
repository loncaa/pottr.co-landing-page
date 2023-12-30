import ShowcaseItem from "./ShowcaseItem";

export default function Showcase() {
  return (
    <div className="relative items-center w-full px-5 mx-auto max-w-7xl">
      <h3 className="text-lg font-semibold tracking-tight text-[#FF4F01] sm:text-lg mb-2 text-center md:text-left">
        services
      </h3>
      <div className="relative flex-col items-start m-auto align-middle grid grid-cols-1 md:grid-cols-2 gap-8">
        <ShowcaseItem
          title="Shopify apps  and custom integrations"
          description="Use this paragraph to share information about your company or
        products. Make it engaging and interesting, and showcase your brand's
        personality. Thanks for visiting our website!"
          heroLinkUrl="#"
        />
        <ShowcaseItem
          title="Node.js backend development"
          description="Use this paragraph to share information about your company or
        products. Make it engaging and interesting, and showcase your brand's
        personality. Thanks for visiting our website!"
          heroLinkUrl="#"
        />
      </div>
    </div>
  );
}
