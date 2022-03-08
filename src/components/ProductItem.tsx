interface ProductItemProps {
    product:{
        id: number;
        price: number;
        title: string;
        priceFormatted: string;
    }
    addToWishList: (id:number)=>void;

}

export function ProductItem({product, addToWishList}:ProductItemProps){
    return(
        <div>
            {product.title} - <strong>{product.price} </strong>
            <button onClick={()=>addToWishList}>Add to wish List</button>
        </div>
    )
}