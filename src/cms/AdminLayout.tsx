import { NavLink, Outlet, useNavigate, Navigate } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  FolderTree,
  Tags,
  Settings,
  ScrollText,
  LogOut,
  Menu,
} from "lucide-react";
import { useState } from "react";
import { getUser, logout } from "@/cms/store";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/admin/posts", label: "Posts", icon: FileText },
  { to: "/admin/categorias", label: "Categorias", icon: FolderTree },
  { to: "/admin/tags", label: "Tags", icon: Tags },
  { to: "/admin/configuracoes", label: "Configurações", icon: Settings },
  { to: "/admin/logs", label: "Logs", icon: ScrollText },
];

export default function AdminLayout() {
  const user = getUser();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  if (!user) return <Navigate to="/admin/login" replace />;

  const handleLogout = () => {
    logout();
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-40 w-64 bg-slate-900 border-r border-slate-800 flex flex-col transition-transform",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="h-14 flex items-center px-5 border-b border-slate-800">
          <span className="font-black tracking-tight text-lg">
            HC<span className="text-emerald-500">CMS</span>
          </span>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                  isActive
                    ? "bg-emerald-600/15 text-emerald-400"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                )
              }
            >
              <item.icon size={16} />
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="p-3 border-t border-slate-800">
          <div className="text-xs text-slate-400 mb-2 px-1">
            Logado como <span className="text-slate-200">{user}</span>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            <LogOut size={16} /> Sair
          </button>
        </div>
      </aside>

      {/* Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 border-b border-slate-800 bg-slate-900/60 backdrop-blur flex items-center px-4 gap-3 sticky top-0 z-30">
          <button
            className="lg:hidden text-slate-300"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            <Menu size={20} />
          </button>
          <span className="text-sm text-slate-400">Painel administrativo</span>
        </header>
        <main className="p-4 md:p-6 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
