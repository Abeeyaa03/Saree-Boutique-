import { Saree, Category, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const CATEGORIES: Category[] = [
  { id: 'silk', name: 'Silk Sarees', image: 'https://cliosilks.com/cdn/shop/files/Cliojune_250599.jpg?v=1754381882&width=2730' },
  { id: 'cotton', name: 'Cotton Sarees', image: 'https://assets0.mirraw.com/images/13433858/image_original_zoom.jpeg?1753698413' },
  { id: 'banarasi', name: 'Banarasi', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=600' },
  { id: 'kanjeevaram', name: 'Kanjeevaram', image: 'https://rimzimfashion.com/cdn/shop/products/IMG-20220918-WA0176.jpg?v=1692620073&width=1445' },
  { id: 'designer', name: 'Designer Sarees', image: 'https://5.imimg.com/data5/ANDROID/Default/2022/9/CL/MH/DG/153990963/product-jpeg-500x500.jpg' },
  { id: 'handloom', name: 'Handloom Sarees', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKgSen6SArIUrg4Yy-s3EE6yO_Tu8l2R02sw&s' },
];

export const SAREES: Saree[] = [
  {
    id: 1,
    name: "Crimson Banarasi Silk",
    category: "Banarasi",
    price: 12500,
    image: "https://monamaar.com/cdn/shop/files/0M1A9370.jpg?v=1694538414&width=1080",
    isNew: true
  },
  {
    id: 2,
    name: "Midnight Blue Kanjeevaram",
    category: "Kanjeevaram",
    price: 15999,
    image: "data:image/jpeg;base64,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"
  },
  {
    id: 3,
    name: "Ivory & Gold Designer Weave",
    category: "Designer",
    price: 8500,
    image: "https://assets0.mirraw.com/images/12854873/image_zoom.jpeg?1727351964"
  },
  {
    id: 4,
    name: "Pastel Pink Handloom",
    category: "Handloom",
    price: 6200,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKgSen6SArIUrg4Yy-s3EE6yO_Tu8l2R02sw&s",
    isNew: true
  },
  {
    id: 5,
    name: "Royal Emerald Silk",
    category: "Silk",
    price: 11000,
    image: "https://i.pinimg.com/736x/4b/9c/bd/4b9cbd2fd20ef0a35769cc6ff064e223.jpg"
  },
  {
    id: 6,
    name: "Mustard Mangalagiri Cotton",
    category: "Cotton",
    price: 3800,
    image: "https://thenmozhidesigns.com/cdn/shop/files/KRAN9143.jpg?v=1712808947&width=2048"
  },
  {
    id: 7,
    name: "Magenta Zari Work",
    category: "Banarasi",
    price: 14500,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAJ8rwFsLHcrgRJehvpk7xBqZLVymlxQcXosonTzswuuKKjVgmYkTJ2IrkoYFzX6LPDL4&usqp=CAU"
  },
  {
    id: 8,
    name: "Peacock Teal Designer",
    category: "Designer",
    price: 9800,
    image: "https://www.ishopstori.com/cdn/shop/files/5349-2.jpg?v=1731245619"
  },
  {
    id: 9,
    name: "Golden Sunset Kanjeevaram",
    category: "Kanjeevaram",
    price: 18999,
    image: "https://mosami.in/cdn/shop/files/Sunset_Gold_Crushed_Tissue_Saree_with_Embroidery_-_Image_6.jpg?v=1734069686&width=1946",
    isNew: true
  },
  {
    id: 10,
    name: "Sapphire Cotton Voile",
    category: "Cotton",
    price: 2999,
    image: "https://gehen.in/cdn/shop/files/Template-01_6_a55038fc-992a-49b4-a8c0-5902f5c8a389.webp?v=1761815641&width=1200"
  },
  {
    id: 11,
    name: "Ruby Red Silk",
    category: "Silk",
    price: 10500,
    image: "https://loomera.in/cdn/shop/files/ruby-red-viscose-silk-saree-119.jpg?v=1734523710"
  },
  {
    id: 12,
    name: "Earthy Tussar Handloom",
    category: "Handloom",
    price: 7800,
    image: "https://sutraclothing.in/cdn/shop/files/SZ9_5584.webp?v=1713522293&width=2048"
  },
  {
    id: 13,
    name: "Opulent Magenta Silk",
    category: "Silk",
    price: 11800,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmgE43qevSUgB0XYUh_qerARuJm8hjuHkU7qrLWo325ACnhFVd-ThCsigNfZUmKK5Hlus&usqp=CAU",
    isNew: true
  },
  {
    id: 14,
    name: "Classic Gold Silk",
    category: "Silk",
    price: 13500,
    image: "https://www.zilikaa.com/cdn/shop/files/I-14_6b2b0982-adb3-475d-afb4-438d96a7777f_800x.jpg?v=1729332372"
  }
];