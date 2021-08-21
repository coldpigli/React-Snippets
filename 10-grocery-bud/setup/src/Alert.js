import React, { useEffect } from 'react'

const Alert = ({alert, removeAlert}) => {

  useEffect(() => {
    const timeout = setTimeout(()=>{
      removeAlert();
    },2000)
    return () => {
        clearTimeout(timeout);
    }
  }, [])

  return <p className = {`alert alert-${alert.type}`}>{alert.msg}</p>
}

export default Alert
