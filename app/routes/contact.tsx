import type { MetaFunction } from "@remix-run/cloudflare";
import BodyContent from "~/components/BodyContent";
import ContactForm from "~/components/ContactForm";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import SectionWrapper from "~/components/SectionWrapper";

export const meta: MetaFunction = () => {
  return [
    { title: "Pottr.co - Contact" },
    { name: "description", content: "Send us a message" },
  ];
};

export default function Contact() {
  return (
    <>
      <Header />
      <BodyContent>
        <SectionWrapper>
          <div className="relative items-center flex-col m-auto align-middle">
            <div className="gap-x-8 grid grid-cols-1 lg:grid-cols-2">
              <div className="col-span-1">
                <h1 className="font-semibold tracking-tight text-[#FF4F01] text-lg mb-2 text-center md:text-left">
                  get in touch!
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  If you have any questions about our Shopify expertise, Node.js
                  skills, or if you're simply interested in exploring
                  collaboration possibilities, feel free to send us a message
                  below. Our team of specialists is eager to bring your ideas to
                  life. Let's create something extraordinary together!
                </p>
                <p></p>
              </div>
              <div className="col-span-1">
                <ContactForm />
              </div>
            </div>
          </div>
        </SectionWrapper>

        <Footer />
      </BodyContent>
    </>
  );
}
