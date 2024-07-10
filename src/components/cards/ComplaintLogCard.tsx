import Image from "next/image";
import alertIcon from "/public/alertIcon.svg";

export default function ComplaintLogCard() {
  const cardProps = [
    {
      icon: (
        <Image width={14} height={14} src={alertIcon.src} alt="alert icon" />
      ),
      title: "COMPLAINTS LOG",

      columns: [
        {
          date: "01/27/2024",
          issue: "Upper shelves in the main room not dusted",
        },
        {
          date: "03/03/2024",
          issue: "Unhappy with the service",
        },
      ],
    },
  ];

  return (
    <div className="[ flex flex-col gap-5 ]">
      {cardProps.map((card) => (
        <div
          key={card.title}
          className="[ w-full overflow-hidden border rounded-lg border-zinc-200 ]"
        >
          <div className="[ border-b p-4 ]">
            <div className="[ flex items-center gap-1 ]">
              <span>{card.icon}</span>
              <h6>{card.title}</h6>
            </div>
          </div>
          <div className="[ px-4 pt-4 card-bg ]">
            <div>
              <div className="[ w-full  pb-3 ]">
                <h6 className="w-64">DATE</h6>
                <h6>ISSUE</h6>
              </div>
              {card.columns.map((column) => (
                <div
                  key={column.issue}
                  className="[ flex items-center gap-2 ] [ w-full ]"
                >
                  <div className="[ w-full py-3 border-t ] ">
                    <span className="w-64">{column.date}</span>
                    <span>{column.issue}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
