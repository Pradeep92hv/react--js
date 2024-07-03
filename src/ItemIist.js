import LineItems from './LineItems';
function ItemIist({items,handleCheck,handleDelete}) {
    return (
        <ul>
        {items.map((item) => (
            <LineItems
            key={item.id}
            item={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
                  />
            
        ))}
    </ul>
    )
}

export default ItemIist