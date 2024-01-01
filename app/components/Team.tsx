import { Link } from "@remix-run/react";

const people = [
  {
    name: "Antonio Loncar",
    role: "Founder & CTO",
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
    name: "Partners",
    role: "Software developer",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];

export default function Team() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Meet our team
      </h1>
      <div className="grid gap-x-8 gap-y-10 xl:grid-cols-3 mt-6">
        <h4 className="text-lg leading-8 text-gray-600">
          We are a multi-disciplinary team of individuals from Croatia with a
          passion for creativity, problem solving and innovation.
        </h4>
        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-7 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <Link
                to={person.linkedinUrl || "#"}
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-[#FF4F01]">
                      {person.role}
                    </p>
                    {person.linkedinUrl && (
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {
                          person.linkedinUrl.split(
                            "https://www.linkedin.com/"
                          )[1]
                        }
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
