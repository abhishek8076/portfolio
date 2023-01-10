import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './services.css';
export const Service = () => {
    return (
        <>

            <div class='container-fluid mx-auto mt-5 mb-5 col-12' style={{ textAlign: "center" }}>
                <div class="hd">Our Serivces </div>
                <p><small class="text-muted">Always render more and better service than <br />is expected of you, no matter what your ask may be.</small></p>
                <div class="row" style={{ justifyContent: "space-between", marginRight: "10px", marginLeft: "10px" }}>
                    <div class="card col-md-3 col-12">
                        <div class="card-content">
                            <div class="card-body"> <img class="img" />
                                <div class="shadow"></div>
                                <div class="card-title"> We're Free </div>
                                <div class="card-subtitle">
                                    <p> <small class="text-muted">We spent thousands of hours creating on algorithm that does this for you in seconds. We collect a small fee from the professional after they meet your</small> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card col-md-3 col-12 ml-2">
                        <div class="card-content">
                            <div class="card-body"> <img class="img" />
                                <div class="card-title"> We're Unbiased </div>
                                <div class="card-subtitle">
                                    <p> <small class="text-muted"> We don't accept ads from anyone. We use actual data to match you who the best person for each job </small> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card col-md-3 col-12 ml-2">
                        <div class="card-content">
                            <div class="card-body"> <img class="img rck" />
                                <div class="card-title"> We Guide you </div>
                                <div class="card-subtitle">
                                    <p> <small class="text-muted">Buying or selling a home is often the largest transaction anyone does in their life. we guide you through the process so that you can be confident in reaching your dream outcome.</small> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{paddingTop:"15px"}}>
                <div class="row" style={{ justifyContent: "space-between", marginRight: "10px", marginLeft: "10px" }}>
                    <div class="card col-md-3 col-12">
                        <div class="card-content">
                            <div class="card-body"> <img class="img" />
                                <div class="shadow"></div>
                                <div class="card-title"> We're Free </div>
                                <div class="card-subtitle">
                                    <p> <small class="text-muted">We spent thousands of hours creating on algorithm that does this for you in seconds. We collect a small fee from the professional after they meet your</small> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card col-md-3 col-12 ml-2">
                        <div class="card-content">
                            <div class="card-body"> <img class="img" />
                                <div class="card-title"> We're Unbiased </div>
                                <div class="card-subtitle">
                                    <p> <small class="text-muted"> We don't accept ads from anyone. We use actual data to match you who the best person for each job </small> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card col-md-3 col-12 ml-2">
                        <div class="card-content">
                            <div class="card-body"> <img class="img rck" />
                                <div class="card-title"> We Guide you </div>
                                <div class="card-subtitle">
                                    <p> <small class="text-muted">Buying or selling a home is often the largest transaction anyone does in their life. we guide you through the process so that you can be confident in reaching your dream outcome.</small> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                

            </div>
        </>
    )
}