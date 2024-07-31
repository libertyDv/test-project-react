import React, { useState } from 'react'

function OnChangeComponent() {

    const [name, setNmae] = useState("Escribe tu nombre")
    const [quantity, setQuantity] = useState(1)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("Visa")
    const [shipping, setShipping] = useState("delivery")

    function handleNameChange(event) {
        setNmae(event.target.value)
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value)
    }

    function handleCommentChange(event) {
        setComment(event.target.value)
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value)
    }

    function handleShippingChange(event) {
        setShipping(event.target.value)
    }

    return (

        <div>
            <input value={name} onChange={handleNameChange}></input>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type='number'></input>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} type='number'></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
            </select>

            <p>Payment: {payment}</p>

            <label>
                <input type='radio' value="pick up"
                    checked={shipping === "pick up"}
                    onChange={handleShippingChange}
                ></input>
                Pick up
            </label><br/>

            <label>
            <input type='radio' value="delivery"
                    checked={shipping === "delivery"}
                    onChange={handleShippingChange}
                ></input>
                Delivery
            </label>

            <p>Shipping {shipping}</p>
        </div>
    )


}

export default OnChangeComponent