// icons
import {
  Person,
  Home,
  Compass,
  Key,
  Book,
  UserBadge,
} from "../../assets/icons";

// components
import CheckBox from "../../components/Checkbox";

const voyageurNavItems = [
  {
    text: "Données personnelles",
    icon: <Person />,
    href: "",
  },
  {
    text: "Mes réservations",
    icon: <Home />,
    href: "",
  },
  {
    text: "Langue et devise",
    icon: <Compass />,
    href: "",
  },
  {
    text: "Connexion et sécurité",
    icon: <Key />,
    href: "",
  },
  { text: "Paiements", icon: <Book />, href: "" },
];

const hoteNavItems = [
  { text: "Données personnelles", icon: <Person />, href: "" },
  { text: "Langue et devise", icon: <Compass />, href: "" },
  { text: "Connexion et sécurité", icon: <Key />, href: "" },
  { text: "Versements", icon: <Book />, href: "" },
  { text: "Utilisateurs et comptes", icon: <Person />, href: "" },
];

const SidebarHeader = ({ user, userType }) => {
  if (userType == "voyageur") {
    return (
      <>
        <div className="flex items-center gap-8 pb-9">
          <div className="relative">
            <img
              className="h-24 w-24 rounded-full"
              src="https://i.pinimg.com/originals/1c/ce/fe/1ccefe4b83895c8f7be668ac89d57f16.jpg"
            />

            <div className="absolute right-[-3.5px] top-[-3.5px] rounded-full bg-[#F8F8F8] pb-1.5 pt-[5px]">
              <UserBadge />
            </div>
          </div>

          <div className="flex flex-col">
            <span className="p-0.5 font-semibold">{user.name}</span>
            <span className="text-sm font-medium">{user.email}</span>
            <span className="font-poppins text-sm font-medium text-[#6B7280]">
              Déconnexion
            </span>
          </div>
        </div>

        <div className="mb-6 border-[0.5px] text-gray-200" />
      </>
    );
  }

  if (userType == "hote") {
    return (
      <>
        <div className="flex flex-col gap-3 pb-3">
          <div className="relative h-24 w-24 rounded-full">
            <img
              className="h-24 w-24 rounded-full"
              src="https://i.pinimg.com/originals/1c/ce/fe/1ccefe4b83895c8f7be668ac89d57f16.jpg"
            />

            <div className="absolute right-[-3.5px] top-[-3.5px] rounded-full bg-[#F8F8F8] pb-1.5 pt-[5px]">
              <UserBadge />
            </div>
          </div>

          <div className="flex flex-col">
            <span className="p-0.5 font-semibold">{user.name}</span>
            <span className="text-sm">{user.email}</span>
            <span className="text-sm font-bold text-black">Déconnexion</span>
          </div>
        </div>

        <div className="mb-6 max-w-[259px] border-[0.5px] text-gray-200" />
      </>
    );
  }
};

const UserSidebar = ({
  userType,
  user,
  isIdentityVerified,
  isEmailVerified,
  isPhoneVerified,
}) => {
  const userNavItems = {
    voyageur: voyageurNavItems,
    hote: hoteNavItems,
  };

  const userVerificationItems = [
    { text: "Identité vérifiés", isVerified: isIdentityVerified },
    { text: "Adresse E-mail", isVerified: isEmailVerified },
    { text: "Téléphone", isVerified: isPhoneVerified },
  ];

  return (
    <aside className="m-4 max-w-xs">
      <SidebarHeader user={user} userType={userType} />

      <ul
        className={`${userType == "hote" ? "pb-[74px]" : ""} flex flex-col gap-4 pb-9`}
      >
        {userNavItems[userType].map((item) => (
          <li key={item.text} className="flex items-center gap-4">
            {item.icon} <span>{item.text}</span>
          </li>
        ))}
      </ul>

      {userType == "hote" && (
        <div className="mb-5 max-w-[259px] border-[0.5px] text-gray-200" />
      )}

      <div className="flex flex-col gap-5">
        <div className="rounded-xl bg-[#F7F8FA] pb-7 pl-5 pr-7 pt-5">
          <header className="pb-5 font-medium">Vérifications effectuées</header>

          <ul className="space-y-4">
            {userVerificationItems.map((item) => (
              <li key={item.text} className="flex items-center justify-between">
                <div className="flex gap-4">
                  <CheckBox isVerification={true} isChecked={item.isVerified} />
                  <span>{item.text}</span>
                </div>

                {!item.isVerified && (
                  <a href="" className="text-sm font-semibold text-primary">
                    Vérifier
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <a href="" className="text-center text-xs text-black underline">
          En savoir plus sur la vérification d'identité
        </a>
      </div>
    </aside>
  );
};

UserSidebar.defaultProps = {
  userType: "voyageur",
  user: {
    name: "John Doe",
    email: "moha.hameid@gmail.com",
  },
  isIdentityVerified: false,
  isEmailVerified: true,
  isPhoneVerified: false,
};

export default UserSidebar;
