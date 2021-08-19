import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb}) => {
    return <article className = "color">
        <p>{rgb}</p>
    </article>
}

export default SingleColor
