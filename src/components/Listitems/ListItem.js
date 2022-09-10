import addtocart from "../../assets/icons/add-to-cart-svgrepo-com.svg"
import { useState } from "react"

const ListItem=({data})=>
{
    // using Normal variables
    // let message="not added to the cart"
 
    // const handleClick=()=>
    // {
    //     message="added to the cart "
    //     console.log("clicked",message)
        

    // }
    
    const [message,setMessage]=useState("item not added to the cart")
    const [count, setCount]=useState(0)
    const handleClick=()=>
    {
        
          setMessage("Added to the cart")
          if(count==0)
          setCount(count+1)
          console.log("hemant")
          console.log("clicked,",message)
    }
    const incrementbyone=()=>
    {
        setCount(count+1);
    }
const decrementbyone=()=>
{
    if(count>0)
     setCount(count-1)
}

    /*const data={
        discountPrice:340,
        price:450,
        title:"Title of the item",
        thumbnail:"vegetables.png"
    }*/
    return <div className={"item-card"}>
        <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} width="75" height="75" alt={data.title}/>
        
        <div className={"item-card_information"}>
            <div className={"pricing"}>
            <span>₹{data.discountPrice}         </span>
                 <small>
                    <strike>₹{data.price}</strike>
                 </small>
            </div>
            <div className={"title"} onClick={()=>console.log("clicked,",data)}>
                <h3>{data.title}</h3>
            </div>
        </div>
        <small className={"cart-message"}> {message}</small>
        <small className={"count"}>{count}</small>
              <button className={"cart-add"} onClick={handleClick /*()=>console.log("clicked",data)*/}>
                <span> Add to cart </span>
            
                <img src={addtocart} height="15" width="15" alt="Cart Icon"/>
            </button>  

            <button onClick={ incrementbyone}><span>+</span></button>
            <button onClick={ decrementbyone}><span>-</span></button>

        
        </div>
    
}

export default ListItem;


