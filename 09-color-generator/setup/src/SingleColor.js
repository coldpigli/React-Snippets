import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index}) => {

  const [alert, setAlert] = useState(false);
  const bgc = rgb.join(',');
  const hex = rgbToHex(...rgb);
  

  useEffect(() => {
    const timeout = setTimeout(()=>{
      setAlert(false);
    },2000)
    return () => {
      clearTimeout(timeout);
    }
  }, [alert])

  const copyToClipboard = () => {
    setAlert(true);
    navigator.clipboard.writeText(hex);
  }

    return <article className = {`color ${index > 10 && 'color-light'}`}
            style = {{backgroundColor: `rgb(${bgc})`}}
            onClick = {copyToClipboard}>
          <p className="percent-value">{weight}%</p>
          <p className="color-value">{hex}</p>
          {alert && <p className = "alert">Copied to Clipboard!!</p>}
    </article>
}

export default SingleColor
