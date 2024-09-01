/* eslint-disable react/prop-types */

export const BasketItem = ({ id, name, price, count, up, down, remove }) => {
    return <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>{count}</td>
        <td>{count * price}USD</td>
        <td>
            <button onClick={() => up(id)}>+</button>
            <button onClick={() => down(id)}>-</button>
            <button onClick={() => remove(id)}>x</button>
        </td>
    </tr>
}
