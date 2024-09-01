import React, { useContext } from 'react'
import { CalContext } from '../context/CalculatorProvider';

const transformStyle = (btn) =>
  { 
    const signs =
    {
      "=":"equals",
      "-":"operators",
      "x":"operators",
      "/":"operators",
      "%":"operators",
      "Del":"operators",
      "C":"operators",
      "+":"operators",
    }

    return(
      signs[btn]
    )
  }

const Button = ({value}) => {
  const {calc, setCalc} = useContext(CalContext)

  const deleteHandle = () =>
    {
      let slicedNum = calc.num.toString();
      let result;
      result= slicedNum.length > 1 ? slicedNum.slice(0,-1) : "0"
      setCalc({
        ...calc,
        num: result,
      })
    }

    const clearHandle = () =>
    {
      setCalc({
        sign:"",
        num: "0",
        sec:0,
      })
    }

  const commaHandle = () => 
  {
   setCalc({
    ...calc,
    num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
   })
    
  }

  const handleClickNumSigns = () => 
    {
      let numberString = value.toString();
      let result;

      if (calc.num === "0" && numberString === "0") {
        // Si el número actual es 0 y estamos añadiendo un 0, no hacemos nada
        result = '0';
      } else if (calc.num == 0 && numberString !== '0') {
        // Si el número actual es 0 y estamos añadiendo un dígito distinto de 0, reemplazamos el 0 con el nuevo dígito
        result = numberString;
      } else {
        // En cualquier otro caso, simplemente añadimos el nuevo dígito al número actual
        result = calc.num.toString() + numberString;
      }

        setCalc({
          ...calc,
          num:result,
        })
    }

  const operatorHandle = () => 
    {
      setCalc ({
        sign: value,
        sec: !calc.sec && calc.num ? calc.num :  calc.sec,
        num: 0,
      })
    }

  const equalsHandle = () => 
    {
      if(calc.sec && calc.num)
        {
          const math =(a,b,sign) => 
            {
              const result = 
              {
                '+': (a,b) => a + b,
                '-': (a,b) => a - b,
                'x': (a,b) => a * b,
                '/': (a,b) => a / b,
              }
              return result[sign](Number(a),Number(b)).toFixed(4);
            }
            setCalc({
              sec: math(calc.sec, calc.num, calc.sign),
              sign: '',
              num: 0
            })
        }

    }

  const handleClickBtn=()=>
    {
        const signButton = 
        {
          '.':commaHandle,
          'C':clearHandle,
          'Del':deleteHandle,
          '+': operatorHandle,
          '-': operatorHandle,
          'x': operatorHandle,
          '/': operatorHandle,
          '=': equalsHandle,
        }
        if (signButton[value])
          {
            return signButton[value]();
          } else 
          {
            return handleClickNumSigns();
          }
    } 



  return (
    <button  onClick={handleClickBtn}
    className={`${transformStyle(value)} Button`}>{value}</button>
  )
}

export default Button