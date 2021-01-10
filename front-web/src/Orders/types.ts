export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUri: string;
}

export type OrderLocationData = {
    longitude: number;
    address: string;
    latitude: number

}

type ProductId = {
    id: number;
}

export type OrderPayload = {
    products: ProductId[];    
} & OrderLocationData;

