import { memo, useState, lazy } from "react";
import {addProductToWishListProps} from "./addProductToWishList"
// import { addProductToWishList } from  "./addProductToWishList"

interface ProductItemProps {
    product:{
        id: number;
        price: number;
        title: string;
        priceFormatted: string;
    }
    addToWishList: (id:number)=>void;

}

export function ProductItemComponent({product, addToWishList}:ProductItemProps){
    const AddProducttoWishlist = lazy<addProductToWishListProps>(()=>{
        return import('./addProductToWishList').then(mod => add.addProductToWishList)
    })


    const [isAddingToWishList, setIsAddingToWishList] = useState(false)

    return(
        <div>
            {product.title} - <strong>{product.price} </strong>
            <button onClick={()=> setIsAddingToWishList(true)}>  Adicionar aos favoritos?</button>
            
            {isAddingToWishList &&  (<AddProducttoWishlist

              onAddToWishList={()=>addToWishList(product.id)} 
              onRequestClose={()=>setIsAddingToWishList(false)}
              />)}
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps)=>{
    return Object.is(prevProps.product, nextProps.product)
})