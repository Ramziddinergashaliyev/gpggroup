import React, { useEffect, useState } from 'react';
import img1 from "../../assets/img/lube1.png"
import img2 from "../../assets/img/lube2.png"
import img3 from "../../assets/img/lube3.png"
import './lube.scss';

const Lube = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className='lube'>

            <div className="lube-bg-lines">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
                <div className="line line-4"></div>
            </div>

            <div className="light-trail"></div>

            <div className={`container lube-container ${isVisible ? 'visible' : ''}`}>
                <div className="lube-header">
                    <h3 className='lube-subtitle'>PAO boosting Technology of K1 Lube</h3>
                    <p className="lube-description">
                        PAO Boosting Technology of K1 Lube provides a powerful and comfortable driving experience with PAO Strength.<br />
                        K1 Lube helps you enjoy a premium performance with powerful PAO
                    </p>
                </div>

                <div className="lube-imgs">
                    <img src={img1} alt="img-green" className="lube-imgs-img" />
                    <img src={img2} alt="img-blue" className="lube-imgs-img lube-imgs-blue" />
                    <img src={img3} alt="img-red" className="lube-imgs-img lube-imgs-red" />
                </div>

                <div className="lube-benefits">
                    <div className="benefits-grid">
                        
                        <div className="benefit-card benefit-1">
                            <div className="benefit-content">
                                <p className="benefit-text">
                                    <span className="benefit-main">Strengthening</span>
                                    <span className="benefit-sub">Viscosity Properties</span>
                                </p>
                            </div>
                        </div>

                        <div className="benefit-card benefit-2">
                            <div className="benefit-content">
                                <p className="benefit-text">
                                    <span className="benefit-main">Keeping</span>
                                    <span className="benefit-sub">Engine Power</span>
                                </p>
                            </div>
                        </div>

                        <div className="benefit-card benefit-3">
                            <div className="benefit-content">
                                <p className="benefit-text">
                                    <span className="benefit-main">Extending</span>
                                    <span className="benefit-sub">Drain Interval</span>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lube;