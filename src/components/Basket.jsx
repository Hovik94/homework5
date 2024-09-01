import { BasketItem } from "./BasketItem"

/* eslint-disable react/prop-types */

export const Basket = ({ cart, onUp, onDown, onDelete, total }) => {
    return <div className="col-md-5">
        <h3>Total is: {total} USD</h3>
        <table className="table table-dark table-bordered">
            <thead>
                <tr>
                    <th>product</th>
                    <th>price</th>
                    <th>count</th>
                    <th>subtotal</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.map(elm => <BasketItem
                        key={elm.id}
                        {...elm}
                        up={onUp}
                        down={onDown}
                        remove={onDelete}
                    />)
                }

            </tbody>
        </table>
    </div>

}
