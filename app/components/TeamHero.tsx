import TeamPerson from "./TeamPerson";
import { people } from "./Team";

interface IHeroHorizontalProps {
  label: string;
  header: string;
  description: string;
}

export default function TeamHero({
  label,
  header,
  description,
}: IHeroHorizontalProps) {
  return (
    <div className="relative w-full">
      <h3 className="font-semibold tracking-tight text-[#FF4F01] text-lg mb-4 text-center md:text-left">
        {label}
      </h3>
      <h4 className="text-3xl font-semibold tracking-tight text-[#201515] sm:text-5xl col-span-2 md:col-span-1">
        {header}
        Team
      </h4>
      <div className="relative flex-col items-start m-auto align-middle grid grid-cols-1 gap-12 mt-4">
        <div className="grid gap-y-3 mt-2">
          <h4 className="text-base tracking-tight text-gray-600">
            {description}
            Our experience comes from a background of working on e-commerce
            solutions, and startups.
          </h4>
        </div>

        <div className="relative flex-col items-start sm:m-auto align-middle grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-4">
          {people.map((person) => (
            <TeamPerson key={person.linkedinUrl} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
}
