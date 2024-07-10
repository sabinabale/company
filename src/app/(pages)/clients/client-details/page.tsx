"use client";
import Image from "next/image";
import arrowRight from "/public/arrowRight.svg";
import phone from "/public/phone.svg";
import email from "/public/email.svg";
import copyIcon from "/public/copyIcon.svg";
import TabHeading from "@/components/TabHeading";
import EditClientButton from "@/components/buttons/EditClientButton";

import Container from "@/layout/Container";
import CleaningSchedules from "@/components/cards/CleaningSchedules";

export default function Page() {
  return (
    <div className="[ flow ]">
      <div className="[ flex items-center justify-between ] px-5 pt-2 mb-11">
        <div className="[ flex items-center gap-2.5 ] [ text-[13px] pl-2 ]">
          <a href="/clients">Clients</a>
          <Image
            className="[ opacity-60 ]"
            width={16}
            height={16}
            src={arrowRight.src}
            alt="arrow right"
          />
          <div className="[ font-medium ]">Company A</div>
        </div>
        <EditClientButton />
      </div>
      <Container>
        <ClientDetails />
      </Container>
    </div>
  );
}

const ClientDetails = () => {
  return (
    <div>
      <div className="[ w-[34px] h-[34px] ] [ flex items-center justify-center ] [ mb-4 font-medium text-[19px] rounded-[11px] border border-[#E7E5E4] bg-amber-500 ] ">
        A
      </div>
      <TabHeading>Company A</TabHeading>
      <Address />

      <Tabs />
      <CleaningSchedules />
    </div>
  );
};

const Address = () => {
  return (
    <div className="mt-3 mb-[32px] text-[#57534F]">
      1901 Thornridge Cir. Shiloh, Hawaii 81063
    </div>
  );
};

const Tabs = () => {
  const tabs = [
    { name: "Cleaners" },
    { name: "Duty logs" },
    { name: "Orders" },
  ];

  return (
    <div className="[ flex gap-4 border-b pb-2 mb-8 relative ]">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className="btn--padding font-medium opacity-60 hover:opacity-100"
        >
          <div>{tab.name}</div>
        </button>
      ))}
      <div className="w-[65px] h-[3px] bg-amber-400 rounded-tr-xl rounded-tl-xl absolute bottom-0 mb-[-1px] ml-[7px]"></div>
    </div>
  );
};

const ContactCard = () => {
  return (
    <div className="[ pl-3.5 border-b pb-8 ]">
      <h6 className="[ mb-4 ]">CONTACTS</h6>
      <Contact />
    </div>
  );
};

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
        <div key={index}>
          <div className="[ flex items-center gap-1 ]">
            <span>{person.name}</span>
            <h6 className="[ w-fit px-1.5 py-0.5 rounded-full card-bg ]">
              {person.role}
            </h6>
          </div>
          <div
            className="[ p13 mt-2 neutral-70 group ] cursor-pointer"
            onClick={() => copyToClipboard(person.email)}
          >
            <div className="[ flex items-center gap-2 ] [ mb-2 ]">
              <Image width={14} height={14} src={email.src} alt="email" />
              <div>{person.email}</div>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Image width={14} height={14} src={copyIcon.src} alt="copy" />
              </span>
            </div>
            <div className="[ flex items-center gap-2 ]">
              <Image width={14} height={14} src={phone.src} alt="phone" />
              <div>{person.phone}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Notes = () => {
  return (
    <div className="[ pl-3.5 ]">
      <h6 className="[ mb-4 ]">NOTES</h6>
      <Note>coffee capsules collected from 5th floor</Note>
      <Note>check sugar and tea stock level every Friday</Note>
    </div>
  );
};

const Note = ({ children }: { children: React.ReactNode }) => {
  return <div className="[ max-w-40 p13 mb-5 neutral-70 ]">{children}</div>;
};
