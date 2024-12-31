import React from "react";
import { Link } from "react-router";
import "./Home.css"
const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-sm fixed"
        style={{ backgroundColor: "#a80164", color: "#fff" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="javascript:void(0)">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
          <ul class="navbar-nav m-auto">
        <li class="nav-item">
          <Link class="nav-link " activeClassName="active" to={"/"}>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" activeClassName="active" to={"/service"}>Service</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" activeClassName="active" to={"/contact"}>Contact</Link>
        </li>
      </ul>
            <form className="d-flex">
              {/* <!-- Button trigger modal -->
           <!-- Button trigger modal --> */}
              <button
                type="button"
                className="btn btn-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Book Now
              </button>

              {/* <!-- Modal --> */}
              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-scrollable modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <img src="" alt="img" />
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Get A Query
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form action="" method="POST">
                        <div className="row g-3">
                          <div className="col m-3">
                            <label className="text-lb" for="customer">
                              Customer name
                            </label>
                            <input
                              type="text"
                              className="form-control m-2"
                              placeholder="First name"
                              aria-label="Customername"
                              name="name"
                              id="customer"
                              required
                            />
                          </div>
                          <div className="col m-3">
                            <label className="text-lb" for="phoneno">
                              Phone No
                            </label>
                            <input
                              type="number"
                              className="form-control m-2"
                              placeholder="+1231546"
                              aria-label="phoneno"
                              name="phno"
                              id="phoneno"
                              required
                            />
                          </div>
                        </div>
                        <div className="row g-3">
                          <div className="col m-3">
                            <label className="text-lb" for="pickup">
                              Pickup Location
                            </label>
                            <input
                              type="text"
                              className="form-control m-2"
                              placeholder="Pickup Location"
                              aria-label="pickup"
                              id="pickup"
                              name="pickup"
                              required
                            />
                          </div>
                        </div>
                        {/* <!-- Best way to reach--> */}
                        <div className="row g-3">
                          <div className="col m-3">
                            <label className="text-lb" for="best">
                              Best way to Reach You
                            </label>
                            <select
                              className="form-select m-2"
                              aria-label="Select one"
                              id="best"
                              name="bestway"
                              required
                            >
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
                            <label className="text-lb" for="time">
                              Pickup Time
                            </label>
                            <input
                              type="time"
                              className="form-control m-2"
                              placeholder="time"
                              aria-label="time"
                              name="time"
                              id="time"
                              required
                            />
                          </div>
                          <div className="col m-3">
                            <label className="text-lb" for="date">
                              Pickup Date
                            </label>
                            <input
                              type="date"
                              className="form-control m-2"
                              placeholder="date"
                              aria-label="date"
                              name="date"
                              id="date"
                              required
                            />
                          </div>
                        </div>

                        {/* <!-- for Devices --> */}

                        <div className="row g-3">
                          <div className="col m-3">
                            <label className="text-lb" for="best-1">
                              Devices
                            </label>
                            <select
                              className="form-select m-2"
                              aria-label="Select one"
                              id="best-1"
                              required
                              name="device"
                            >
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
                            <label className="text-lb" for="best-1">
                              What the Problem?
                            </label>
                            <select
                              className="form-select m-2"
                              aria-label="Select one"
                              id="best-2"
                              required
                              name="problem"
                            >
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
                            <label className="text-lb m-2" for="msg">
                              Message
                            </label>
                            <textarea
                              className="form-control m-2"
                              id="msg"
                              name="msg"
                              placeholder="Message"
                              rows="3"
                            ></textarea>
                          </div>
                        </div>

                        {/* <!-- message --> */}
                        <button
                          type="button"
                          className="btn btn-1 m-1"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="submit" name="save" className="btn btn-2 m-1">
                          Save
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
