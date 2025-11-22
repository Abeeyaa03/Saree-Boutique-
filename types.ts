export interface Saree {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  isNew?: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}