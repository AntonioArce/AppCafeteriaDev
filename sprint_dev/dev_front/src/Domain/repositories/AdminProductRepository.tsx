import { ResponseApiDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { Product } from "../entities/Product";
import * as ImagePicker from 'expo-image-picker';

export interface AdminProductRepository{
    getByCategory(id: string): Promise<Product[]>
    createWithImage(product: Product, file: ImagePicker.ImagePickerAsset): Promise<ResponseApiDelivery>
}