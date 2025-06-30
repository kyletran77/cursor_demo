export interface Solution {
  title: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
  products: string[];
}

export interface Product {
  name: string;
  category: string;
  description: string;
  features: string[];
  benefits: string[];
  categoryColor: string;
}

export interface ProductCategory {
  name: string;
  description: string;
  icon: string;
  color: string;
  productCount: number;
}

export interface Leader {
  name: string;
  title: string;
  initials: string;
  bio: string;
}

export interface BusinessSegment {
  name: string;
  description: string;
  icon: string;
  color: string;
  products: string[];
}

export interface CompanyValue {
  title: string;
  description: string;
  icon: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  path: string;
  exact?: boolean;
} 