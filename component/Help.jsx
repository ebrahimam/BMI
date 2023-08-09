import React from 'react'

export default function Help() {
  return (
    <>
    <div className="help">
        <div className="colors">
            <div className="color flex">
                <span>کم وزن</span>
                <div className="radiuos blue"></div>
            </div>
            <div className="color flex">
                <span>نرمال</span>
                <div className="radiuos green"></div>
            </div>
            <div className="color flex">
                <span>نسبتا چاق</span>
                <div className="radiuos yellow"></div>
            </div>
            <div className="color flex">
                <span>چاق</span>
                <div className="radiuos orange"></div>
            </div>
            <div className="color flex">
                <span>!فربه</span>
                <div className="radiuos red"></div>
            </div>
        
        </div>
    </div>

    </>
  )
}
