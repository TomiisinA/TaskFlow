import { Outlet } from "react-router";


export const DashboardLayout = () => {
  return (
    <div className="flex">
    
      <div className="grow bg-violet-50 min-h-screen p-6">
        <Outlet />
      </div>
    </div>
  );
};
