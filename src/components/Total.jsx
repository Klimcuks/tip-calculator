import React from 'react'

const Total = ({total, totalTip, tipOne, tipTwo}) => {


      return (
    <>
    <p>{typeof(tipOne)} + {tipOne} + {tipTwo}</p>
    <div><strong>You pay ${total + tipOne + tipTwo} (${total} + ${totalTip} tip)</strong></div>
    </>
  ) 
}

export default Total