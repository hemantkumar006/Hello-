import { useState } from 'react';
import ListItem from '../Listitems/ListItem';

// const items = [
//     {
//         id: 0,
//         discountPrice: 340,
//         price: 450,
//         title: "Title of the item",
//         thumbnail: "vegetables.png"

//     },
//     {
//         id: 1,
//         discountPrice: 50,
//         price: 400,
//         title: "Title of the item",
//         thumbnail: "vegetables.png"
//     }
// ]

const Products = () => {
const [title,setTitle]=useState("")
const [discountPrice,setdiscountprice]=useState(0)
const [price,setprice]=useState(0)
const [thumbnail,setthumbnail]=useState("")

const [item,setItem]=useState({

    id: 0,
    discountPrice: 340,
    price: 450,
    title: "Title of the item",
    thumbnail: "vegetables.png"

})

    const handleTitle=(event)=>
    {
         //console.log(event.target.value)
         setTitle(event.target.value)

         setItem({
            ...item,
            title:event.target.value
         })

    }
    const handlediscountprice=(event)=>
    {
         //console.log(event.target.value)
         setdiscountprice(event.target.value)
         setItem({
            ...item,
            discountPrice:event.target.value
         })
    }
    const handleprice=(event)=>
    {
         //console.log(event.target.value)
         setprice(event.target.value)
         setItem({
            ...item,
            price:event.target.value
         })
    }
 
    const handlethumbnail=(event)=>
    {
         //console.log(event.target.value)
         setthumbnail(event.target.value)
         setItem({
            ...item,
            thumbnail:event.target.value
         })
    }

    const submitForm=(event)=>
    {
        event.preventDefault();
        console.log({
            'Price':price,
            'Discountprice': discountPrice,
            'Title':title
        })
        setItem({
            title,
            price,
            discountPrice,
            thumbnail
        })
    }

    return ( 
    
            <div className={"product-wrapper"}>
                <div className={"form"}>
                    <form onSubmit={submitForm} width='50' height>
                        <h2>Item Card details</h2>
                        <div className={"input-field"}>
                            <label htmlFor="title">Title</label>
                            <input 
                            type="text" 
                            placeholder="Enter Title" 
                            value={title}
                            onChange={handleTitle}
                            required
                            />

                        </div>
                        <div className={"input-field"}>
                            <label htmlFor="discountPrice">Discount Price</label>
                            <input 
                            type="num" 
                            placeholder="Enter discount price"
                            value={discountPrice} 
                            onChange={handlediscountprice }
                            required
                            />
                        </div>
                        <div className={"input-field"}>
                            <label htmlFor="price">Price</label>
                            <input 
                            type="num" 
                            placeholder="Enter  price" 
                            value={price} 
                            onChange={handleprice}
                            required
                            />
                        </div>

                        <div className={"input-field"}>
                            <label htmlFor="thumbnail">Thumbnail</label>
                            <input 
                            type="text" 
                            placeholder="Enter thumbnail " 
                            value={thumbnail} 
                            onChange={handlethumbnail}
                            
                            />
                        </div>
                        <div className="update">
                        <button>Update</button>
                    </div>
                       
                    </form>
                    </div>
                    
                    <div>
                        <div>
                        <ListItem data={item}></ListItem>

                        </div>
        </div>
        </div>
    
)}
export default Products