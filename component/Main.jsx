import React, { useState } from 'react'
import '../src/style/style.css'
export default function Main() {
  const [weight,setweight] =useState()
  const [height,setheight] =useState()
  const [cal,setcal] =useState()
  const [color,setcolor] =useState('blue')



  /////define function to  calculate BMI//////////////////////////////////
  function calc(w,h)
  {
    const heightToMeter=parseInt(h) / 100
       return parseInt(w)/(heightToMeter*heightToMeter)
  }
  function Compare(num)
  {
    if(num<=18.5) {return 'rgb(66,165,245)'}
    else if(num>18.5 && num<=24.9) {return 'rgb(29,233,182)'}
    else if(num>24.9 && num<=29.9) {return 'rgb(238,255,65)'}
  else if(num>30 && num <=34.9) {return 'rgb(239,108,0)'}
   else if(num>35) {return 'rgb(198,40,40)'}
      return ;
  }
  return (
    <>
    <div className="Main">
      <div className="indet box-shodow">
        <div className="txt">محاسبه کن...</div>
        <div className="inp ">
          <input type="text" onChange={(e)=>{setweight(e.target.value)}} placeholder='وزن خودت رو وارد کن' />
          <input type="text" onChange={(e)=>{setheight(e.target.value)}} placeholder='(به سانتی متر)قدت رو وارد کن'/>
        </div>
        <div className="btn">
          <button onClick={
            ()=>{
              setcal(parseInt(calc(weight,height)))
              setcolor(Compare(calc(weight,height)))
              
            }}>click me!</button>
        </div>
      </div>
    </div>
            <div className="result "  >
                <div className="ini box-shodow" style={{display: cal === undefined ? 'none'  :  'block',backgroundColor:color}}>
                    <span>{`شاخص توده بدنی شما ${cal} میباشد  .`}</span>
                </div>
            </div>
    </>
  )
}
