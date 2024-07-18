import Image from "next/image";
import copyIcon from "/public/copyIcon.svg";
import React from "react";

export default function ContactCard() {
  return (
    <div className="[ py-5 px-[22px] border-b ]">
      <h6 className="[ mb-5 ]">CONTACTS</h6>
      <Contact />
    </div>
  );
}

const Contact = () => {
  const contactPerson = [
    {
      name: "John Doe",
      role: "OFFICE MANAGER",
      email: "johndoe@email.com",
      phone: "+44 1234 567 899",
    },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => alert(`Copied ${text} to clipboard`))
      .catch((err) => console.error("Failed to copy:", err));
  };

  return (
    <div>
      {contactPerson.map((person, index) => (
        <div key={index} className="flex flex-col gap-2">
          <div className="[ flex md:flex-row flex-col md:items-center gap-2 ]">
            <span>{person.name}</span>
            <h6 className="[ w-fit px-1.5 py-0.5 rounded-full border-[#D7D3D1] border card-bg ]">
              {person.role}
            </h6>
          </div>
          <div
            className="[ p13 neutral-70 group ] cursor-pointer"
            onClick={() => copyToClipboard(person.email)}
          >
            <div className="[ flex items-center gap-2 ]">
              <div>{person.email}</div>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Image width={14} height={14} src={copyIcon.src} alt="copy" />
              </span>
            </div>
          </div>
          <div>
            <div className="[ p13 neutral-70 ]">{person.phone}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
