import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Bloco Estrutural 14x19x39',
    slug: 'bloco-estrutural-14-19-39',
    description: 'Bloco de alta resistência para alvenaria estrutural.',
    category_id: 'estruturais',
    category_name: 'Blocos Estruturais',
    price: 4.50,
    unit: 'un',
    images: ['https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=800'],
    featured: true,
    in_stock: true,
    specifications: { 'Resistência': '6MPa', 'Peso': '12kg' },
    created_at: '2026-01-01'
  },
  {
    id: '2',
    name: 'Bloco de Vedação 9x19x39',
    slug: 'bloco-vedacao-9-19-39',
    description: 'Ideal para fechamentos em estruturas de concreto.',
    category_id: 'vedacao',
    category_name: 'Blocos de Vedação',
    price: 3.20,
    unit: 'un',
    images: ['https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=800'],
    featured: true,
    in_stock: true,
    created_at: '2026-01-02'
  },
  {
    id: '3',
    name: 'Paver Retangular Cinza 6cm',
    slug: 'paver-retangular-cinza',
    description: 'Piso intertravado para calçadas e áreas externas.',
    category_id: 'pavers',
    category_name: 'Pavers e Pisos',
    price: 55.00,
    unit: 'm²',
    images: ['https://images.unsplash.com/photo-1590079015129-7581a4f7b521?q=80&w=800'],
    featured: true,
    in_stock: true,
    created_at: '2026-01-03'
  },
  {
    id: '4',
    name: 'Cobogó Vazado Decorativo',
    slug: 'cobogo-vazado-decorativo',
    description: 'Elemento vazado para fachadas e ventilação.',
    category_id: 'arquitetura',
    category_name: 'Linha Arquitetura',
    price: 12.00,
    unit: 'un',
    images: ['https://images.unsplash.com/photo-1590079015129-7581a4f7b521?q=80&w=800'],
    featured: false,
    in_stock: true,
    created_at: '2026-01-04'
  }
];

export const getProducts = () => products;
export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug);
export const getProductsByCategory = (catId: string) => products.filter(p => p.category_id === catId);
