import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { LogIn, UserPlus } from 'lucide-react';

export default function Auth() {
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Login simulado com sucesso!');
    navigate('/admin');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Cadastro realizado com sucesso!');
    setTab('login');
  };

  return (
    <div className="pt-24 min-h-screen flex items-center justify-center bg-slate-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 w-full max-w-md">
        <div className="flex mb-8 bg-slate-100 rounded-lg p-1">
          <button onClick={() => setTab('login')} className={`flex-1 py-2 text-sm font-bold rounded-md transition-colors ${tab === 'login' ? 'bg-white shadow-sm' : 'text-slate-500'}`}>
            <LogIn className="w-4 h-4 inline mr-2" />Entrar
          </button>
          <button onClick={() => setTab('register')} className={`flex-1 py-2 text-sm font-bold rounded-md transition-colors ${tab === 'register' ? 'bg-white shadow-sm' : 'text-slate-500'}`}>
            <UserPlus className="w-4 h-4 inline mr-2" />Cadastrar
          </button>
        </div>
        {tab === 'login' ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <input type="email" placeholder="E-mail" required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
            <input type="password" placeholder="Senha" required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
            <button type="submit" className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors">Entrar</button>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="space-y-4">
            <input type="text" placeholder="Nome completo" required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
            <input type="email" placeholder="E-mail" required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
            <input type="tel" placeholder="Telefone" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
            <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none bg-white">
              <option value="pf">Pessoa Física</option>
              <option value="pj">Pessoa Jurídica</option>
            </select>
            <input type="password" placeholder="Senha" required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
            <button type="submit" className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors">Criar Conta</button>
          </form>
        )}
      </div>
    </div>
  );
}
