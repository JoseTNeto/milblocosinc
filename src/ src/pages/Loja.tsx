import { useParams, Link } from 'react-router-dom';
import { products, getProductsByCategory } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { ArrowLeft } from 'lucide-react';

const categoryNames: Record<string, string> = {
  estruturais: 'Blocos Estruturais',
  vedacao: 'Blocos de Vedação',
  pavers: 'Pavers e Pisos',
  arquitetura: 'Linha Arquitetura',
};

export default function Loja() {
  const { category } = useParams();
  const list = category ? getProductsByCategory(category) : products;
  const title = category ? categoryNames[category] || 'Produtos' : 'Catálogo Completo';

  return (
    <div className="pt-24">
      <section className="bg-slate-900 py-12">
        <div className="container mx-auto px-4">
          <Link to="/loja" className="text-orange-400 text-sm flex items-center mb-4 hover:underline">
            <ArrowLeft className="w-4 h-4 mr-1" /> Voltar ao catálogo
          </Link>
          <h1 className="text-3xl font-bold text-white">{title}</h1>
        </div>
      </section>
      <section className="py-12 container mx-auto px-4">
        {list.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-500 mb-4">Nenhum produto encontrado nesta categoria.</p>
            <Link to="/loja" className="text-orange-600 font-bold hover:underline">Ver catálogo completo</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map(p => <ProductCard key={p.id} {...p} />)}
          </div>
        )}
      </section>
    </div>
  );
}
