export interface Iproduct {

    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;
}
export class Product implements Iproduct {
    constructor() {
        this.productName = '';
        this.starRating = 1;

    }
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;

}