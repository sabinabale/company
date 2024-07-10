export default function CleanersCard() {
  const cardProps = [
    {
      title: "CONTACT INFORMATION",
      cleaningDays: "Mon - Fri",
      cleaningTime: "8PM - 9PM",
      cleaner: [
        {
          name: "Marcus Miles Burnett",
          phone: "+324 132 453 786",
        },
        {
          name: "Michael Eugene Lowrey",
          phone: "+324 122 983 782",
        },
      ],
    },
    {
      title: "CONTACT INFORMATION",
      cleaningDays: "Sat - Sun",
      cleaningTime: "8PM - 9PM",
      cleaner: [
        {
          name: "Sheldon Cooper",
          phone: "+324 122 983 782",
        },
      ],
    },
  ];

  const getInitials = (name: string) => {
    const nameParts = name.split(" ");
    if (nameParts.length >= 2) {
      return nameParts[0][0] + nameParts[1][0];
    } else if (nameParts.length === 1) {
      return nameParts[0][0];
    }
    return "";
  };

  return (
    <>
      {cardProps.map((card) => (
        <div key={card.title} className="mb-8">
          <div className="[ flex items-center gap-2 px-2 mb-4 ]">
            <span className="font-medium">{card.cleaningDays}</span>
            <h6 className="[ px-1.5 py-0.5 rounded-full border border-zinc-200 ]">
              {card.cleaningTime}
            </h6>
          </div>
          <div className="[ w-full overflow-hidden border rounded-lg border-zinc-200 ]">
            <div className="[ py-4 px-5 bg-white ]">
              <h6>{card.title}</h6>
            </div>
            <div>
              <div>
                {card.cleaner.map((cleaner) => (
                  <button
                    key={cleaner.name}
                    className="[ flex items-center gap-2.5 ] [ w-full px-5 py-5 ] [ text-left border-t bg-zinc-50 hover:bg-zinc-100 ] "
                  >
                    <div className="w-8 h-8 rounded-full border border-zinc-300 flex items-center justify-center bg-zinc-200">
                      {getInitials(cleaner.name)}
                    </div>
                    <div className="[ flex flex-col gap-0.5 w-full ]">
                      <span className="w-64">{cleaner.name}</span>
                      <span className="text-[#57534F]">{cleaner.phone}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
