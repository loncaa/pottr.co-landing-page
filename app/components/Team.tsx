import TeamPerson, { TeamPersonInterface } from "./TeamPerson";
import { team } from "~/locales/en/about.json";

export const people: TeamPersonInterface[] = [
  {
    name: "Antonio Loncar",
    role: "Software Engineer & Founder",
    email: "antonio@pottr.co",
    linkedinUrl: "https://www.linkedin.com/in/antonio-loncar",
    imageUrl: "/aloncar.jpg",
  },
  {
    name: "Branimir Hrženjak",
    role: "Digital Marketing Specialist",
    email: "antonio@pottr.co",
    linkedinUrl: "https://www.linkedin.com/in/branimir-hr%C5%BEenjak-616738127",
    imageUrl: "/branimir.jpg",
  },
  {
    name: "Ozren Klančir",
    role: "Senior Frontend Engineer",
    email: "antonio@pottr.co",
    linkedinUrl: "https://www.linkedin.com/in/oklancir/",
    imageUrl: "/ozren.jpg",
  },
  {
    name: "Kristijan Štokan",
    role: "Data Analyst Specialist",
    email: "antonio@pottr.co",
    linkedinUrl: "https://www.linkedin.com/in/kristijan-s-7b3513269/",
    imageUrl: "/kiso.jpg",
  },
];

export default function Team() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {team.label}
      </h1>
      <div className="grid gap-x-8 gap-y-10 xl:grid-cols-3 mt-6">
        <h4 className="text-lg leading-8 text-gray-600">{team.description}</h4>
        <div
          role="list"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7 gap-x-1 xl:col-span-2"
        >
          {people.map((person) => (
            <TeamPerson person={person} key={person.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
