import TeamPerson, { TeamPersonInterface } from "./TeamPerson";

export const people: TeamPersonInterface[] = [
  {
    name: "Antonio Loncar",
    role: "Software Engineer & Founder",
    email: "antonio@pottr.co",
    linkedinUrl: "https://www.linkedin.com/in/antonio-loncar",
    imageUrl: "/aloncar.jpg",
  },
  {
    name: "Katarina Tokic",
    role: "UI/UX Designer",
    email: "antonio@pottr.co",
    linkedinUrl: "https://www.linkedin.com/in/katarina-tokic/",
    imageUrl: "/ktokic.jpg",
  },
  {
    name: "Branimir Hrženjak",
    role: "Digital Marketing Specialist",
    email: "antonio@pottr.co",
    linkedinUrl: "https://www.linkedin.com/in/branimir-hr%C5%BEenjak-616738127",
    imageUrl: "/branimir.jpg",
  },
  {
    name: "Lucija Novak",
    role: "UI/UX Designer",
    email: "antonio@pottr.co",
    imageUrl: "/lnovak.png",
  },
];

interface ITeamProps {
  header: string;
  description: string;
}

export default function Team({ header, description }: ITeamProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {header}
      </h1>
      <div className="grid gap-x-8 gap-y-10 xl:grid-cols-3 mt-6">
        <h4 className="text-lg leading-8 text-gray-600">{description}</h4>
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
