import React, { useContext } from 'react'
import { CalContext } from '../context/CalculatorProvider';

const Screen = () => {
  const {calc} = useContext(CalContext);

  return (
    <div className='Screen' >
    {calc.num ? calc.num : calc.sec}
    </div>
  )
}

export default Screen