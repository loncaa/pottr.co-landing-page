import type { MetaFunction } from "@remix-run/cloudflare";
import BodyContent from "~/components/BodyContent";
import ContactForm from "~/components/ContactForm";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import SectionWrapper from "~/components/SectionWrapper";
import { label, description } from "../locales/en/contact.json";
import { contact } from "../locales/en/meta.json";

export const meta: MetaFunction = () => {
  return [
    { title: contact.title },
    {
      name: "description",
      content: contact.description,
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
                  {label}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {description}
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
