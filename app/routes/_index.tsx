import type { MetaFunction } from "@remix-run/cloudflare";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import LogoCloud from "~/components/LogoCloud";
import ShowcaseItem from "~/components/ShowcaseItem";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <section>
        <Header />
      </section>

      <div className="text-left">
        <div className="sm:px-28">
          <section className="relative flex items-center w-full">
            <div className="relative items-center w-full px-5 mx-auto max-w-7xl">
              <div className="relative flex-col items-start m-auto align-middle">
                <ShowcaseItem
                  title="Shopify custom integration"
                  description="Use this paragraph to share information about your company or
                products. Make it engaging and interesting, and showcase your brand's
                personality. Thanks for visiting our website!"
                  heroImageUrl="https://i.pinimg.com/originals/2e/2b/21/2e2b21aeed393403d4620367f9e093f9.gif"
                  heroLinkUrl="#"
                />
                <ShowcaseItem
                  title="Node.js backend development"
                  description="Use this paragraph to share information about your company or
                products. Make it engaging and interesting, and showcase your brand's
                personality. Thanks for visiting our website!"
                  heroImageUrl="https://i.pinimg.com/originals/2e/2b/21/2e2b21aeed393403d4620367f9e093f9.gif"
                  heroLinkUrl="#"
                />
              </div>
            </div>
          </section>
        </div>
        <section>
          <Hero />
        </section>

        <section>
          <LogoCloud />
        </section>

        <Footer />
      </div>
    </div>
  );
}
