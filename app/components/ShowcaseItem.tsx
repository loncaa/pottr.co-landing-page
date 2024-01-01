export interface ShowcaseItemProps {
  title: string;
  description: string;
  heroLinkUrl: string;
}
export default function ShowcaseItem({
  title,
  description,
  heroLinkUrl,
}: ShowcaseItemProps) {
  return (
    <div className="relative items-center lg:inline-flex md:order-first">
      <div className="text-center md:text-left">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-[#201515] sm:text-5xl min-h-24">
            {title}
          </h1>
          <h4 className="mt-4 text-base tracking-tight text-gray-600">
            {description}
          </h4>
        </div>
        <div className="flex justify-center gap-3 mt-4 md:mt-10 lg:justify-start">
          <a
            className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-[#FF4F01] focus:outline-none focus-visible:outline-gray-600"
            href={heroLinkUrl}
          >
            <span> use case &nbsp; → </span>
          </a>
        </div>
      </div>
    </div>
  );
}
