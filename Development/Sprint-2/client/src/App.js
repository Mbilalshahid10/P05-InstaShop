import ReactDOM from "react-dom/client";
import Navbar from './components/Navbar';
// import NavbarAdmin from "./components/Navbar/index_admin";
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Landing from "./Pages/Landing/landing";
import Login from "./Pages/Signin/login";
import Signup from "./Pages/SignUp/signup";
import Orgsignup from "./Pages/SignUp/Orgsignup";
import Endsignup from "./Pages/SignUp/Endsignup";
import Announce from "./Pages/Admin/Announcement/announce";
import EditOrgProfile from "./Pages/Organization View/My Profile/EditOrganization";
import EditEndorseeProfile from "./Pages/Endorsee View/My Profile/EditEndorsee";
import EditAdminProfile from "./Pages/Admin/My Profile/EditAdmin";
import Eprofile from "./Pages/Organization View/Endorsee Profile/Eprofile";
import TestCard from "./Pages/Organization View/Endorsee Profile/testcard";
import SignUp from "./Pages/SignUp/signup";
import ChangePass from "./Pages/Misc/Change Pass/ChangePass";
import HomePage from "./Pages/Organization View/HomePage/Homepage";
import HomePage2 from "./Pages/Organization View/HomePage/HomePage2";


import ClientJobOffers from "./Pages/Organization View/Orders/JobOffer/ClientJobOffers";
import ClientOngoingOrders from "./Pages/Organization View/Orders/Ongoing/ClientOngoingOrders";
import ClientApprovalsPending from "./Pages/Organization View/Orders/Pending/ClientPendingApprovals";
import ClientCompleteOrderList from "./Pages/Organization View/Orders/Completed/ClientCompletedOrders";
import RejectedByInfluencer from "./Pages/Organization View/Orders/Rejected/RejectedByInfluencer"

import InfluencerJobOffers from "./Pages/Endorsee View/Orders/JobOffer/InfluencerJobOffers";
import InfluencerOngoingOrders from "./Pages/Endorsee View/Orders/Ongoing/InfluencerOngoingOrders";
import InfluencerApprovalsPending from "./Pages/Endorsee View/Orders/Pending/InfluencerPendingApprovals";
import InfluencerCompleteOrderList from "./Pages/Endorsee View/Orders/Completed/InfluencerCompletedOrders";
import RejectedJobOffer from "./Pages/Endorsee View/Orders/Rejected/RejectedJobOffer";

import AdminOrderHistory from "./Pages/Admin/Orders/OrderHistory/AdminOrderHistory";
import RemoveClient from "./Pages/Admin/Access/removeclient";
import RemoveInfluencer from "./Pages/Admin/Access/removeinfluencer";

import ClientHistory from "./Pages/Organization View/Orders/OrderHistory/clientHistory";
import InfluencerHistory from "./Pages/Endorsee View/Orders/OrderHistory/influencerHistory";
import ViewAnnouncement from "./Pages/Admin/Announcement/ViewAnnouncement";
import SearchInfluencerByName from "./Pages/Organization View/HomePage/searchInfluencer";
import EditProfile from "./Pages/Admin/My Profile/EditProfile";
import SendOrder from "./Pages/Organization View/Send Order/SendOrder";
import NavbarAdmin from "./components/Navbar/index_admin";
import axios from "axios";


import OrderForm from './Pages/MyPayment'
import OrderForm2 from "./Pages/MyPayment2";

const App = ()=>{
  return(
    <div>
    <Router>
      <Navbar/>
        <Routes>
          {/* <Route path="/" element={(<ChangePass/>)}/> */}
          <Route path="/" element={(<Landing />)}/>
          <Route path="/login" element={(<Login />)}/>
          <Route path="/signup" element={(<Signup />)}/>
          <Route path="/signuporg" element={(<Orgsignup />)}/>
          <Route path="/signupend" element={(<Endsignup />)}/>
          <Route path="/ChangePass" element={(<ChangePass />)}/>
          
          {/* <Route path="/EditEndorsee" element={(<EditEndorseeProfile />)}/> */}
          <Route path="/home" element={(<HomePage />)}/>
          <Route path="/home2" element={(<HomePage2 />)}/>
          <Route path="/adminprofile" element={(<EditAdminProfile />)}/>
          <Route path = "/sendannouncement" element={(<Announce/>)}/>


          <Route path ="/clientProfile" element ={(<EditOrgProfile/>)}/>
          <Route path ="/influencerProfile" element ={(<EditEndorseeProfile/>)}/>
          <Route path = "/viewannouncement" element={(<ViewAnnouncement/>)}/>
          <Route path ="/searchInf" element={(<SearchInfluencerByName />)}/>

          <Route path="/clientJobOffers" element={(<ClientJobOffers />)}/>
          <Route path="/clientOngoingOrders" element={(<ClientOngoingOrders />)}/>
          <Route path="/clientPendingapprovals" element={(<ClientApprovalsPending />)}/>
          <Route path="/clientCompletedorders" element={(<ClientCompleteOrderList />)}/>
          <Route path="/clientRejectedOrders" element={(<RejectedByInfluencer />)}/>
          <Route path ="/clientHistory" element={(<ClientHistory />)}/>

          <Route path="/AdminOrderHistory" element={(<AdminOrderHistory />)}/>
          
          <Route path="/removeclient" element={(<RemoveClient />)}/>
          <Route path="/removeinfluencer" element={(<RemoveInfluencer />)}/>




          <Route path="/influencerJobOffers" element={(<InfluencerJobOffers />)}/>
          <Route path="/influencerOngoingOrders" element={(<InfluencerOngoingOrders />)}/>
          <Route path="/influencerPendingApprovals" element={(<InfluencerApprovalsPending />)}/>
          <Route path="/influencerCompletedOrders" element={(<InfluencerCompleteOrderList />)}/>
          <Route path="/influencerRejectedOrders" element={(<RejectedJobOffer />)}/>
          <Route path ="/influencerHistory" element={(<InfluencerHistory />)}/>
          <Route path="/EditProfile" element={(<EditProfile />)}/>

          <Route path="/sendOrder" element={(<SendOrder/>)}/>
          <Route path="/Mypayment" element={(<OrderForm/>)}/>
          <Route path="/Mypayment2" element={(<OrderForm2/>)}/>
            
        </Routes>

      </Router>     
    </div>






  )
}
export default App;