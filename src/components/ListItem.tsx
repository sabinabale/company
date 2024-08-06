export default function ListItem() {
  return (
    <a
      href="/client-details"
      className="w-full border-t-[0.5px] border-t-zinc-200 group py-3 px-5 flex items-center justify-between hover:bg-zinc-100"
    >
      <div className="flex gap-3 items-center">
        <div className="[ w-[25px] h-[25px] ] [ flex items-center justify-center ] [ rounded-lg border border-[#E7E5E4] bg-amber-500 ] ">
          A
        </div>
        <div className="[ font-medium neutral-100 ]">Company name</div>
      </div>
      <button className="rounded-md p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out hover:bg-zinc-200">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.00001 8.66668C8.36821 8.66668 8.66668 8.36821 8.66668 8.00001C8.66668 7.63181 8.36821 7.33334 8.00001 7.33334C7.63181 7.33334 7.33334 7.63181 7.33334 8.00001C7.33334 8.36821 7.63181 8.66668 8.00001 8.66668Z"
            stroke="#78716C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.3333 8.66668C13.7015 8.66668 14 8.36821 14 8.00001C14 7.63181 13.7015 7.33334 13.3333 7.33334C12.9651 7.33334 12.6667 7.63181 12.6667 8.00001C12.6667 8.36821 12.9651 8.66668 13.3333 8.66668Z"
            stroke="#78716C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.66667 8.66668C3.03485 8.66668 3.33333 8.36821 3.33333 8.00001C3.33333 7.63181 3.03485 7.33334 2.66667 7.33334C2.29848 7.33334 2 7.63181 2 8.00001C2 8.36821 2.29848 8.66668 2.66667 8.66668Z"
            stroke="#78716C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </a>
  );
}
