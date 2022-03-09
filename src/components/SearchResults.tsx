import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
    totalPrice: number;
    results: Array<{
        id: number;
        price: number;
        priceFormatted: string;
        title: string;
    }>;
    addToWishList: (id:number)=> void;
}

export function SearchResults({totalPrice, results, addToWishList}:SearchResultsProps){
    
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