import { Link, useLocation } from "@remix-run/react";

export default function Header() {
  const location = useLocation();

  const buttonCss =
    "backdrop-blur-sm transition duration-500 ease-in-out bg-transparent border border-[#FF4F01] text-[#FF4F01] hover:bg-neutral-200 hover:border-[#FF4F01] translate-y-1 text-lg py-1 px-4 inline-flex items-center";
  const selectedButtonCss =
    "backdrop-blur-sm transition duration-500 ease-in-out border border-[#FF4F01] bg-[#FF4F01] text-white translate-y-1 text-lg py-1 px-4 inline-flex items-center";

  const getButtonCss = (uri: string) => {
    return location.pathname == uri ? selectedButtonCss : buttonCss;
  };

  return (
    <section className="sticky pb-6">
      <div className="max-w-lg px-4 pt-12 sm:pb-8 mx-auto md:max-w-none text-center">
        <Link to="/">
          <h1 className="font-extrabold leading-10 tracking-tight text-[#201515] text-center sm:leading-none text-5xl sm:text-9xl">
            <span className="inline md:block">pottr!</span>
          </h1>
        </Link>
        <span className="relative mt-5 bg-clip-text text-[#201515] inline-block text-2xl">
          building custom software
        </span>
      </div>

      <div className="max-w-lg px-4 mx-auto text-left md:max-w-none md:text-center">
        <div className="text-center py-4 space-x-4">
          <Link to={location.pathname == "/contact" ? "/" : "/contact"}>
            <button className={getButtonCss("/contact")}>
              <span> contact</span>
            </button>
          </Link>

          <Link to={location.pathname == "/about" ? "/" : "/about"}>
            <button className={getButtonCss("/about")}>
              {" "}
              <span>about</span>
            </button>
          </Link>

          <Link to="#">
            <button className={getButtonCss("/use-cases")}>
              <span> use cases</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
