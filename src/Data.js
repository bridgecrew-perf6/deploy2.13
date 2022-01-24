import React from "react";
import "./Data.css"

class Data extends React.Component {

    render () {
        return (
            <>
            <div className="container">
                <h1>COVID-19 data</h1>
                <h2>
                    Country: {this.props.obj.country}
                </h2>

                <div className="styling">
                    <b>
                    <div>
                        Last Update : {this.props.obj.lastUpdate}
                    </div>
                    <div>
                            Confirmed : {this.props.obj.confirmed}
                    </div>
                    <div>
                            Critical ❗: {this.props.obj.critical}
                    </div>
                    <div>
                            Deaths ☠: {this.props.obj.deaths}
                    </div>
                    <div>
                            Recovered : {this.props.obj.recovered}
                    </div>
                    </b>
                </div>
              
            </div>
            </>
            
        );
    }
}

export default Data;