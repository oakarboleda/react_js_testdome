import React, { useState } from 'react';

function ListComponent() {
    const initialItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
    const [items, setItems] = useState(initialItems);

    const moveItem = (dragIndex, hoverIndex) => {
        const dragItem = items[dragIndex];
        const newItems = [...items];
        newItems.splice(dragIndex, 1);
        newItems.splice(hoverIndex, 0, dragItem);
        setItems(newItems);
    };

    return (
        <ul>
            {items.map((item, index) => (
                <li key={item}>
                    {item}
                    <button onClick={() => moveItem(index, index - 1)}>Up</button>
                    <button onClick={() => moveItem(index, index + 1)}>Down</button>
                </li>
            ))}
        </ul>
    );
}

export default ListComponent;