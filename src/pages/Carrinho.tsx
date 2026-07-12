import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2, ArrowLeft } from 'lucide-react';
import { formatBRL } from '@/lib/utils';
import { products } from '@/data/products';

export default function Carrinho() {
  const empty = true; // Mock: no items yet

  if (empty) {
    return (
      <div className="pt-24 min-h-screen flex flex-col items-center justify-center">
        <ShoppingBag className="w-20 h-20 text-slate-300 mb-6" />
        <h2 className="text-2xl font-bold text-slate-600 mb-2">Seu carrinho está vazio</h2>
        <p className="text-slate-400 mb-8">Adicione produtos da nossa loja para começar.</p>
        <Link to="/loja" className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors">Ver Produtos</Link>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Full cart UI would go here */}
    </div>
  );
}
