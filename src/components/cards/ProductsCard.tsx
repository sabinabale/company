import Image from "next/image";
import alertIcon from "/public/alertIcon.svg";

export default function ProductsCard() {
  const products = [
    { name: "Clover FloorIT", price: "9.99" },
    { name: "Clover STC 5litre", price: "14.99" },
  ];
  const downloadCSV = () => {
    // Define the CSV header
    const csvHeader = "PRODUCT,PRICE\n";
    // Convert product data to CSV format
    const csvRows = products
      .map((product) => `${product.name},${product.price}`)
      .join("\n");
    // Combine header and rows
    const csvContent = `\uFEFF${csvHeader}${csvRows}`; // Adding BOM for UTF-8

    // Create a blob from the CSV content
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    // Create a link element and trigger download
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "products.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="[ border rounded-lg overflow-hidden ]">
      <div className="[ flex justify-between ] [ py-1.5 pl-4 pr-1.5 border-b ]">
        <div className="[ flex items-center gap-1 ]">
          <Image width={14} height={14} src={alertIcon.src} alt="alert icon" />
          <h6>PRODUCTS</h6>
        </div>
        <button
          onClick={downloadCSV}
          className="[ flex gap-1 items-center ] [ text-primary-04 dark-accent btn--padding ]"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                id="vector"
                d="M7.59984 6.99984C7.59984 6.66847 7.33121 6.39984 6.99984 6.39984C6.66847 6.39984 6.39984 6.66847 6.39984 6.99984H7.59984ZM6.99984 10.7915L6.57557 11.2158C6.80989 11.4501 7.18979 11.4501 7.4241 11.2158L6.99984 10.7915ZM8.88243 9.75743L9.3067 9.33317L8.45817 8.48464L8.03391 8.90891L8.88243 9.75743ZM5.96577 8.90891L5.5415 8.48464L4.69298 9.33317L5.11724 9.75743L5.96577 8.90891ZM3.68982 5.27614L3.76998 5.87076L4.13662 5.82133L4.25711 5.47154L3.68982 5.27614ZM10.4998 6.4165H9.89984V7.0165H10.4998V6.4165ZM6.39984 10.2082C6.39984 10.5395 6.66847 10.8082 6.99984 10.8082C7.33121 10.8082 7.59984 10.5395 7.59984 10.2082H6.39984ZM7.4241 11.2158L8.88243 9.75743L8.03391 8.90891L6.57557 10.3672L7.4241 11.2158ZM7.4241 10.3672L5.96577 8.90891L5.11724 9.75743L6.57557 11.2158L7.4241 10.3672ZM0.566504 8.1665C0.566504 10.1087 2.14097 11.6832 4.08317 11.6832V10.4832C2.80371 10.4832 1.7665 9.44596 1.7665 8.1665H0.566504ZM3.60966 4.68151C1.89116 4.91318 0.566504 6.38465 0.566504 8.1665H1.7665C1.7665 6.99349 2.63886 6.02324 3.76998 5.87076L3.60966 4.68151ZM6.99984 2.3165C5.20225 2.3165 3.67632 3.47298 3.12253 5.08073L4.25711 5.47154C4.64926 4.33307 5.72996 3.5165 6.99984 3.5165V2.3165ZM11.0998 6.4165C11.0998 4.15214 9.2642 2.3165 6.99984 2.3165V3.5165C8.60146 3.5165 9.89984 4.81488 9.89984 6.4165H11.0998ZM10.4998 7.0165C11.4571 7.0165 12.2332 7.79254 12.2332 8.74984H13.4332C13.4332 7.1298 12.1199 5.8165 10.4998 5.8165V7.0165ZM12.2332 8.74984C12.2332 9.70713 11.4571 10.4832 10.4998 10.4832V11.6832C12.1199 11.6832 13.4332 10.3699 13.4332 8.74984H12.2332ZM9.33317 11.6832H10.4998V10.4832H9.33317V11.6832ZM4.08317 11.6832H4.6665V10.4832H4.08317V11.6832ZM6.39984 6.99984V10.2082H7.59984V6.99984H6.39984Z"
                fill="#FFB100"
              />
            </g>
          </svg>
          <div className="[ text-[13px] ]">Download CSV</div>
        </button>
      </div>
      <div className="[ px-4 pt-4 card-bg ]">
        <div>
          <div className="[ w-full pb-3 ]">
            <h6 className="w-64">PRODUCT</h6>
            <h6>PRICE</h6>
          </div>
          {products.map((product) => (
            <div key={product.name} className="[ w-full ] ">
              <div className="[ w-full py-3 border-t ]  ">
                <span className="w-64">{product.name}</span>
                <span>£{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
