import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import {useLocation } from 'react-router-dom'

import './SendOrder.css'
import axios from 'axios'

const SendOrder = (props)=>{
    const location = useLocation()
    let var1 = location.state.clientEmail
    let var2 = location.state.influencerEmail
    const [price, setPrice] = useState(0)
    const handleChange = (e) => {
        setPrice(e.target.value)
    }
    const OrderPlaced = async () => {
        console.log("In place Order")
        const orderDetails = {clientEmail: var1, influencerEmail: var2, price: price}; 

        await axios.post("http://localhost:8000/placeOrder", orderDetails).then(res =>{
            // console.log("print the data here " , res.data)
            let a = {myID: res.data, uniqEmail: props.clientEmail}
            axios.post('http://localhost:8000/addOrder',a)
        })
    }

    return (
        <div className="sendOrder">
            <div className='sendOrderarea'>
                <p className='sendOrderMsg'>MAKE SURE TO INCLUDE ALL DETAILS</p>
                <h1 className='sendOrdertitle'>Send New Order</h1>
                <form>
                <label>
                    <textarea type="text" placeholder='Description' className='sendOrderinput2'></textarea>
                </label>
                <label>
                    <input type="text" placeholder='Link to website'className='sendOrderinput1'/>
                </label>
                <label>
                    <input placeholder='Deadline Date (dd/mm/yyyy)' type="text" onFocus="(this.type='date')" onBlur="(this.type='text')" className='sendOrderinput1'/>
                </label>
                <label>
                    <input type="number" placeholder='Price (PKR)' onChange={handleChange} className='sendOrderinput1'/>
                </label>
                </form>
                <button className='sendOrderbuttons' onClick={OrderPlaced}>Send Order</button>
            </div>
        </div>
    );
}

export default SendOrder;