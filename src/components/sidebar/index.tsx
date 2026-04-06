import { Icon } from "@iconify/react";

import { CustomLink } from "./customLink";

const Sidebar = () => {
  return (
    <aside className="w-60 min-h-screen bg-white flex flex-col px-6 py-8 rounded-md relative ">
      {/* Logo */}

      <div>
        <p className="font-bold mb-3 text-lg"> Menu</p>
      </div>
      {/* Navigation */}
      <nav className="space-y-4  font-primary text-black-100">
        <CustomLink
          icon={<Icon icon="mage:dashboard" width="24" height="24" />}
          label="Dashboard"
          path="/"
        />
        <CustomLink
          icon={
            <Icon icon="fluent:tasks-app-24-regular" width="24" height="24" />
          }
          label="Tasks"
          path="/tasks"
        />
        <CustomLink
          icon={
            <Icon
              icon="eos-icons:product-subscriptions-outlined"
              width="24"
              height="24"
            />
          }
          label="Projects"
          path="/projects"
        />
        <CustomLink
          icon={<Icon icon="tdesign:chart-analytics" width="24" height="24" />}
          label="Analytics"
          path="/analytics"
        />

        <CustomLink
          icon={
            <Icon icon="icon-park-outline:calendar" width="24" height="24" />
          }
          label="Calendar"
          path="/calendar"
        />
        <CustomLink
          icon={<Icon icon="fluent-mdl2:group" width="24" height="24" />}
          label="Team Members"
          path="/team-members"
        />
        <CustomLink
          icon={<Icon icon="lsicon:report-outline" width="24" height="24" />}
          label="Reports"
          path="/reports"
        />
      </nav>

      {/* Help Center Card */}
      <div className="pt-7">
        <p className="font-bold mb-1 text-lg">General</p>

        <CustomLink
          icon={
            <Icon icon="fluent:settings-16-regular" width="24" height="24" />
          }
          label="Settings"
          path="/settings"
        />

        <CustomLink
          icon={
            <Icon
              icon="material-symbols:help-outline-rounded"
              width="24"
              height="24"
            />
          }
          label="Help Center"
          path="/help-center"
        />

        <button className="flex items-center gap-3 px-3 text-lg hover:text-red-500">
          <Icon icon="ant-design:logout-outlined" width="24" height="24" />
          Log Out
        </button>
      </div>

      {/* Logout */}
    </aside>
  );
};

export default Sidebar;
