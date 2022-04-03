export type Product = {
    name: string;
    description: string;
    image: string;
    brand: string;
    price: number;
    category?: string;
    type: ProductType;
};

export type ProductType =
    | "surfboard"
    | "equipment"
    | "surfwear_men"
    | "surfwear_women";
