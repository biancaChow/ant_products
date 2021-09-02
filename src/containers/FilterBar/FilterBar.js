import React, {Component} from 'react';
import BrandFilter from "../../components/BrandFilter/BrandFilter";
import OrderFilter from "../../components/OrderFilter/OrderFilter";

class FilterBar extends Component {
    render() {
        return (
            <div className="mb-2 col-lg-12">
               <div className="card bg-light">
                    <div className="row p-2">
                        <BrandFilter/>
                    </div>
                    <div className="row p-2">
                        <OrderFilter/>
                    </div>
             </div>
            </div>
        );
    }
}

export default FilterBar;