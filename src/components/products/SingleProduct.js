import React, {Component} from 'react';
import { connect } from "react-redux";

class SingleProduct extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}
const mapStateToProps = state => {
    return { products: state.products };
};

export default connect(mapStateToProps)(SingleProduct) ;
