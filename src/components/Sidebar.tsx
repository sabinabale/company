import Image from "next/image";
import React, { useState } from "react";
import firstmile from "/public/firstmile.svg";
import securityRounded from "/public/securityRounded.svg";
import ContactCard from "./cards/ContactCard";

export default function Sidebar() {
  return (
    <div className="w-[320px] h-screen bg-white border-l">
      <RubbishProcedure />
      <Security />
      <ContactCard />
      <NotesCard />
    </div>
  );
}

const RubbishProcedure = () => {
  const rubbishDetails = [
    { label: "Collection:", value: "8pm - 10pm" },
    { label: "Provider:", value: "Client" },
  ];

  return (
    <div className="border-b py-5 px-[22px]">
      <h6>Rubbish Procedure</h6>
      <div className="flex items-center gap-2 py-5">
        <Image
          src={firstmile.src}
          width={20}
          height={20}
          alt="first mile logo"
        />
        <div>First Mile</div>
      </div>
      <div className="flex flex-col gap-2.5">
        {rubbishDetails.map((item, index) => (
          <div key={index} className="flex md:flex-row flex-col">
            <div className="w-28 text-[#78716C]">{item.label}</div>
            <div>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Security = () => {
  const securityDetails = [
    { label: "Entry:", value: "Pass" },
    { label: "Certification:", value: "DBS required" },
  ];

  return (
    <div className="border-b py-5 px-[22px]">
      <h6>Security</h6>
      <div className="flex flex-col md:flex-row md:items-center gap-2 py-5">
        <div className="flex items-center gap-2">
          <Image
            src={securityRounded.src}
            width={20}
            height={20}
            alt="security logo"
            className="hidden md:block"
          />
          <div>Alarm code</div>
        </div>
        <div className="w-fit text-[12px] opacity-70 px-1.5 py-0.5 rounded-full border-[#D7D3D1] border card-bg">
          #1487
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        {securityDetails.map((item, index) => (
          <div key={index} className="flex md:flex-row flex-col">
            <div className="w-28 text-[#78716C]">{item.label}</div>
            <div>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const NotesCard = () => {
  const [notes, setNotes] = useState([
    { text: "Coffee capsules collected from 5th floor" },
    { text: "Throw away expired food every Friday" },
  ]);
  const [showInputField, setShowInputField] = useState(false);
  const [newNote, setNewNote] = useState("");

  const handleAddNote = () => {
    if (newNote.trim() !== "") {
      setNotes([...notes, { text: newNote }]);
      setNewNote("");
    }
    // Hide the input field and save button whether or not note was added
    setShowInputField(false);
  };

  return (
    <div className="py-5 px-[22px] ">
      <h6 className="mb-5">NOTES</h6>
      <div className="flex flex-col gap-3">
        {notes.map((note, index) => (
          <div key={index}>{note.text}</div>
        ))}
      </div>
      {showInputField && (
        <div className="mt-3 flex gap-2">
          <input
            className="p-2 border rounded-lg border-gray-300 placeholder:text-[12px] placeholder:opacity-80 focus:outline-none focus:border-amber-500"
            type="text"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Write your note here"
          />
          <button
            className="p-2 btn--primary custom-border"
            onClick={handleAddNote}
          >
            Save
          </button>
        </div>
      )}
      {!showInputField && (
        <button
          className="mt-5 opacity-50 text-black hover:opacity-100"
          onClick={() => setShowInputField(true)}
        >
          + add note
        </button>
      )}
    </div>
  );
};
