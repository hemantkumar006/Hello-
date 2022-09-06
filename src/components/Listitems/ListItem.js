import AddToCartIcon from "../../assets/icons/add-to-cart-svgrepo-com.svg"

const ListItem=({data})=>
{
    /*const data={
        discountPrice:340,
        price:450,
        title:"Title of the item",
        thumbnail:"vegetables.png"
    }*/
    return (
        <div className={"item-card"}>
        <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} width="75" height="75" alt={data.title}/>
        
        <div className={"item-card_information"}>
            <div className={"pricing"}>
            <span>₹{data.discountPrice}         </span>
                 <small>
                    <strike>₹{data.price}</strike>
                 </small>
            </div>
            <div className={"title"}>
                <h3>{data.title}</h3>
            </div>
        </div>
        
            <button className={"cart-add"}>
                <span> Add to cart    </span>
                <img src={AddToCartIcon} height="15" width="15" alt="Cart Icon"/>
            </button>
        
        </div>
    )
}

export default ListItem;