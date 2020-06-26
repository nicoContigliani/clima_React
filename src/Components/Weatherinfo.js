import React from 'react';

const Weatherinfo = (props) => {
    return (
        <div>
            {
                props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            {
                props.temperature ?
                    <div>

                        <div className="card card-body">
                            <h1>Weather info</h1>
                            <p>
                                Location:{props.city},{props.country}
                            </p>
                            <p>
                                Temperature:{props.temperature} °C
                </p>
                            <p>
                                Humidity:{props.humidity}
                            </p>
                            <p>
                                Wind Speed: {props.wimd_speed}
                            </p>
                        </div>
                    </div>
                    : <div className="card card-body">
                        <p>No Request yet</p>
                    </div>

            }
        </div>


    );
}


export default Weatherinfo;