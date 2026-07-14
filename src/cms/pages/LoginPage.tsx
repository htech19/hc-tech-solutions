import { FormEvent, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { isAuthed, login } from "@/cms/store";

export default function LoginPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState("admin");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState<string | null>(null);

  if (isAuthed()) return <Navigate to="/admin" replace />;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErr(null);
    if (login(user.trim(), pass)) {
      navigate("/admin", { replace: true });
    } else {
      setErr("Credenciais inválidas.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4"
      >
        <div>
          <h1 className="text-2xl font-black">
            HC<span className="text-emerald-500">CMS</span>
          </h1>
          <p className="text-sm text-slate-400">Acesso ao painel</p>
        </div>

        <label className="block">
          <span className="text-xs text-slate-400">Usuário</span>
          <input
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="mt-1 w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-sm outline-none focus:border-emerald-500"
            autoComplete="username"
          />
        </label>

        <label className="block">
          <span className="text-xs text-slate-400">Senha</span>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="mt-1 w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-sm outline-none focus:border-emerald-500"
            autoComplete="current-password"
          />
        </label>

        {err && <p className="text-sm text-red-400">{err}</p>}

        <button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-md py-2 text-sm transition-colors"
        >
          Entrar
        </button>

        <p className="text-xs text-slate-500 text-center">
          Demo: <code>admin</code> / <code>admin</code>
        </p>
      </form>
    </div>
  );
}
