import React from 'react'
import "./made.scss"
import img from "../../assets/img/win.png"
import img1 from "../../assets/img/win1.png"

const Made = () => {
    return (
        <div className='made container'>
            <div className="made-left">
                <div className="made-left-info">
                    <h2 className="made-left-info-title">GPG <br /> Lubricants</h2>
                    <p className='made-left-info-text'>Made in Uzbekistan</p>
                </div>
                <button className='made-left-info-btn'>
                    Shop now
                    <span className="btn-arrow">→</span>
                </button>
            </div>

            <div className="made-right">
                <button className="made-right-btn">MADE IN Uzbekistan</button>
                <h2 className="made-right-title">GPG</h2>
                <p className="made-right-text">High-Quality Antifreeze Winner Red</p>
            </div>

            <div className='made-img'>
                <img className='made-img-one' src={img} alt="Rubaat Motor Oil" />
            </div>

            <div className="made-img-bottom">
                <img className='made-img-bottom-one' src={img1} alt="Rubaat Premium Oil" />
            </div>
        </div>
    )
}

export default Made