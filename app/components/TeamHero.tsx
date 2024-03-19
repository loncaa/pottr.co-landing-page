import TeamPerson from "./TeamPerson";
import { people } from "./Team";
import { team } from "../../public/locales/en/home.json";

export default function HeroHorizontal() {
  return (
    <div className="relative w-full">
      <h3 className="font-semibold tracking-tight text-[#FF4F01] text-lg mb-4 text-center md:text-left">
        {team.title}
      </h3>
      <h4 className="text-3xl font-semibold tracking-tight text-[#201515] sm:text-5xl col-span-2 md:col-span-1">
        {team.label}
      </h4>
      <div className="relative flex-col items-start m-auto align-middle grid grid-cols-1 gap-12 mt-4">
        <div className="grid gap-y-3 mt-2">
          <h4 className="text-base tracking-tight text-gray-600">
            {team.description}
          </h4>
        </div>

        <div className="relative flex-col items-start sm:m-auto align-middle grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-4">
          {people.map((person) => (
            <TeamPerson key={person.name} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
}
