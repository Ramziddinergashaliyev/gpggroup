import React, { useEffect, useRef, useState } from 'react'
import img from "../../assets/animate/atlant.webp"
import img1 from "../../assets/animate/oil2.webp"
import img2 from "../../assets/animate/cool.webp"
import img3 from "../../assets/animate/oil3.webp"
import img4 from "../../assets/animate/oil.webp"
import img5 from "../../assets/animate/winner.webp"
import img6 from "../../assets/animate/yumiko.webp"
import video from "../../assets/video/bg2.mp4"

import "./animate.scss"
import { NavLink } from 'react-router-dom'

const Animate = () => {
    const sectionRef = useRef(null)
    const [active, setActive] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setActive(entry.isIntersecting)
            },
            { threshold: 0.5 }
        )

        if (sectionRef.current) observer.observe(sectionRef.current)

        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={sectionRef}
            className={`animate-section ${active ? "active" : ""}`}>
            <div className="animate-section-overlay"></div>

            <NavLink to={"/singleProduct/68"}>
                <img className="animate-section-img left-img-two left" src={img1} />
            </NavLink>

            <NavLink to={"/singleProduct/70"}>
                <img className="animate-section-img left-img-one left" src={img3} />
            </NavLink>

            <NavLink to={"singleProduct/62"}>
                <img className="animate-section-img left-img-zero left" src={img4} />
            </NavLink>

            <NavLink to={"/singleProduct/6"}>
                <img className="animate-section-img center-img center" src={img5} />
            </NavLink>

            <NavLink to={"/singleProduct/17"}>
                <img className="animate-section-img right-img-zero right" src={img} />
            </NavLink>

            <NavLink to={"/singleProduct/8"}>
                <img className="animate-section-img right-img-three right" src={img2} />
            </NavLink>
            
            <NavLink to={"/singleProduct/25"}>
                <img className="animate-section-img right-img-two right" src={img6} />
            </NavLink>
            
        </div>
    )
}

export default Animate