import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight}) => {

  const bgc = rgb.join(',');
  const hex = rgbToHex(...rgb);
  console.log(bgc);

    return <article className = "color"
            style = {{backgroundColor: `rgb(${bgc})`}}>
          <p className="percent-value">{weight}%</p>
          <p className="color-value"></p>
    </article>
}

export default SingleColor
