import Image from "next/image";
import clockIcon from "/public/clockIcon.svg";
import chevronDownSmall from "/public/chevronDownSmall.svg";

export default function DatePickerButton() {
  return (
    <button className="btn--secondary flex items-center font-medium custom-border">
      <div className="btn--padding border-r flex items-center  gap-1">
        <span>
          <Image src={clockIcon.src} alt="clock" width={16} height={16} />
        </span>
        <span>Today</span>
      </div>
      <span className="px-1">
        <Image
          src={chevronDownSmall.src}
          alt="arrow down"
          width={16}
          height={16}
        />
      </span>
    </button>
  );
}
