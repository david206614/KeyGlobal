export type View = 'home' | 'catalog';

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon?: string;
}

export interface Product {
  id: string;
  title: string;
  category: Category['id'];
  images: string[];
  description?: string;
  materials?: string;
  techniques?: string;
}

export interface NavState {
  view: View;
  navigate: (view: View) => void;
  goBack: () => void;
}
