import React from "react";

export default function BodyMain() {

    return (
    <div
      className="pt-5 pl-4"
      style={{ backgroundColor: "#EEEEEE", height: "100%" }}
    >
      <div className="mt-4">
        <h2 style={{ color: "#2F904F" }}>Store Infomation</h2>
        <div style={{ width: "40px" }}>
          <hr
            className="d-flex align-items-start"
            style={{ border: "1px solid #2F904F" }}
          />
        </div>
      </div>
      <div className="row mr-0">
        <div className="col-md-4">
          <div
            className="card border"
            style={{ width: "100%", height: "auto" }}
          >
            <div className="pt-4 px-3">
              <img
                className="card-img-top"
                src={require("../kamereo3.png")}
                alt="Card image cap"
                style={{ width: "100%" }}
              />
              <div className="card-body">
                <p className="card-title">STORE INFO.</p>
                <div className="row">
                  <p className="sub-title-card col-md-4">Name: </p>
                  <p className="card-content col-md-8">K.O.L the.</p>
                </div>
                <div className="row">
                  <p className="sub-title-card col-md-4">Address: </p>
                  <p className="card-content col-md-8">
                    512 Ho Tung Mau, D1, HCM
                  </p>
                </div>
                <div className="row">
                  <p className="sub-title-card col-md-4">Phone #: </p>
                  <p className="card-content col-md-8">(338) 886 - 9944</p>
                </div>
                <p className="card-title">RED INVOICE INFO.</p>
                <div className="row">
                  <p className="sub-title-card col-md-4">Compamy Name:</p>
                  <p className="card-content col-md-8">K.O.L The Inter</p>
                </div>
                <div className="row">
                  <p className="sub-title-card col-md-4">Address: </p>
                  <p className="card-content col-md-8">
                    9682 Wakehurst Avenue Arlington Heights, IL 60004
                  </p>
                </div>
                <div className="row">
                  <p className="sub-title-card col-md-4">MST: </p>
                  <p className="card-content col-md-8">P77744944</p>
                </div>
              </div>
              <button style={{ width: "100%" }} className="btn py-3 mb-3">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-8 pr-3">
          <div className="border pl-3" style={{ backgroundColor: "white" }}>
            <p className="mt-4 ">DELIVERY DEFAULT MESSAGE</p>
            <div className="input-group mb-3 rounded">
              <div>
                <input type="checkbox" id="c1" name="cc" />
                <label for="c1">
                  <span></span>
                </label>
              </div>
              <input
                type="text"
                className="form-control rounded mx-3"
                placeholder="Write your message"
                style={{ height: "auto", minHeight: "80px" }}
              />
            </div>
            <div className="input-group mb-3 rounded">
              <div>
                <input type="checkbox" id="c2" name="cc" />
                <label for="c2">
                  <span></span>
                </label>
              </div>
              <input
                type="text"
                className="form-control rounded mx-3"
                placeholder="Write your message"
                style={{ height: "auto", minHeight: "80px" }}
              />
            </div>
            <div className="input-group mb-3 rounded">
              <div>
                <input type="checkbox" id="c3" name="cc" />
                <label for="c3">
                  <span></span>
                </label>
              </div>
              <input
                type="text"
                className="form-control rounded mx-3"
                placeholder="Write your message"
                style={{ height: "auto", minHeight: "80px" }}
              />
            </div>
            <div className="input-group mb-3 rounded">
              <div>
                <input type="checkbox" id="c4" name="cc" />
                <label for="c4">
                  <span></span>
                </label>
              </div>
              <input
                type="text"
                className="form-control rounded mx-3"
                placeholder="Write your message"
                style={{ height: "auto", minHeight: "80px" }}
              />
            </div>
            <div className="input-group mb-3 rounded">
              <div>
                <input type="checkbox" id="c5" name="cc" />
                <label for="c5">
                  <span></span>
                </label>
              </div>
              <input
                type="text"
                className="form-control rounded mx-3"
                placeholder="Write your message"
                style={{ height: "auto", minHeight: "80px" }}
              />
            </div>
            <button className="btn btn-lg px-5 mb-3">Upload</button>
          </div>
        </div>
      </div>
    </div>
  );
}
