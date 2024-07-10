import Image from "next/image";
import React from "react";
import alertIconRegular from "/public/alertIconRegular.svg";
import grayCheckmarkIcon from "/public/grayCheckmarkIcon.svg";
import arrowRight from "/public/arrowRight.svg";

export default function DutyLog() {
  return (
    <>
      <div className="flex gap-4 mt-20 border-b border-[#E7E5E4] pb-5 pl-3">
        <h6 className="w-full max-w-60">CLIENT</h6>
        <h6 className="w-full max-w-80">DESCRIPTION</h6>
        <h6 className="w-full max-w-60">MANAGER</h6>
      </div>
      <Log />
      <Log />
    </>
  );
}

const Log = () => {
  return (
    <a href="/" className="w-full block border-b border-[#E7E5E4]">
      <div className="flex lg:flex-row flex-col gap-4 w-full text-left items-center rounded-lg hover:bg-zinc-100 px-3 py-3.5 group hover:font-medium">
        <div className="w-60 flex items-center gap-3">
          <span className="p-2 border rounded-lg bg-[#FFB100] border-[#F2A800]">
            <Image
              className="mx-auto"
              src={alertIconRegular.src}
              width={16}
              height={16}
              alt="alert icon"
            />
          </span>
          <span>Wesminster Cathedral</span>
        </div>
        <span className="w-80">Not cleaned properly.</span>
        <span className="w-40">Dorys, Henry</span>
        <div className="flex items-center ml-auto">
          <h6 className="[ px-1.5 py-0.5 rounded-full card-bg flex items-center gap-0.5 ]">
            <Image
              src={grayCheckmarkIcon.src}
              width={12}
              height={12}
              alt="checkmark icon"
            />
            <span className=".icon-padding">RESOLVED</span>
          </h6>
          <button className="btn--padding btn--secondary ml-8 mr-2.5">
            Edit
          </button>
          <Image
            className="[ opacity-40 group-hover:opacity-60 ]"
            width={20}
            height={20}
            src={arrowRight.src}
            alt="arrow right"
          />
        </div>
      </div>
    </a>
  );
};

const LogDetails = () => {
  return (
    <div className="flex gap-4 mt-4">
      <div className="w-60">
        <h6 className="font-medium">CLIENT</h6>
        <p>Wesminster Cathedral</p>
      </div>
      <div className="w-80">
        <h6 className="font-medium">DESCRIPTION</h6>
        <p>Not cleaned properly.</p>
      </div>
      <div className="w-40">
        <h6 className="font-medium">MANAGER</h6>
        <p>Dorys, Henry</p>
      </div>
    </div>
  );
};
