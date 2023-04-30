import logo from "../../assets/peep.svg";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 md:p-8">
      <h1 className="text-6xl font-bold italic font-serif">Todos.</h1>

      <img className="w-32 h-32" src={logo} alt="logo" />
    </header>
  );
};

export default Header;
