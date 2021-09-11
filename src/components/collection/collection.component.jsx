import React from "react";

import './collection.styles.scss';

import { CollectionItem } from "../collection-item/collection-item.component.jsx";

export const Collection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, x) => x < 4)
        .map(({id, ...otherInfo}) => (
          <CollectionItem key={id} {...otherInfo}/>
        ))}
    </div>
  </div>
);
