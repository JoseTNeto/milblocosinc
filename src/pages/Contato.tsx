import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function Contato() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="pt-24">
      <section className="bg-slate-900 py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-black text-white mb-4">Entre em Contato</h1>
          <p className="text-slate-400">Estamos prontos para atender sua obra do projeto à entrega.</p>
        </div>
      </section>
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input name="name" placeholder="Nome completo" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
            <div className="grid grid-cols-2 gap-4">
              <input name="email" type="email" placeholder="E-mail" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
              <input name="phone" placeholder="Telefone" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
            </div>
            <select name="subject" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none bg-white">
              <option value="">Selecione o assunto</option>
              <option value="orcamento">Solicitar Orçamento</option>
              <option value="vendas">Vendas Corporativas</option>
              <option value="sac">SAC - Reclamações</option>
              <option value="trabalhe">Trabalhe Conosco</option>
            </select>
            <textarea name="message" placeholder="Sua mensagem" rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none resize-none" />
            <button type="submit" className="bg-slate-900 text-white px-8 py-4 rounded-lg font-bold flex items-center hover:bg-orange-600 transition-colors">
              <Send className="w-5 h-5 mr-2" /> Enviar Mensagem
            </button>
          </form>
          <div className="space-y-8">
            {[
              { icon: MapPin, label: 'Endereço', value: 'Av. Industrial, 1000\nDistrito Industrial\nSão Paulo - SP' },
              { icon: Phone, label: 'Telefone', value: '(11) 4004-0000' },
              { icon: Mail, label: 'E-mail', value: 'contato@milblocosinc.com.br' },
              { icon: Clock, label: 'Horário de Funcionamento', value: 'Seg a Sex: 7h às 17h\nSábado: 7h às 12h' },
            ].map((item, i) => (
              <div key={i} className="flex">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0 mr-4">
                  <item.icon className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-slate-500 mb-1">{item.label}</h4>
                  <p className="text-slate-800 whitespace-pre-line">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
