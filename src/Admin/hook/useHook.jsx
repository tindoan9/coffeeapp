import { addProductItem} from '../../store/slices/product.slice'
import { useDispatch, useSelector } from "react-redux";
import {v4} from "uuid";
export const useHook = () => {
    const listProduct = useSelector(state => state.product.productState);
    const dispatch = useDispatch()
    const setListProduct = (product) => {
        dispatch(addProductItem(product));
    }
    

    const addTodoProduct = (container) => {
        if (container.name === '' || container.type==='' || container.price === "" || container.description === '' ) return;
        const newTodoList = 
            {
                id: v4(),
                name:container.name,
                type: container.type,
                price: container.price,
                link: container.link,
                description: container.description,
            };
        
        
        setListProduct(newTodoList);
    }

    const updateProduct = (producItem) =>{
        const updateItem = listProduct.data.map((item) => {
            if(item.id === producItem.id) {
                return {
                    ...item,...producItem
                }
            }
            return item
        })
        setListProduct(updateItem);
    }
    
     
    return  [addTodoProduct, updateProduct];
}