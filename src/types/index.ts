export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  category_id: string;
  category_name: string;
  price: number;
  unit: string;
  images: string[];
  featured: boolean;
  in_stock: boolean;
  specifications?: Record<string, string>;
  created_at: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Profile {
  id: string;
  full_name: string;
  email: string;
  role: 'admin' | 'customer';
  phone?: string;
}
