/* eslint-disable react/prop-types */

import { Product } from "./Product"

export const ProductList = ({ items, onMove}) => {
    
    return <div className="col-md-7">
        <p>Product List</p>
        <div className="row">
            {
                items.map(elm => <Product 
                                    key={elm.id}
                                    // {...elm}
                                    onMove={onMove}
                                    item={elm}
                                    />)
            }

        </div>
    </div>
}
