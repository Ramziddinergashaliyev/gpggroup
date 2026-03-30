import React, { useState, useEffect } from 'react'
import './distrbuter.scss'
// import video from "../../assets/video/vd.mp4"
import video from "../../assets/video/vd.webm"

const distributors = [
    { country: "Ukraine", flag: "🇺🇦", company: 'LLC "PETOLAVTO"', address: "Pirohovskyi put, 34; Kyiv, 03083", phone: "+380 (50) 314 66 33" },
    { country: "Tajikistan", flag: "🇹🇯", company: 'LLC "TAJIK AUTO"', address: "Rudaki Ave, 12; Dushanbe, 734025", phone: "+992 (37) 221 00 00" },
    { country: "Kazakhstan", flag: "🇰🇿", company: 'LLC "KAZAVTO"', address: "Abay Ave, 56; Almaty, 050000", phone: "+7 (727) 300 11 22" },
    { country: "Turkmenistan", flag: "🇹🇲", company: 'LLC "TURKMENAUTO"', address: "Bitarap Turkmenistan, 10; Ashgabat", phone: "+993 (12) 394 455" },
    { country: "UAE", flag: "🇦🇪", company: 'LLC "GULF AUTO TRADING"', address: "Sheikh Zayed Road, 101; Dubai", phone: "+971 (4) 321 00 99" },
    { country: "Uzbekistan", flag: "🇺🇿", company: 'LLC "UZBEKAVTO"', address: "Amir Temur Ave, 22; Tashkent, 100000", phone: "+998 (71) 123 45 67" },
]

export default function Distributor() {
    const [active, setActive] = useState(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => { setTimeout(() => setMounted(true), 60) }, [])

    return (
        <section className="dr">

            <div className="dr__map">
                <video
                    src={video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                />
                <div className="dr__map-fade" />
            </div>

            <div className={`dr__left ${mounted ? 'dr__left--in' : ''}`}>
                <span className="dr__eyebrow">Global Network</span>
                <h2 className="dr__title">
                    Our<br />
                    <em>Distributors</em>
                </h2>
                <div className="dr__line" />
            </div>

            <div className="dr__right">
                {distributors.map((item, i) => {
                    const isOpen = active === i
                    return (
                        <div
                            key={i}
                            className={`dr__row ${isOpen ? 'dr__row--open' : ''} ${mounted ? 'dr__row--in' : ''}`}
                            style={{ '--i': i }}
                        >
                            <button className="dr__row-head" onClick={() => setActive(isOpen ? null : i)}>
                                <span className="dr__row-flag">{item.flag}</span>
                                <span className="dr__row-name">{item.country}</span>
                                <span className="dr__row-plus">{isOpen ? '−' : '+'}</span>
                            </button>

                            <div className="dr__row-body">
                                <div className="dr__row-inner">
                                    <p className="dr__row-co">{item.company}</p>
                                    <div className="dr__row-meta">
                                        <span className="dr__row-meta-item">
                                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path d="M10 11a3 3 0 100-6 3 3 0 000 6z" />
                                                <path d="M10 18s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z" />
                                            </svg>
                                            {item.address}
                                        </span>
                                        <a className="dr__row-meta-item dr__row-tel" href={`tel:${item.phone}`}>
                                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path d="M2 3.5A1.5 1.5 0 013.5 2h.879a1.5 1.5 0 011.414 1l.894 2.236A1.5 1.5 0 016.3 7.13l-.9.6a9.042 9.042 0 004.87 4.87l.6-.9a1.5 1.5 0 011.893-.387L15 12.207a1.5 1.5 0 011 1.414V14.5A1.5 1.5 0 0114.5 16H14C7.373 16 2 10.627 2 4v-.5z" />
                                            </svg>
                                            {item.phone}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}