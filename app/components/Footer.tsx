import { Link } from "@remix-run/react";

import { language } from "~/locales/en/footer.json";

export default function Footer() {
  return (
    <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 h-full">
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row border-[#201515]">
        <p className="text-sm text-gray-600">
          © Copyright 2024 Pottr. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li className="inline-flex text-base font-semibold text-black duration-200 focus:outline-none focus-visible:outline-gray-600">
            <span>{language}</span>
          </li>
          <li>
            <Link
              to={"https://pottr.co"}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-600 hover:text-[#FF4F01] transition-colors duration-300"
            >
              English
            </Link>
          </li>
          <li>
            <Link
              to={"https://pottr.hr"}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-600 hover:text-[#FF4F01] transition-colors duration-300"
            >
              Hrvatski
            </Link>
          </li>
        </ul>

        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <Link
              to={"https://www.linkedin.com/company/101435742"}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-[#FF4F01]"
            >
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
