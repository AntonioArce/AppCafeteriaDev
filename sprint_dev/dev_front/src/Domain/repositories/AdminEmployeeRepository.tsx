import { ResponseApiDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { User } from "../entities/User";

export interface AdminEmployeeRepository{
    getAll(): Promise<User[]>;
    create(user: User): Promise<ResponseApiDelivery>
/*     update(category: Category): Promise<ResponseApiDelivery>
    remove(id: string): Promise<ResponseApiDelivery> */
}