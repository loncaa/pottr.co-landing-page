import { Link } from "@remix-run/react";

export interface TeamPersonInterface {
  name: string;
  role: string;
  email: string;
  linkedinUrl?: string;
  imageUrl?: string;
}

interface TeamPersonProps {
  person: TeamPersonInterface;
}

export default function TeamPerson({ person }: TeamPersonProps) {
  return (
    <Link
      to={person.linkedinUrl || "#"}
      target="_blank"
      rel="noreferrer"
      className="transition duration-500 ease-in-out translate-y-1 py-1 px-4 border-transparent hover:border-[#FF4F01] border"
    >
      <div className="flex items-center gap-x-6">
        <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
        <div>
          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
            {person.name}
          </h3>
          <p className="text-sm font-semibold leading-6 text-[#FF4F01]">
            {person.role}
          </p>
        </div>
      </div>
    </Link>
  );
}
