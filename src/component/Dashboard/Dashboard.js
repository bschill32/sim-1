import React, {Component} from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Product/>
                <div>Dashboard</div>
            </div>
        )
    }
}

export default Dashboard