import React from "react";

import "./shop.style.scss";

import "./shop.data.js";
import SHOP_DATA from "./shop.data.js";

import { Collection } from "../../components/collection/collection.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
        collectionsData: SHOP_DATA
    } 
  }

  render(){
      const {collectionsData} = this.state;
      return (
          <div className='shop-page'>
          {
              collectionsData.map(({id, ...otherStuff}) => (
                  <Collection key={id} {...otherStuff} />
              ))
          }
          </div>
      )
  }
}

export default ShopPage;