import { useState,useEffect } from 'react'
import './App.css'

function Lesson1() {
  const [text, setText] = useState("Not clicked")
  const [productPrice, setProductPrice] = useState(null)
  const [shippingCost, setShippingCost] = useState(null)
  const [totalCost, setTotalCost] = useState(null)
  const [showOrder, setShowOrder] = useState(false)
  const [datesString, setDatesString] = useState(null) 
  const [timeString, setTimeString] = useState(null)

  

  function job() {
    console.log("Button clicked - Added to Cart")

    const price = 10 + (2 * 8)
    const shipping = 5
    const total = price + shipping
    console.log("Product Price: $" + price)
    console.log("Shipping Cost: $" + shipping)
    console.log("Total Cost: $" + total)
    setProductPrice(price)
    setShippingCost(shipping)
    setTotalCost(total)
    setShowOrder(true) 
  }

  function change() {
    setText("Clicked!!")
  }

  function date() {
    const date = new Date();
    const result = date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'long'
    });
    setDatesString(result);
    console.log(result);
  }

  function time() {
    const time = new Date();
    const results = time.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    console.log(results);
    setTimeString(results);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <button onClick={change}>{text}</button>
      <p>My name is Pranitha</p>
      <div>
        <p>Cotton socks</p>
        <p>Price: $10</p>
        <button onClick={job}>Add to Cart</button>
        <button onClick={date}>Show Date</button>
        <button onClick={time}>Show Time</button>

        {datesString &&(
           <p>Today is {datesString}</p>
        )}

        {timeString &&(
           <p>Current time is {timeString}</p>
        )}

        {productPrice !== null && (
          <>
            <p>Product Price: ${productPrice}</p>
            <p>Shipping Cost: ${shippingCost}</p>
            <p>Total Cost: ${totalCost}</p>
          </>
        )}

        {showOrder && (
          <button>Place your order (${totalCost})</button>
        )}
      </div>
    </>
  )
}

export default Lesson1
