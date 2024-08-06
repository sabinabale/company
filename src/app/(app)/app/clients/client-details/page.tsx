"use client";
import Image from "next/image";
import arrowRight from "/public/arrowRight.svg";

import Container from "@/layout/Container";
import CleaningSchedules from "@/components/cards/CleaningSchedules";
import TabHeading from "@/components/TabHeading";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function Page() {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="[ flex h-full ]">
      <div className="w-full">
        <div className="[ flex items-center justify-between ] [ px-5 pt-2 mb-11 ]">
          <div className="[ flex items-center gap-2.5 ] [ text-[13px] pl-2 ]">
            <a href="/app/clients">Clients</a>
            <Image
              className="[ opacity-60 ]"
              width={16}
              height={16}
              src={arrowRight.src}
              alt="arrow right"
            />
            <div className="[ font-medium ]">Company A</div>
          </div>
          <EditClientButton isEditing={isEditing} onClick={handleEditClick} />
        </div>
        <Container>
          <ClientDetails isEditing={isEditing} />
        </Container>
      </div>
      <Sidebar />
    </div>
  );
}

const ClientDetails = ({ isEditing }) => {
  const [companyName, setCompanyName] = useState("Company A");
  const [address, setAddress] = useState(
    "1901 Thornridge Cir. Shiloh, Hawaii 81063"
  );

  return (
    <div>
      <div className="[ w-[34px] h-[34px] ] [ flex items-center justify-center ] [ mb-4 font-medium text-[19px] rounded-[11px] border border-[#E7E5E4] bg-amber-500 ] ">
        A
      </div>
      <TabHeading>
        <input
          disabled={!isEditing}
          autoCorrect="off"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className={`w-full mb-4 border rounded-lg ${
            isEditing ? "border-amber-500" : "border-transparent"
          }`}
        />
      </TabHeading>
      <Address
        isEditing={isEditing}
        address={address}
        setAddress={setAddress}
      />

      <Tabs />
      <CleaningSchedules />
    </div>
  );
};

const Address = ({ isEditing, address, setAddress }) => {
  return (
    <input
      disabled={!isEditing}
      autoCorrect="off"
      value={address}
      onChange={(e) => setAddress(e.target.value)}
      className={`w-full mb-[32px] py-0.5 text-[#57534F] border rounded-md ${
        isEditing ? " border-amber-500" : "border-transparent"
      }`}
    />
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

const EditClientButton = ({ isEditing, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="[ flex items-center gap-1 ] [ btn--secondary btn--padding font-medium custom-border ]"
    >
      {isEditing ? "Save" : "Edit company details"}
    </button>
  );
};
