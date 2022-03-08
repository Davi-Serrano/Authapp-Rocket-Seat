import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
    results: Array<{
        id: number;
        price: number;
        title: string;
    }>;
}

export function SearchResults({results}:SearchResultsProps){
    
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
                    <ProductItem product={product}/>
                );
            })}
        </div>
    )
}

//useMemo e useCalback
// 1.Quando tiver cálculos muitos pesaddos
// 2. Igualdade referencial(quando passar algo para o elemento filho)