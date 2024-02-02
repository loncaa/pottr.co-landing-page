import ShowcaseItem from "./ShowcaseItem";

export default function Services() {
  return (
    <div className="relative items-center w-full">
      <h2 className="font-semibold tracking-tight text-[#FF4F01] text-lg mb-2 text-center md:text-left">
        services
      </h2>
      <div className="relative flex-col items-start m-auto align-middle grid grid-cols-1 md:grid-cols-2 gap-12">
        <ShowcaseItem
          title="Shopify Custom App Design & Development"
          description="
          Tailor-made Shopify apps and extensions, designed to look pixel-perfect every time. Our dedicated team is here to deliver you the ideal e-commerce experience."
          heroLinkUrl="/custom-shopify-apps-usecases"
        />
        <ShowcaseItem
          title="Shopify Custom Integration Development"
          description="
          Custom Shopify integrations, created and integrated into your store by seasoned experts. We'll make sure that your e-commerce ecosystem functions in complete harmony."
          heroLinkUrl="/custom-shopify-integrations-usecases"
        />
        <ShowcaseItem
          title="Custom UI/UX Research and Design"
          description="Research and design for your e-commerce project that's tailored to your business goals. 
          Our team is ready to validate and build a design solution to delight your customers."
          heroLinkUrl="/nodejs-usecases"
        />
        <ShowcaseItem
          title="Website Copywriting and SEO"
          description="All-inclusive website copywriting and SEO services for your e-commerce Shopify store.
          Let our experts guide and help craft messaging that converts customers at scale."
          heroLinkUrl="/nodejs-usecases"
        />
      </div>
    </div>
  );
}
