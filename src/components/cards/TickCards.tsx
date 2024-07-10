import Image from "next/image";
import yellowcheck from "/public/yellowcheck.svg";
import securityIcon from "/public/securityIcon.svg";
import binIcon from "/public/binIcon.svg";

export default function TickCards() {
  const cardProps = [
    {
      icon: <Image width={14} height={14} src={binIcon.src} alt="bin icon" />,
      title: "RUBBISH PROCEDURE",
      subtitle: "First Mile",
      items: [
        {
          icon: (
            <Image
              width={16}
              height={16}
              src={yellowcheck.src}
              alt="yellow check"
            />
          ),
          label: "Collection: Mon - Fri 8pm",
        },
        {
          icon: (
            <Image
              width={16}
              height={16}
              src={yellowcheck.src}
              alt="yellow check"
            />
          ),
          label: "provided by: Client",
        },
      ],
    },
    {
      icon: (
        <Image
          width={14}
          height={14}
          src={securityIcon.src}
          alt="security icon"
        />
      ),
      title: "SECURITY",
      subtitle: "Alarm code: #1234",
      items: [
        {
          icon: (
            <Image
              width={16}
              height={16}
              src={yellowcheck.src}
              alt="yellow check"
            />
          ),
          label: "Pass",
        },
        {
          icon: (
            <Image
              width={16}
              height={16}
              src={yellowcheck.src}
              alt="yellow check"
            />
          ),
          label: "DBS required",
        },
      ],
    },
  ];

  return (
    <div className="[ flex gap-5 ]">
      {cardProps.map((card) => (
        <div
          key={card.title}
          className="[ w-full overflow-hidden border rounded-lg border-zinc-200 ]"
        >
          <div className="[ border-b p-4 ]">
            <div className="[ flex items-center gap-1 ] [ mb-4 ]">
              <span>{card.icon}</span>
              <h6>{card.title}</h6>
            </div>
            <div className="[ font-semibold text-[18px] ]">{card.subtitle}</div>
          </div>
          <div className="[ p-4 card-bg ] [ h-full ]">
            <div className="[ flex flex-col gap-3 ]">
              {card.items.map((item) => (
                <div key={item.label} className="[ flex items-center gap-2 ] ">
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
