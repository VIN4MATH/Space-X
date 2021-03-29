import React from "react";
import { Launch } from "../Launch/Launch";
import './liststyles.css'


export class LaunchList extends React.Component {
    render() {
        return (
            <div className='launch-list'>
                <Launch 
                    banner=" https://farm8.staticflickr.com/7615/16670240949_8d43db0e36_o.jpg"
                    title="FalconSat"
                    launchDate="2006-03-25T10:30:00+12:00"
                    Description="Commercial mission and first Falcon 9 v1.1 flight, with improved 13-tonne to LEO capacity.
     Following second-stage separation from the first stage, an attempt was made to perform an ocean touchdown test of the discarded booster vehicle.
     The test provided good test data on the experiment-its primary objective-but as the booster neared the ocean, aerodynamic forces caused an uncontrollable roll. 
     The center engine, depleted of fuel by centrifugal force, shut down resulting in the impact and destruction of the vehicle."
                />

                <Launch
                    banner=" https://farm8.staticflickr.com/7615/16670240949_8d43db0e36_o.jpg"
                    title="FalconSat"
                    launchDate="2006-03-25T10:30:00+12:00"
                    Description="Commercial mission and first Falcon 9 v1.1 flight, with improved 13-tonne to LEO capacity.
     Following second-stage separation from the first stage, an attempt was made to perform an ocean touchdown test of the discarded booster vehicle.
     The test provided good test data on the experiment-its primary objective-but as the booster neared the ocean, aerodynamic forces caused an uncontrollable roll. 
     The center engine, depleted of fuel by centrifugal force, shut down resulting in the impact and destruction of the vehicle."
                />


                <Launch
                    banner=" https://farm8.staticflickr.com/7615/16670240949_8d43db0e36_o.jpg"
                    title="FalconSat"
                    launchDate="2006-03-25T10:30:00+12:00"
                    Description="Commercial mission and first Falcon 9 v1.1 flight, with improved 13-tonne to LEO capacity.
     Following second-stage separation from the first stage, an attempt was made to perform an ocean touchdown test of the discarded booster vehicle.
     The test provided good test data on the experiment-its primary objective-but as the booster neared the ocean, aerodynamic forces caused an uncontrollable roll. 
     The center engine, depleted of fuel by centrifugal force, shut down resulting in the impact and destruction of the vehicle."
                />
            </div>



        );
    }
}