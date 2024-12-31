import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="container contact p-3 m-auto">
    <h1 className="text-center">Contact Us</h1>
    <form action="" method="POST">
      <div className="row g-3">
        <div className="col m-3">
          <label className="text-lb" for="customer">Customer name</label>
          <input
            type="text"
            className="form-control m-2"
            placeholder="First name"
            aria-label="Customername"
            name="name"
            id="customer"
            required />
        </div>
        <div className="col m-3">
          <label className="text-lb" for="phoneno">Phone No</label>
          <input
            type="number"
            className="form-control m-2"
            placeholder="+1231546"
            aria-label="phoneno"
            name="phno"
            id="phoneno"
            required />
        </div>
      </div>
      <div className="row g-3">
        <div className="col m-3">
          <label className="text-lb" for="pickup">Pickup Location</label>
          <input
            type="text"
            className="form-control m-2"
            placeholder="Pickup Location"
            aria-label="pickup"
            id="pickup"
            name="pickup"
            required />
        </div>
      </div>
      {/* <!-- Best way to reach--> */}
      <div className="row g-3">
        <div className="col m-3">
          <label className="text-lb" for="best">Best way to Reach You</label>
          <select
            className="form-select m-2"
            aria-label="Select one"
            id="best"
            name="bestway"
            required>
            <option selected>Open this select menu</option>
            <option value="1">Text</option>
            <option value="2">Call</option>
            <option value="3">Both</option>
          </select>
        </div>
      </div>

      {/* <!-- date and time --> */}
      <div className="row g-2">
        <div className="col m-3">
          <label className="text-lb" for="time">Pickup Time</label>
          <input
            type="time"
            className="form-control m-2"
            placeholder="time"
            aria-label="time"
            name="time"
            id="time"
            required />
        </div>
        <div className="col m-3">
          <label className="text-lb" for="date">Pickup Date</label>
          <input
            type="date"
            className="form-control m-2"
            placeholder="date"
            aria-label="date"
            name="date"
            id="date"
            required />
        </div>
      </div>

      {/* <!-- for Devices --> */}

      <div className="row g-3">
        <div className="col m-3">
          <label className="text-lb" for="best-1">Devices</label>
          <select
            className="form-select m-2"
            aria-label="Select one"
            id="best-1"
            required
            name="device">
            <option selected> Select Device</option>
            <option value="1">Mobile</option>
            <option value="2">Laptop</option>
            <option value="3">Iphone</option>
            <option value="4">Macbook</option>
            <option value="5">iWatch</option>
          </select>
        </div>
      </div>

      {/* <!-- Check boxes for issue --> */}
      <div className="row g-3">
        <div className="col m-3">
          <label className="text-lb" for="best-1">What the Problem?</label>
          <select
            className="form-select m-2"
            aria-label="Select one"
            id="best-2"
            required
            name="problem">
            <option selected>What the Problem?</option>
            <option value="1">Screen Isssue</option>
            <option value="2">Battery issue</option>
            <option value="3">Charging Port Issue</option>
            <option value="4">Software issue</option>
            <option value="5">Water or Liquid Issue</option>
            <option value="6">Speaker and Mic Issue</option>
          </select>
        </div>
      </div>
      <div className="row g-3">
        <div className="col m-3">
          <label className="text-lb m-2" for="msg">Message</label>
          <textarea className="form-control m-2" id="msg" name="msg" placeholder="Message" rows="3"></textarea>
        </div>
      </div>

      {/* <!-- message --> */}
      <button
        type="button"
        className="btn btn-1 m-1"
        data-bs-dismiss="modal">
        Close
      </button>
      <button type="submit" name="save" className="btn btn-2 m-1">
        Save
      </button>
    </form>
  </div>
    
    
    </>
  )
}

export default Contact