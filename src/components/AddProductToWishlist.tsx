
interface addProductToWishListProps{
    onAddToWishList:()=>void;
    onRequestClose:()=>void;
}

 export function addProductToWishList({
    onAddToWishList,
     onRequestClose
}: addProductToWishListProps){
    return (
        <span>
            Adicionar a Lista de favoritos?
            <button onClick={onAddToWishList}>Sim</button>
            <button onClick={onRequestClose} >Não</button>
        </span>
    )
}