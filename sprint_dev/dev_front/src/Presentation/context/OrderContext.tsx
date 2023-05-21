import { Order } from "../../Domain/entities/Order";
import { ResponseApiDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { Children, createContext, useState, useEffect } from 'react';
import { GetByStatusOrderUseCase } from "../../Domain/useCases/Order/GetByStatusOrder";
import { UpdateToPrepareOrderUseCase } from "../../Domain/useCases/Order/UpdateToPrepare";

export interface OrderContextProps{
    ordersPayed: Order[],
    ordersPrepared: Order[],
    ordersFine: Order[],
    ordersDelivery: Order[],
    getOrdersByStatus(status: string): Promise<void>,
    updateToPrepare(order: Order): Promise<ResponseApiDelivery>
}

export const OrderContext = createContext({} as OrderContextProps);

export const OrderProvider = ({children}: any) =>{

    const [ordersPayed, setOrdersPayed] = useState<Order[]>([]);
    const [ordersPrepared, setOrdersPrepared] = useState<Order[]>([]);
    const [ordersFine, setOrdersFine] = useState<Order[]>([]);
    const [ordersDelivery, setOrdersDelivery] = useState<Order[]>([]);
    
    /* useEffect(() => {
        setOrdersPayed([])
        setOrdersPrepared([])
        setOrdersFine([])
        setOrdersDelivery([])
    }, []) */

    const getOrdersByStatus = async (status: string) => {
        const result = await GetByStatusOrderUseCase(status)
        console.log(result)
        if(status === '1'){
            setOrdersPayed(result)
        }
        else if(status === '2'){
            setOrdersPrepared(result)
        }
        else if(status === '3'){
            setOrdersFine(result)
        }
        else if(status === '4'){
            setOrdersDelivery(result)
        }
    }

    const updateToPrepare = async (order: Order) =>{
        const result = await UpdateToPrepareOrderUseCase(order)
        getOrdersByStatus('1')
        getOrdersByStatus('2')
        getOrdersByStatus('3')
        getOrdersByStatus('4')
        return result
    }

    return (
        <OrderContext.Provider
            value={{
                ordersPayed,
                ordersPrepared,
                ordersFine,
                ordersDelivery,
                getOrdersByStatus,
                updateToPrepare
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}