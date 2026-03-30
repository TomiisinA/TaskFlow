import { NavLink } from "react-router";

export const CustomLink = ({
  path,
  icon,
  label,
}: {
  path: string;
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <div className="flex items-center gap-3">
      <NavLink
        to={path}
        className={({ isActive }) =>
          `flex items-center gap-3 px-3 py-2 rounded-md text-lg
         transition
         ${
           isActive
             ? "text-primary text-lg  bg-primary-100"
             : "text-black-100  hover:text-primary  "
         }`
        }
      >
        <span>{icon}</span>
        <span>{label}</span>
      </NavLink>
    </div>
  );
};
