import { Saree, Category, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const CATEGORIES: Category[] = [
  { id: 'silk', name: 'Silk Sarees', image: 'https://images.unsplash.com/photo-1610189012906-44093a083f53?auto=format&fit=crop&q=80&w=600' },
  { id: 'cotton', name: 'Cotton Sarees', image: 'https://images.unsplash.com/photo-1583391733958-2777793a25d2?auto=format&fit=crop&q=80&w=600' },
  { id: 'banarasi', name: 'Banarasi', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=600' },
  { id: 'kanjeevaram', name: 'Kanjeevaram', image: 'https://images.unsplash.com/photo-1596317246882-e22785fa4d5a?auto=format&fit=crop&q=80&w=600' },
  { id: 'designer', name: 'Designer Sarees', image: 'https://images.unsplash.com/photo-1616438236329-c27847b79a16?auto=format&fit=crop&q=80&w=600' },
  { id: 'handloom', name: 'Handloom Sarees', image: 'https://images.unsplash.com/photo-1601128225126-6069967e8745?auto=format&fit=crop&q=80&w=600' },
];

export const SAREES: Saree[] = [
  {
    id: 1,
    name: "Crimson Banarasi Silk",
    category: "Banarasi",
    price: 12500,
    image: "https://images.unsplash.com/photo-1610189021877-13d2079f733d?auto=format&fit=crop&q=80&w=800",
    isNew: true
  },
  {
    id: 2,
    name: "Midnight Blue Kanjeevaram",
    category: "Kanjeevaram",
    price: 15999,
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Ivory & Gold Designer Weave",
    category: "Designer",
    price: 8500,
    image: "https://images.unsplash.com/photo-1585853363021-1699c375eb82?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "Pastel Pink Handloom",
    category: "Handloom",
    price: 6200,
    image: "https://images.unsplash.com/photo-1601128225126-6069967e8745?auto=format&fit=crop&q=80&w=800",
    isNew: true
  },
  {
    id: 5,
    name: "Royal Emerald Silk",
    category: "Silk",
    price: 11000,
    image: "https://images.unsplash.com/photo-1550614000-4b9519e0911e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    name: "Sunshine Yellow Cotton",
    category: "Cotton",
    price: 3500,
    image: "https://images.unsplash.com/photo-1615886341892-0f4496ba2875?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 7,
    name: "Magenta Zari Work",
    category: "Banarasi",
    price: 14500,
    image: "https://images.unsplash.com/photo-1568166111041-959f9769c54c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 8,
    name: "Peacock Teal Designer",
    category: "Designer",
    price: 9800,
    image: "https://images.unsplash.com/photo-1616438236329-c27847b79a16?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 9,
    name: "Golden Sunset Kanjeevaram",
    category: "Kanjeevaram",
    price: 18999,
    image: "https://images.unsplash.com/photo-1609357911555-c53748237c9e?auto=format&fit=crop&q=80&w=800",
    isNew: true
  },
  {
    id: 10,
    name: "Sapphire Cotton Voile",
    category: "Cotton",
    price: 2999,
    image: "https://images.unsplash.com/photo-1599708153386-ba9112d381a1?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 11,
    name: "Ruby Red Silk",
    category: "Silk",
    price: 10500,
    image: "https://images.unsplash.com/photo-1594631252845-d9fc018e1b04?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 12,
    name: "Earthy Tussar Handloom",
    category: "Handloom",
    price: 7800,
    image: "https://images.unsplash.com/photo-1619086303291-0ef7699a4b31?auto=format&fit=crop&q=80&w=800"
  }
];