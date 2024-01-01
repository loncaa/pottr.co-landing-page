import ShowcaseItem from "./ShowcaseItem";

export default function Showcase() {
  return (
    <div className="relative items-center w-full">
      <h3 className="font-semibold tracking-tight text-[#FF4F01] text-lg mb-2 text-center md:text-left">
        services
      </h3>
      <div className="relative flex-col items-start m-auto align-middle grid grid-cols-1 md:grid-cols-2 gap-8">
        <ShowcaseItem
          title="Shopify apps and integrations"
          description="
          Boost your e-commerce store with our tailor-made Shopify apps and integrations.
          Improve your customer experience with tempting upsells and simplify your backend with ERP and Warehouse integrations – we have your digital store covered."
          heroLinkUrl="#"
        />
        <ShowcaseItem
          title="Node.js backend development"
          description="
          We have experts with 8 years of expertise in Node.js!
          Let us help you create MVPs, built strong architecture, or offer guidance for success.
          Let's build, grow, and disrupt the market collaboratively! 
          "
          heroLinkUrl="#"
        />
      </div>
    </div>
  );
}
