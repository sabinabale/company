import NavLinks from "./NavLinks";

export default function TopNav() {
  return (
    <nav className="[ h-auto w-full ] [ py-3 px-6 ] [ border-b border-zinc-200 ]">
      <div className="flex items-center">
        <CompanyLogo />
        <NavLinks />
      </div>
    </nav>
  );
}

function CompanyLogo() {
  return <div className="[ font-bold text-xl pr-6 ]">Company</div>;
}
