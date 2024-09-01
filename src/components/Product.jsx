/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export const Product = ({ item, onMove}) => {

    const {id, name, price, photo} = item

    return <div className="col-md-4">
        <img
            src={photo}
            style={{ width: 200, height: 200, objectFit: 'cover' }}
        />
        <p>{name}</p>
        <p><strong>{price}USD</strong></p>
        <button onClick={() => onMove(item)} className="btn btn-primary">move</button>
    </div>
}
