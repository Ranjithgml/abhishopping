import { CompanyLogo } from ".";

export const Header = () => {
  return (
    <nav className="h-16 shadow-md p-4 pr-10 sticky flex justify-between items-center">
      <CompanyLogo />
    </nav>
  );
};
