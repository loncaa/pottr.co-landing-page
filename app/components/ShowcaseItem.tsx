export interface ShowcaseItemProps {
  title: string;
  description: string;
  heroLinkUrl?: string;
}
export default function ShowcaseItem({
  title,
  description,
}: ShowcaseItemProps) {
  return (
    <div className="relative items-center lg:inline-flex md:order-first">
      <div className="text-center md:text-left">
        <div>
          <h3 className="text-3xl font-semibold tracking-tight text-[#201515] sm:text-5xl min-h-24">
            {title}
          </h3>
          <h4 className="mt-4 text-base tracking-tight text-gray-600">
            {description}
          </h4>
        </div>
      </div>
    </div>
  );
}
