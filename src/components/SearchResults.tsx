import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
    results: Array<{
        id: number;
        price: number;
        title: string;
    }>;
    addToWishList: (id:number)=> void;
}

export function SearchResults({results, addToWishList}:SearchResultsProps){
    
    const totalPrice = useMemo(()=>{
        
        return  results.reduce((total, product)=>{
            return total + product.price
            }, 0)
    
        }, [results]);

    return(
        <div>
            <h2>{totalPrice}</h2>
            {results.map(product => {
                return(
                    <ProductItem
                      key={product.id}
                      product={product}
                      addToWishList={addToWishList} />
                );
            })}
        </div>
    )
}

//useMemo e useCalback
// 1.Quando tiver cálculos muitos pesaddos
// 2. Igualdade referencial(quando passar algo para o elemento filho)