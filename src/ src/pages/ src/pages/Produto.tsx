import { useParams, Link } from 'react-router-dom';
import { getProductBySlug, getProductsByCategory } from '@/data/products';
import { ShoppingCart, ArrowLeft, Package } from 'lucide-react';
import { formatBRL } from '@/lib/utils';

export default function Produto() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return (
      <div className="pt-24 min-h-screen flex flex-col items-center justify-center">
        <Package className="w-16 h-16 text-slate-300 mb-4" />
        <h2 className="text-2xl font-bold text-slate-600">Produto não encontrado</h2>
        <Link to="/loja" className="text-orange-600 mt-4 hover:underline">Ver catálogo</Link>
      </div>
    );
  }

  const related = getProductsByCategory(product.category_id).filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4 py-6">
        <Link to={`/loja/${product.category_id}`} className="text-slate-500 text-sm flex items-center hover:text-orange-600">
          <ArrowLeft className="w-4 h-4 mr-1" /> Voltar para {product.category_name}
        </Link>
      </div>
      <section className="container mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="rounded-2xl overflow-hidden bg-slate-100">
            <img src={product.images[0]} alt={product.name} className="w-full h-96 object-cover" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded">{product.category_name}</span>
            <h1 className="text-3xl font-bold mt-4 mb-2">{product.name}</h1>
            <p className="text-slate-600 mb-6">{product.description}</p>
            <div className="text-3xl font-black text-slate-900 mb-2">{formatBRL(product.price)}</div>
            <p className="text-sm text-slate-400 mb-6">por {product.unit}</p>
            <div className="flex items-center mb-8">
              <span className={`w-2 h-2 rounded-full mr-2 ${product.in_stock ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className="text-sm">{product.in_stock ? 'Em estoque' : 'Sob encomenda'}</span>
            </div>
            <button className="bg-slate-900 text-white px-8 py-4 rounded-lg font-bold flex items-center hover:bg-orange-600 transition-colors">
              <ShoppingCart className="w-5 h-5 mr-2" /> Adicionar ao carrinho
            </button>
          </div>
        </div>
        {product.specifications && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Especificações Técnicas</h2>
            <div className="bg-slate-50 rounded-xl p-6 max-w-lg">
              {Object.entries(product.specifications).map(([key, val]) => (
                <div key={key} className="flex justify-between py-2 border-b border-slate-200 last:border-0">
                  <span className="font-medium text-slate-700">{key}</span>
                  <span className="text-slate-500">{val}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Produtos Relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map(p => (
                <Link key={p.id} to={`/produto/${p.slug}`} className="group">
                  <div className="bg-slate-100 rounded-xl h-48 overflow-hidden mb-3">
                    <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <h3 className="font-bold group-hover:text-orange-600">{p.name}</h3>
                  <p className="text-orange-600 font-bold">{formatBRL(p.price)}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
