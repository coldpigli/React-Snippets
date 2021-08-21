import React, { useEffect } from 'react'

const Alert = ({alert, removeAlert, listItems}) => {

  useEffect(() => {
    const timeout = setTimeout(()=>{
      removeAlert();
    },2000)
    return () => {
        clearTimeout(timeout);
    }
  }, [listItems])

  return <p className = {`alert alert-${alert.type}`}>{alert.msg}</p>
}

export default Alert
