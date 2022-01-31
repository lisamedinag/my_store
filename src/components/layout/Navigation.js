import React from 'react';
import { Link } from "react-router-dom";

export default function Navigation () {
    return (
        <div className="menu">
            <Link to="/">
                Home
            </Link>

            <Link to="/products">
                Products
            </Link>
        </div>
    )
}