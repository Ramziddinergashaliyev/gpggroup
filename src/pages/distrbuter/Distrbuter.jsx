import React, { useState, useEffect } from 'react'
import './distrbuter.scss'
import video from '../../assets/video/vd.webm'
import { useTranslation } from 'react-i18next'
import { DATA_EN, DATA_RU } from '../../static'

const PinIcon = () => (
    <svg width="13" height="13" viewBox="0 0 20 20" fill="none"
        stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="8" r="3" />
        <path d="M10 18C10 18 3.5 12.5 3.5 8a6.5 6.5 0 0113 0C16.5 12.5 10 18 10 18z" />
    </svg>
)

const PhoneIcon = () => (
    <svg width="13" height="13" viewBox="0 0 20 20" fill="none"
        stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3.5A1.5 1.5 0 013.5 2h.879a1.5 1.5 0 011.414 1l.894 2.236A1.5 1.5 0 016.3 7.13l-.9.6a9.042 9.042 0 004.87 4.87l.6-.9a1.5 1.5 0 011.893-.387L15 12.207a1.5 1.5 0 011 1.414V14.5A1.5 1.5 0 0114.5 16H14C7.373 16 2 10.627 2 4v-.5z" />
    </svg>
)

export default function Distributor() {
    const [active, setActive] = useState(null)
    const [mounted, setMounted] = useState(false)
    const { i18n } = useTranslation()
    const isRu = i18n?.language === 'ru'
    const Data = isRu ? DATA_RU : DATA_EN

    useEffect(() => { window.scrollTo(0, 0) }, [])
    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 60)
        return () => clearTimeout(t)
    }, [])

    const toggle = (i) => setActive(p => (p === i ? null : i))

    return (
        <section className="dr">
            <span className="dr__orb dr__orb--1" aria-hidden="true" />
            <span className="dr__orb dr__orb--2" aria-hidden="true" />
            <span className="dr__orb dr__orb--3" aria-hidden="true" />

            <div className="dr__video" aria-hidden="true">
                <video src={video} autoPlay muted loop playsInline preload="auto" />
                <div className="dr__video-shade" />
            </div>

            <div className={`dr__left${mounted ? ' dr__left--in' : ''}`}>

                <span className="dr__tag">
                    <span className="dr__tag-dot" />
                    {isRu ? 'Глобальная сеть' : 'Global Network'}
                </span>

                <h1 className="dr__title">
                    {isRu ? 'Наши' : 'Our'}
                    <br />
                    <em>{isRu ? 'дистрибьюторы' : 'Distributors'}</em>
                </h1>

                <div className="dr__divider" />
            </div>

            <div className="dr__panel">
                <div className="dr__panel-inner">
                    {Data.map((item, i) => {
                        const open = active === i
                        return (
                            <div
                                key={i}
                                className={`dr__row${open ? ' dr__row--open' : ''}${mounted ? ' dr__row--in' : ''}`}
                                style={{ '--i': i }}
                            >
                                <button
                                    className="dr__head"
                                    onClick={() => toggle(i)}
                                    aria-expanded={open}
                                >
                                    <span className="dr__head-idx">{String(i + 1).padStart(2, '0')}</span>
                                    <span className="dr__head-name">{item.country}</span>
                                    <span className="dr__head-icon" aria-hidden="true">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                                            <path d="M2.5 4.5L7 9l4.5-4.5" />
                                        </svg>
                                    </span>
                                </button>

                                <div className="dr__body">
                                    <div className="dr__body-inner">
                                        <p className="dr__company">{item.distributor}</p>
                                        <div className="dr__meta">
                                            <span className="dr__meta-row">
                                                <span className="dr__meta-ico dr__meta-ico--pin"><PinIcon /></span>
                                                <span className="dr__meta-txt">{item.title}</span>
                                            </span>
                                            <a
                                                className="dr__meta-row dr__meta-row--tel"
                                                href={`tel:${item.number}`}
                                            >
                                                <span className="dr__meta-ico dr__meta-ico--tel"><PhoneIcon /></span>
                                                <span className="dr__meta-txt">{item.number}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}