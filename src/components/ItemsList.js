import { Link } from "react-router-dom";

export const ItemsList = props => {

    const { items } = props;

    return (
        <div className='items-list-wrapper'>
            {items.map(item => (
                <div
                    className='item-card'
                    key={item.id}
                >
                <Link to={`${item.id}`}>
                    <img
                        className='items-list-image'
                        src={item.imageUrl}
                        alt={item.name}
                    />

                    <p> {item.name} </p>
                    <p>${item.price}</p>
                </Link>
                </div>
            ))}
            <h1> This is Items List Page</h1>
        </div>
    )

}