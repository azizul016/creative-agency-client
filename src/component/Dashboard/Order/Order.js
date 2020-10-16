import React from 'react';
import PlaceService from '../../PlaceService/PlaceService';
import Sidebar from '../Sidebar/Sidebar';

const Order = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-3">

                </div>
                <div className="col-md-9">
                    <PlaceService></PlaceService>
                </div>
            </div>
        </div>
    );
};

export default Order;