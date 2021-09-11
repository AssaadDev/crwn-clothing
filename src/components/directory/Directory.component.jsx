import React from "react";
import MenuItem from "../menu-items/menu-items.component";
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      section: [
        {
          title: "hats",
          id: "1",
          imageUrl:
            "https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGF0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
            linkUrl: ''
        },
        {
          title: "jackets",
          id: "2",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0057/6772/5138/collections/Jackets_1200x1200.png?v=1624321574",
            linkUrl: ''
        },
        {
          title: "sneakers",
          id: "3",
          imageUrl:
            "https://media.gq.com/photos/60d21930430ae505071c3806/16:9/w_2560%2Cc_limit/SNEAKER_GUIDE_OPENER.jpg",
            linkUrl: ''
        },
        {
          title: "womens",
          id: "4",
          imageUrl:
            "https://hips.hearstapps.com/prima.cdnds.net/assets/17/09/1488201689-morrisons.jpg",
            size: 'large',
            linkUrl: ''
        },
        {
          title: "mans",
          id: "5",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F14%2F2017%2F12%2F11%2Fgettyimages-539573922-2000.jpg&q=85",
            size: 'large',
            linkUrl: ''
        },
      ],
    };
  }

  render() {
    return(
    <div className="directory-menu">
      {this.state.section.map(({ id, ...otherStuff }) => (
        <MenuItem key={id} {...otherStuff} />
      ))}
    </div>)
  }
}

export default Directory;