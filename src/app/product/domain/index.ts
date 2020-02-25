import { Product } from 'src/app/share/domain';
import { ImageSlider } from 'src/app/share/components';

export interface ProductVariant{
    id: number,
    product: Product;
    name: string;
    price: number;
    listPrice: number;
    productVariantImages: ImageSlider[];
}