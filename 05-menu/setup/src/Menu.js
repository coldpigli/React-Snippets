import React from 'react';

const Menu = ({foods}) => {
  {
    return <article className = "section-center">
      {
        foods.map((food)=>{
          const {id, title, price, img, desc} = food;
          return <div className = "menu-item">
            <img src={img} className = "photo"></img>
            <div className = "item-info">
              <header>
                <h4>{title}</h4>
                <h4 className = "price">${price}</h4>
              </header>
              <p className = "item-text">{desc}</p>
            </div>
          </div>
        })
      }
    </article>
  }
};

export default Menu;
