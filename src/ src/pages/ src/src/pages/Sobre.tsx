import { Target, Eye, Heart, Award, TrendingUp, Users } from 'lucide-react';

export default function Sobre() {
  return (
    <div className="pt-24">
      <section className="bg-slate-900 py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-black text-white mb-4">Sobre a Milblocos Inc.</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">Referência nacional em blocos cimentícios, pavers e soluções para construção civil desde 2004.</p>
        </div>
      </section>
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: Target, title: 'Missão', desc: 'Fornecer produtos cimentícios de qualidade superior com pontualidade e responsabilidade ambiental.' },
            { icon: Eye, title: 'Visão', desc: 'Ser referência nacional em soluções sustentáveis para construção civil até 2030.' },
            { icon: Heart, title: 'Valores', desc: 'Qualidade, segurança, inovação, respeito ao cliente e compromisso com o meio ambiente.' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { number: '+1M', label: 'Peças/mês', icon: Award },
            { number: '80', label: 'Veículos próprios', icon: TrendingUp },
            { number: '100%', label: 'Linha própria', icon: Award },
            { number: '20+', label: 'Anos de mercado', icon: Users },
          ].map((item, i) => (
            <div key={i} className="text-center p-6 bg-slate-50 rounded-xl">
              <item.icon className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <div className="text-3xl font-black text-slate-900">{item.number}</div>
              <div className="text-sm text-slate-500">{item.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
