import React from 'react'
import './Home.css';
const Home = () => {
  return (
    <>
    
    <section id="home">
     <div className="container home">
       <img src="./images/main-bg.jpg" alt="main" style={{width:' 100%'}} />
       <div className="centered">
         <button
           type="button"
           className="btn btn-1"
           data-bs-toggle="modal"
           data-bs-target="#exampleModal">
           <i className="fa fa-phone p-2"></i>Book Now
         </button>
       </div>
     </div>
     {/* <!-- simple about us  --> */}
     <div className="container text-center">
       <div
         className="about pb-3"
         style={{backgroundColor:' #740d57', color: '#fff', paddingTop: '30px'}}>
         <h1>What can we do</h1>
         <p className="text-center p-5">
           We provide fast, reliable repairs for mobile phones and laptops.
           Whether it's a cracked screen, battery issue, or software problem,
           out expert technicians quickly diagnose and fix your device using
           high-quailty parts. With affordable prices and a focus on customer
           satisfaction, we ensure your devices are back to working like
           new--often within the same day.
         </p>
         <button
           className="btn btn-1 m-2"
           data-bs-toggle="modal"
           data-bs-target="#exampleModal">
           <i className="fa fa-phone p-2"></i>Get a Query
         </button>
       </div>
     </div>
     {/* <!-- about --> */}
     <div className="container text-center align-items-center">
       <div
         className="services pb-3"
         style={{backgroundColor:' #a81764', color: '#fff',paddingTop: '30px'}}>
         <h1>Services</h1>
         <div
           className="row g-3 flex-wrap justify-content-center align-items-center">
           <div className="col m-3 p-3">
             <img
               className="img m-2"
               style={{
                width: '50%',
                borderRadius: '25px',
                boxShadow: '2px -2px 50px 3px #fff'}}
               src="./images/iphone.jpg"
               alt="iphone" />
             <h6
               className="mt-2 mb-2"
               style={{
                fontSize: '1.2rem', letterSpacing: '3px'}}>
               Iphone
             </h6>
           </div>
           <div className="col m-3 p-3">
             <img
               className="img m-2"
               style={{
                  width: '50%',
                  borderRadius: '25px',
                  boxShadow: '2px -2px 50px 3px #fff'}}
                
               src="./images/samsung.jpg"
               alt="iphone" />
             <h6
               className="mt-2 mb-2"
               style={{
                fontSize: '1.2rem', letterSpacing: '3px'}}>
               Samsung
             </h6>
           </div>
           <div className="col m-3 p-3">
             <img
               className="img m-2"
               style={{
                width: '50%',
                borderRadius: '25px',
                boxShadow: '2px -2px 50px 3px #fff'}}
               src="./images/andriod.jpg"
               alt="iphone" />
             <h6
               className="mt-2 mb-2"
               style={{
                fontSize: '1.2rem', letterSpacing: '3px'}}>
               Andriod
             </h6>
           </div>
         </div>
         <div className="row g-3 flex-wrap">
           <div className="col m-3 p-3">
             <img
               className="img m-2"
               style={{
                width: '50%',
                borderRadius: '25px',
                boxShadow: '2px -2px 50px 3px #fff'}}
               src="./images/macbook.jpg"
               alt="iphone" />
             <h6
               className="mt-2 mb-2"
               style={{
                fontSize: '1.2rem', letterSpacing: '3px'}}>
               Mackbook
             </h6>
           </div>
           <div className="col m-3 p-3">
             <img
               className="img m-2"
               style={{
                width: '50%',
                borderRadius: '25px',
                boxShadow: '2px -2px 50px 3px #fff'}}
               src="./images/game.jpg"
               alt="iphone" />
             <h6
               className="mt-2 mb-2"
               style={{
                fontSize: '1.2rem', letterSpacing: '3px'}}>
               Game Console
             </h6>
           </div>
           <div className="col m-3 p-3">
             <img
               className="img m-2"
               style={{
                width: '50%',
                borderRadius: '25px',
                boxShadow: '2px -2px 50px 3px #fff'}}
               src="./images/iwatch.jpg"
               alt="iphone" />
             <h6
               className="mt-2 mb-2"
               style={{
                fontSize: '1.2rem', letterSpacing: '3px'}}>
               i-Watch
             </h6>
           </div>
         </div>
         <button
           className="btn btn-1 m-2"
           data-bs-toggle="modal"
           data-bs-target="#exampleModal">
           <i className="fa fa-phone p-2"></i>Get a Query
         </button>
       </div>
     </div>
     {/* <!-- mobile Repair --> */}
     <div className="container">
       <div className="container-1">
         <div className="box">
           <img src="./images/iphone.jpg" alt="Image 1"/>
         </div>
         <div className="box">
           <div className="text">
             <h1>Mobile Phone Repairs</h1>
             <p>
               <li>
                 <b style={{letterspacing: '2px'}}>Screen Replacement :
                 </b>
                 Cracked and shattered screen? We'll replace it with high-quailty
                 parts to restore your phone to its original conndition.
               </li>
               <li>
                 <b>Battery Repalcement : </b>If your phone isn't
                 holding a charge or draning quickly, we'll install a new battery
                 to improve performance.
               </li>
               <li>
                 <b>Camera Repair : </b>Whether your camera lens is
                 cracked or not functioning properly, we can repair or replace
                 it.
               </li>
               <li>
                 <b>Charging Port Repair : </b>Having a trouble
                 charging your phone? Our experts will fix charging port issues
                 to ensure smooth connectivity.
               </li>
               <li>
                 <b>Water Damage : </b>If your phone has suffered water
                 Damage, we'll do a thorough diagnostic and repair to restore its
                 functionality.
               </li>
               <li>
                 <b>Software Issue : </b>We handle software-related
                 issues like operating system glitches, app crashes, or malware
                 infections.
               </li>
             </p>
             <button
               type="button"
               className="btn btn-1"
               data-bs-toggle="modal"
               data-bs-target="#exampleModal">
               <i className="fa fa-phone p-2"></i>Get a Query
             </button>
           </div>
         </div>
       </div>
     </div>
     {/* <!-- laptop repair --> */}
     <div className="container">
       <div className="container-2">
         <div className="box">
           <div className="text">
             <h1>Laptop Repairs</h1>
             <p>
               <li>
                 <b style={{letterspacing: '2px'}}>Screen Replacement :
                 </b>
                 Cracked and shattered screen? We'll replace it with high-quailty
                 parts to restore your phone to its original conndition.
               </li>
               <li>
                 <b>Battery Repalcement : </b>If your phone isn't
                 holding a charge or draning quickly, we'll install a new battery
                 to improve performance.
               </li>
               <li>
                 <b>Camera Repair : </b>Whether your camera lens is
                 cracked or not functioning properly, we can repair or replace
                 it.
               </li>
               <li>
                 <b>Charging Port Repair : </b>Having a trouble
                 charging your phone? Our experts will fix charging port issues
                 to ensure smooth connectivity.
               </li>
               <li>
                 <b>Water Damage : </b>If your phone has suffered water
                 Damage, we'll do a thorough diagnostic and repair to restore its
                 functionality.
               </li>
               <li>
                 <b>Software Issue : </b>We handle software-related
                 issues like operating system glitches, app crashes, or malware
                 infections.
               </li>
             </p>
             <button
               type="button"
               className="btn btn-1"
               data-bs-toggle="modal"
               data-bs-target="#exampleModal">
               <i className="fa fa-phone p-2"></i>Get a Query
             </button>
           </div>
         </div>
         <div className="box">
           <img src="./images/macbook.jpg" alt="Image 1"/>
         </div>

       </div>

     </div>










   </section>

    
    </>
  )
}

export default Home