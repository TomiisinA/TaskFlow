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
    <div>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <span>{icon}</span>
        <span>{label}</span>
      </NavLink>
    </div>
  );
};
