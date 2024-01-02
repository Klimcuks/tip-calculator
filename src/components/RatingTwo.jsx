import React from 'react'

const RatingTwo = ({total, setTipTwo}) => {

  const handleChange = (e) => {
    const optionVal = Number(e.target.value)

    let totalTip = total * optionVal 
    
    console.log(`rating2`,totalTip)
    return setTipTwo(totalTip)
  }

  return (
    <div>
        <select onChange={(e)=>handleChange(e)}>
            <option value='0'>Dissatisfied (0%)</option>
            <option value='0.025'>It was ok (5%)</option>
            <option value='0.05'>It was good (10%)</option>
            <option value='0.1'>Absolutely amazing(20%)</option>
        </select>
    </div>
  )
}

export default RatingTwo