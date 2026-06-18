import {
  LayoutDashboard,
  Users,
  Clock3,
  CalendarDays,
  FileText,
  Settings
} from "lucide-react";

const menu = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard
  },
  {
    key: "employees",
    label: "Funcionários",
    icon: Users
  },
  {
    key: "timesheet",
    label: "Jornada",
    icon: Clock3
  },
  {
    key: "holidays",
    label: "Feriados",
    icon: CalendarDays
  },
  {
    key: "payroll",
    label: "Folha",
    icon: FileText
  },
  {
    key: "reports",
    label: "Relatórios",
    icon: Settings
  }
];

export default function Sidebar({
  page,
  setPage,
  isOpen,
  onClose
}) {
  return (
    <aside
      className={`
      fixed
      md:static

      top-0
      left-0

      z-50

      w-64

      min-h-screen

      bg-slate-900
      text-white

      transform
      transition-transform

      ${
        isOpen
          ? "translate-x-0"
          : "-translate-x-full"
      }

      md:translate-x-0
      `}
    >
      <div className="p-6">
        <h1
          className="
          text-xl
          font-bold
          "
        >
          Doméstica Pro
        </h1>
      </div>

      <nav>
        {menu.map(item => {
          const Icon =
            item.icon;

          return (
            <button
              key={item.key}
              onClick={() => {
                setPage(item.key);
                onClose();
              }}
              className={`
              w-full
              flex
              items-center
              gap-3
              px-6
              py-3
              text-left

              ${
                page === item.key
                  ? "bg-indigo-600"
                  : "hover:bg-slate-800"
              }
              `}
            >
              <Icon size={18} />
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}