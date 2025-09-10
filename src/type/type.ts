export interface Category {
  Category_ID: number;
  Category_Image: string;
  Category_Name: string;
  sort_order: number;
}

export interface Color {
  Color_Code: string;
  Color_ID: number;
  Color_Name: string;
  Color_image: string;
  Product_ID: number;
  discount: number;
  json_data: {
    add_images: string[];
  };
  sort_order: number;
}

export interface Excluded {
  color_id: number | null;
  id: number;
  parameter_id: number;
  product_id: number;
}

export interface Extra {
  Characteristics: string;
  Delivery: string;
  Kit: string;
  Offer: string;
  Product_Extra_ID: number;
  Product_ID: number;
  ai_description: string;
}

export interface Image {
  Image_ID: number;
  Image_URL: string;
  MainImage: boolean;
  Product_ID: number;
  position: string;
  sort_order: number;
  title: string;
}

export interface ImportanceNum {
  id: number;
  importance: number;
  product_id: number;
}

export interface Product {
  Created_At: string;
  OnMain: boolean;
  Product_ID: number;
  Product_Name: string;
  Updated_At: string;
  categories: Category[];
  colors: Color[];
  excluded: Excluded[];
  extra_json: Record<string, unknown>;
  extras: Extra[];
  from_crm: unknown;
  images: Image[];
  importance_num: ImportanceNum[];
  marks: Mark[];
  parameters: ParameterProduct[];
  reviews: unknown[];
  reviews_video: unknown[];
  tags: unknown[];
}
export interface Mark {
  Mark_ID: "new" | "premium" | "sale" | "hit" | "discount" | "hot";
  Mark_Name: string;
}
interface ParameterProduct {
  Parameter_ID: number;
  chosen: boolean;
  disabled: boolean;
  extra_field_color: string;
  extra_field_image: string;
  name: string;
  old_price: number;
  parameter_json: {
    add_images: string[];
  };
  parameter_string: string;
  price: number;
  sort_order: number;
}
export interface Pagination {
  current_page: number;
  has_next: boolean;
  has_prev: boolean;
  per_page: number;
  total_pages: number;
  total_products: number;
}
export interface ProductsResponseProps {
  pagination: Pagination;
  products: Product[];
  status: string;
}
interface ProductMarks {
  Mark_ID: number;
  Mark_Name: string;
}
export interface ProductsOnMAinResponseProps {
  categories: Category[];
  pagination: Pagination;
  product_marks: ProductMarks[];
  products: Product[];
  status: string;
}
