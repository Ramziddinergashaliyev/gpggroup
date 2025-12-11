import React, { useEffect } from 'react'
import "./singleProduct.scss"

const SingleProduct = () => {
    
    useEffect(() => {
        scrollTo(0,0)
    },[])

    return (
        <div className='singleProduct container'>
            <div className="singleProduct-top">
                <div className="singleProduct-top-left">
                    <div className="singleProduct-top-left-big">
                        <img src="" alt="big-img" />
                    </div>
                    <div className="singleProduct-top-left-small">
                        <img src="" alt="small-img-one" />
                        <img src="" alt="small-img-two" />
                        <img src="" alt="small-img-three" />
                    </div>
                </div>
                <div className="singleProduct-top-right">
                    <h4 className='singleProduct-top-right-title'>SingleProduct</h4>
                    <p className="singleProduct-top-right-text">Specifically designed for use in the cooling system of gasoline and diesel engines, as well as heat exchange units as the working fluid operating at low and high temperatures. Based on the high quality monoethylene glycol using a set of functional additives . Does not contan nitrites and amines. Does not damage rubber parts and sealing of the cooling system . Reliably protects against cavitation and prevents corrosion, and other adverse effects in the cooling system . Used in accordance with the instruction manual and heat exchange units. Ingredients:high quality of mono ethylene glycol, demineralized water , multifunctional complex additives , anticavitational and antifoam additives, coloring agents.</p>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct