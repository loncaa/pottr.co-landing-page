import ShowcaseItem from "./ShowcaseItem";

export default function Services() {
  return (
    <div className="relative items-center w-full">
      <h3 className="font-semibold tracking-tight text-[#FF4F01] text-lg mb-2 text-center md:text-left">
        services
      </h3>
      <div className="relative flex-col items-start m-auto align-middle grid grid-cols-1 md:grid-cols-2 gap-12">
        <ShowcaseItem
          title="Shopify custom App Design & Development"
          description="
          Boost your e-commerce store with our tailor-made Shopify apps and extensions.
          Improve your customer experience with tempting upsells and gift with purchase extensions."
          heroLinkUrl="#"
        />
        <ShowcaseItem
          title="Shopify custom Integration Development"
          description="
          Your app should suit your business, not the other way around. 
          Going custom ensures your customers get what they want. 
          And you get the features you need.
          "
          heroLinkUrl="#"
        />
        <ShowcaseItem
          title="Node.js Backend Development"
          description="
          Let us help you create MVPs, built strong architecture, or offer guidance for success.
          Let's build, grow, and disrupt the market collaboratively! 
          "
          heroLinkUrl="#"
        />
      </div>
    </div>
  );
}
