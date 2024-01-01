import { Link, useLocation } from "@remix-run/react";

export default function Header() {
  const location = useLocation();

  console.log(location.pathname);

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
            <button className="backdrop-blur-sm transition duration-500 ease-in-out bg-[#FF4F01] border  hover:border-[#fffe98]  translate-y-1 text-white hover:text-[#16161d] hover:bg-neutral-200 text-lg font-semibold py-3 px-6 rounded-3xl inline-flex items-center">
              <span>
                {" "}
                {location.pathname == "/contact" ? "home" : "contact"}
              </span>
            </button>
          </Link>

          <Link to={location.pathname == "/about" ? "/" : "/about"}>
            <button className="backdrop-blur-sm transition duration-500 ease-in-out bg-white border border-[#E2E8F0] translate-y-1 text-[#16161d] hover:bg-neutral-200 text-lg font-semibold py-3 px-6 rounded-3xl inline-flex items-center">
              <span> {location.pathname == "/about" ? "home" : "about"}</span>
            </button>
          </Link>

          <Link to="#">
            <button className="backdrop-blur-sm transition duration-500 ease-in-out bg-white border border-[#E2E8F0] translate-y-1 text-[#16161d] hover:bg-neutral-200 text-lg font-semibold py-3 px-6 rounded-3xl inline-flex items-center">
              <span> use cases</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
