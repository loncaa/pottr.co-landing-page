import type { MetaFunction } from "@remix-run/cloudflare";
import BodyContent from "~/components/BodyContent";
import ContactForm from "~/components/ContactForm";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import SectionWrapper from "~/components/SectionWrapper";

export const meta: MetaFunction = () => {
  return [
    { title: "Pottr.co - Contact" },
    {
      name: "description",
      content:
        "Get in touch with our team of experts and let’s create something extraordinary together.",
    },
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
                  If you have questions about our expertise and skills, or if
                  you're interested in exploring collaboration possibilities,
                  feel free to send us a quick message. Our team of specialists
                  is eager to bring your ideas to life.
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
