import React, { useState } from 'react';

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <span className="scroll-btn">
            <i className="fas fa-arrow-circle-up" onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }}></i>
        </span>
    );
}

export default ScrollButton;