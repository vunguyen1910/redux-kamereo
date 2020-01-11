import React from 'react'

export default function LeftMenu() {
    return (
        <section className="border-right" style={{height: "100vh"}}>
            <div className="row py-4 border-bottom mr-0">
                <div className="col-sm-2">
                    <img src={require("../logo.png")} style={{width:"50px"}} className="rounded-circle"/>
                </div>
                <div className="col-sm-10 pl-4">
                    <p className="my-0" style={{fontSize:"20px", letterSpacing:"2px"}}>KAMEREO</p>
                    <small className="font-weight-light">135 Hai Ba Trung</small>
                    <div className="mt-3">
                        <a href="#"><small>CHANGE STORE</small></a>
                    </div>
                </div>
            </div>

            <div className="row py-4 border-bottom mr-0" style={{color:"red"}}>
                <div className="col-sm-2">
                    <p className="text-center mt-4" style={{width:"60px"}}><i className="fas fa-heart fa-2x text-center"></i></p>
                </div>
                <div className="col-sm-10 d-flex align-items-center pl-4" style={{fontSize:"22px", letterSpacing:"2px"}}>
                    FAVORITE ITEMS
                </div>
            </div>

            <div className="pt-4" style={{marginLeft:"-15px",marginRight:"-15px"}}>
                <div className="pl-4">
                <p className="title-left-menu">Dashboard</p>
                    <div className="row">
                        <div className="col-sm-2">
                        <p style={{fontSize:"22px"}}><i className="fas fa-tachometer-alt "></i></p>
                        <p style={{fontSize:"22px"}}><i className="fas fa-scroll "></i></p>
                        <p style={{fontSize:"22px"}}><i className="fas fa-luggage-cart "></i></p>
                        <p style={{fontSize:"22px"}}><i className="fas fa-indent "></i></p>
                        </div>
                        <div className="col-sm-10">
                            <p className="sub-title">Overview</p>
                            <p className="sub-title">Orders</p>
                            <p className="sub-title">Supplier List</p>
                            <p className="sub-title">Statistic</p>
                        </div>

                    </div>

                <p className="title-left-menu">Market Place</p>
                <div className="row">
                    <p className="col-sm-2" style={{fontSize:"22px"}}><i className="fas fa-store "></i></p>
                    <p className="sub-title col-sm-10">Market</p>
                </div>
                    
                <p className="title-left-menu">General Settings</p>
                <div className="row">
                    <div className="col-sm-2">
                    <p style={{fontSize:"22px"}}><i className="far fa-building "></i></p>
                    <p style={{fontSize:"22px"}}><i className="fas fa-utensils "></i></p>
                    <p style={{fontSize:"22px"}}><i className="fas fa-users "></i></p>
                    </div>
                    <div className="col-sm-10">
                        <p className="sub-title">Company Info</p>
                        <p className="sub-title">Store Info</p>
                        <p className="sub-title">User Management</p>
                    </div>
                </div>

                </div>
            </div>

        </section>
    )
}
