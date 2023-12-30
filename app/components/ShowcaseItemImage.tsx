export interface ShowcaseItemProps {
  title: string;
  description: string;
  heroImageUrl: string;
  heroLinkUrl: string;
}
export default function ShowcaseItem({
  title,
  description,
  heroImageUrl,
  heroLinkUrl,
}: ShowcaseItemProps) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
      <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
        <div className="max-w-xl text-center lg:text-left">
          <div>
            <p className="text-3xl font-semibold tracking-tight text-[#201515] sm:text-5xl">
              {title}
            </p>
            <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
              {description}
            </p>
          </div>
          <div className="flex justify-center gap-3 mt-10 lg:justify-start">
            <a
              className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-[#FF4F01] focus:outline-none focus-visible:outline-gray-600"
              href={heroLinkUrl}
            >
              <span> Read more &nbsp; → </span>
            </a>
          </div>
        </div>
      </div>
      <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
        <img
          className="object-cover rounded-3xl object-center w-full mx-auto bg-gray-300 lg:ml-auto "
          alt="hero"
          src={heroImageUrl}
        />
      </div>
    </div>
  );
}
