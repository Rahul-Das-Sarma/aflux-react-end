import React from 'react';
import "./category.css";
import { Link } from "react-router-dom";


const Categories = () => {
    return(
        <div className="category-container">
          <ul className="category-list">
              <li className="men"><Link className="category-link" to="/category/men clothing" >Men Clothing</Link></li>
              <li className="women"><Link className="category-link" to="/category/women clothing">Women Clothing</Link>  </li>
              <li className="electronics"><Link className="category-link" to="/category/electronics">Electronics</Link></li>
          </ul>
        </div>
    )
}

export default Categories ;