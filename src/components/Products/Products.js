import ListItem from '../Listitems/ListItem';

const items = [
    {
        id: 0,
        discountPrice: 340,
        price: 450,
        title: "Title of the item",
        thumbnail: "vegetables.png"

    },
    {
        id: 1,
        discountPrice: 50,
        price: 400,
        title: "Title of the item",
        thumbnail: "vegetables.png"
    }
]

const Products = () => {
    return (
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
                <ListItem data={items[0]}></ListItem>

                <ListItem data={items[1]}></ListItem>
            </div>
        </div>
    )
}
export default Products