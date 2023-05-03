import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './influencerHistory.css'

import axios from 'axios'
import { useState } from 'react'
// const shapack = require('./database/Schema/Announcement')
// const shapack = require("../../../server/database/Schema/Announcement")
const InfluencerHistory = ()=>{
    const location = useLocation()
    const email = location.state.email

        // e.preventDefault();
    const [pendinglist,setpendinglist] = useState([])
    const [newpendlist, setnewpendlist] = useState([])
    useEffect(()=>{
        axios.get("https://colleeasy.herokuapp.com/influencerHistory").then(
            (res)=>{
                console.log(res.data)
                setpendinglist(res.data)
            }

            ).catch(
                err=>{console.log(err)}
            )
    },[])

    const myfunc = ()=>{
        pendinglist.map((val,key)=>{
            if(val.influencerEmail === email && val.status ==="Completed" && val.acceptedByClient === true){
                newpendlist[key] = val
            }
        })
    }
    myfunc()
  
    return(
        <div>
        {
            <div className='ipa'>
                <h2>Here are your Orders History of Influencer</h2>
                {
                    newpendlist.map((val,key)=>{
                        return(
                            <div className='clientPendingApprovalCard'>
                                <div>
                                    <p>Order ID: {JSON.parse(JSON.stringify(val,undefined,3)).orderID}</p>
                                    <p>Client Email: {JSON.parse(JSON.stringify(val,undefined,3)).influencerEmail}</p>
                                    <p>Price: PKR{JSON.parse(JSON.stringify(val,undefined,3)).price}</p>
                                    <p>Status: {JSON.parse(JSON.stringify(val,undefined,3)).status}</p>
                                    <p>Client Rating : {JSON.parse(JSON.stringify(val,undefined,3)).ratingGivenClient} </p>
                                    <p>Influencer Rating : {JSON.parse(JSON.stringify(val,undefined,3)).ratingGivenInfluencer} </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        }
        </div>
    )
}

export default InfluencerHistory;