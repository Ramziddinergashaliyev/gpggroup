// import React, { useEffect, useRef, useState } from 'react'

// import img from "../../assets/animate/atlant.webp"
// import img1 from "../../assets/animate/dot3.webp"
// import img2 from "../../assets/animate/dot4.webp"
// import img3 from "../../assets/animate/kitami.webp"
// import img4 from "../../assets/animate/oil.webp"
// import img5 from "../../assets/animate/winner.webp"
// import img6 from "../../assets/animate/yumiko.webp"

// import "./animate.scss"

// const Animate = () => {
//     const sectionRef = useRef(null)
//     const [active, setActive] = useState(false)

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 setActive(entry.isIntersecting)
//             },
//             { threshold: 0.5 }
//         )

//         if (sectionRef.current) observer.observe(sectionRef.current)

//         return () => observer.disconnect()
//     }, [])

//     return (
//         <div
//             ref={sectionRef}
//             className={`animate-section ${active ? "active" : ""}`}>
//             <img className="animate-section-img left-img-two left" src={img3} />
//             <img className="animate-section-img left-img-one left" src={img} />

//             <img className="animate-section-img center-img center" src={img4} />

//             <img className="animate-section-img right-img-three right" src={img5} />
//             <img className="animate-section-img right-img-two right" src={img6} />
//         </div>
//     )
// }

// export default Animate

import React, { useEffect, useRef, useState } from 'react'
import img from "../../assets/animate/atlant.webp"
import img1 from "../../assets/animate/oil2.webp"
import img2 from "../../assets/animate/dot4.webp"
import img3 from "../../assets/animate/kitami.webp"
import img4 from "../../assets/animate/oil.webp"
import img5 from "../../assets/animate/winner.webp"
import img6 from "../../assets/animate/yumiko.webp"
import video from "../../assets/video/bg2.mp4"

import "./animate.scss"

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

            <video className="animate-section-video" autoPlay loop muted playsInline>
                <source src={video} type="video/mp4" />
            </video>

            <div className="animate-section-overlay"></div>

            <img className="animate-section-img left-img-two left" src={img1} />
            <img className="animate-section-img left-img-one left" src={img4} />

            <img className="animate-section-img center-img center" src={img5} />

            <img className="animate-section-img right-img-three right" src={img} />
            <img className="animate-section-img right-img-two right" src={img6} />
        </div>
    )
}

export default Animate


// import React, { useEffect, useRef, useState } from 'react'
// import img from "../../assets/animate/atlant.webp"
// import img1 from "../../assets/animate/oil2.webp"
// import img2 from "../../assets/animate/dot4.webp"
// import img3 from "../../assets/animate/kitami.webp"
// import img4 from "../../assets/animate/oil.webp"
// import img5 from "../../assets/animate/winner.webp"
// import img6 from "../../assets/animate/yumiko.webp"
// import video from "../../assets/video/bg2.mp4"

// import "./animate.scss"

// const Animate = () => {
//     const sectionRef = useRef(null)
//     const [active, setActive] = useState(false)

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 setActive(entry.isIntersecting)
//             },
//             { threshold: 0.5 }
//         )

//         if (sectionRef.current) observer.observe(sectionRef.current)

//         return () => observer.disconnect()
//     }, [])

//     return (
//         <div
//             ref={sectionRef}
//             className={`animate-section ${active ? "active" : ""}`}>
//             <img className="animate-section-img left-img-two left" src={img1} />
//             <img className="animate-section-img left-img-one left" src={img4} />

//             <img className="animate-section-img center-img center" src={img5} />

//             <img className="animate-section-img right-img-three right" src={img} />
//             <img className="animate-section-img right-img-two right" src={img6} />
//         </div>
//     )
// }

// export default Animate