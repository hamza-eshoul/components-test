// icons
import { Logo } from "../../assets/icons";
import { Globe } from "../../assets/icons";

// components
import Button from "../../components/Button";

const nav_elements = [
  { text: "Mode Hôte", href: "" },
  { text: "Aide", href: "" },
  { text: "Réservations", href: "" },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between px-14 py-7">
      <Logo />

      <div className="flex items-center gap-6">
        <ul className="flex items-center gap-12 pr-4">
          {nav_elements.map((element) => (
            <li key={element.text} className="font-semibold">
              <a href={element.href}>{element.text}</a>
            </li>
          ))}
        </ul>
        <Globe />
        <Button className="py-4 text-base"> Se connecter </Button>
      </div>
    </nav>
  );
};

export default Navbar;
