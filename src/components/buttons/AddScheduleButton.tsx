export default function AddScheduleButton() {
  return (
    <button className="btn--primary btn--padding font-medium custom-border flex items-center">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.99996 4.66667V8.00001M7.99996 8.00001V11.3333M7.99996 8.00001H4.66663M7.99996 8.00001H11.3333"
          stroke="#44403C"
          stroke-width="1.2"
          stroke-linecap="round"
        />
      </svg>
      <span className="pr-1">Add cleaning schedule</span>
    </button>
  );
}
