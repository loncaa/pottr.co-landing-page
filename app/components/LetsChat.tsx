import { Link } from "@remix-run/react";

interface ILetsChatProps {
  label: string;
  description: string;
  actionLabel: string;
}

export default function LetsChat({
  label,
  description,
  actionLabel,
}: ILetsChatProps) {
  return (
    <div className="relative">
      <h2 className="text-3xl font-semibold tracking-tight text-[#201515] sm:text-5xl col-span-2 md:col-span-1">
        {label}
      </h2>
      <div className="relative flex-col items-start m-auto align-middle grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
        <div className="grid gap-y-3 mt-2">
          <h3 className="text-base tracking-tight text-gray-600">
            {description}
          </h3>
          <div className="flex md:mt-6 lg:justify-start">
            <Link
              className="inline-flex text-sm font-semibold text-black duration-200 hover:text-[#FF4F01] focus:outline-none focus-visible:outline-gray-600 hid"
              to={"/contact"}
            >
              <span>{actionLabel}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
