import React, { useState } from 'react';
import { motion } from 'framer-motion';
interface HeroSectionProps {
  className?: string;
  style?: React.CSSProperties;
  onClaimOffer?: () => void;
  onHowItWorks?: () => void;
}
export const HeroSection = ({
  className,
  style,
  onClaimOffer,
  onHowItWorks
}: HeroSectionProps) => {
  const [isClaimHovered, setIsClaimHovered] = useState(false);
  const [isHowHovered, setIsHowHovered] = useState(false);
  const fadeUp = (delay: number) => ({
    initial: {
      opacity: 0,
      y: 28
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay
    }
  });
  return <section className={`hero-section ${className || ''}`.trim()} style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#032250',
    ...style
  }}>
      {/* Background Gradient Layer */}
      <div style={{
      width: '100%',
      height: '100%',
      background: 'linear-gradient(0deg, rgba(244, 242, 240, 1.00) 0%, rgba(93, 150, 234, 1.00) 20%, rgba(17, 91, 199, 1.00) 41%, rgba(6, 61, 142, 1.00) 60%, rgba(4, 49, 116, 1.00) 78%, rgba(3, 34, 80, 1.00) 97%)',
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 0
    }} />

      {/* Hero Graphics — desktop only, hidden on mobile */}
      <motion.div className="hero-graphics" initial={{
      opacity: 0,
      x: 60
    }} animate={{
      opacity: 1,
      x: 0
    }} transition={{
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.3
    }}>
        <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}>
          <img src="https://storage.googleapis.com/storage.magicpath.ai/user/365329335495827456/figma-assets/cab1de06-e5e8-46ae-a656-b79a536be5d9.svg" alt="" aria-hidden="true" style={{
          width: '185.3px',
          height: '13.17px',
          position: 'absolute',
          left: '342.77px',
          top: '478.26px'
        }} />
          <img src="https://storage.googleapis.com/storage.magicpath.ai/user/365329335495827456/figma-assets/472ac57d-18cb-45ef-b9ab-55b01c619509.png" alt="Desktop Display" style={{
          width: '863.62px',
          height: '514px',
          position: 'absolute',
          left: 0,
          top: 0,
          objectFit: 'cover'
        }} />
          {/* Tablet Layer */}
          <div style={{
          width: '346.72px',
          height: '241.45px',
          position: 'absolute',
          left: '451.54px',
          top: '261.53px'
        }}>
            <img src="https://storage.googleapis.com/storage.magicpath.ai/user/365329335495827456/figma-assets/de2451b9-add3-4477-a089-bad7276fa45d.svg" alt="" aria-hidden="true" style={{
            width: '287.03px',
            height: '4.88px',
            position: 'absolute',
            left: '24.42px',
            top: '236.57px'
          }} />
            <img src="https://storage.googleapis.com/storage.magicpath.ai/user/365329335495827456/figma-assets/a2708d21-c50c-4c1d-9773-c5aa3125a680.png" alt="Tablet Display" style={{
            width: '346.72px',
            height: '61.86px',
            position: 'absolute',
            left: 0,
            top: 0,
            objectFit: 'cover',
            display: "none"
          }} />
            <img src="https://storage.googleapis.com/storage.magicpath.ai/user/365329335495827456/figma-assets/ceea650a-05ea-43e0-914a-7c92ae5e9e51.svg" alt="" aria-hidden="true" style={{
            width: '306.56px',
            height: '226.26px',
            position: 'absolute',
            left: '18.45px',
            top: '13.56px'
          }} />
          </div>
          {/* Mobile Layer */}
          <div style={{
          width: '86.81px',
          height: '177.43px',
          position: 'absolute',
          left: '733.14px',
          top: '336.41px'
        }}>
            <img src="https://storage.googleapis.com/storage.magicpath.ai/user/365329335495827456/figma-assets/c84725bf-5b5d-4a59-87cd-3741099e6966.svg" alt="" aria-hidden="true" style={{
            width: '76.51px',
            height: '3.26px',
            position: 'absolute',
            left: '5.43px',
            top: '174.17px'
          }} />
            <img src="https://storage.googleapis.com/storage.magicpath.ai/user/365329335495827456/figma-assets/08a42d7d-3782-487c-8e75-e1e50049e32f.svg" alt="Mobile Display" style={{
            width: '86.81px',
            height: '176.34px',
            position: 'absolute',
            left: 0,
            top: 0
          }} />
          </div>
        </div>
      </motion.div>

      {/* Content Layer */}
      <div className="hero-content">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          {/* Badge */}
          <motion.div {...fadeUp(0.1)} style={{
          height: '40px',
          backgroundColor: 'rgba(121, 144, 178, 0.4)',
          borderRadius: '50px',
          display: 'inline-flex',
          alignItems: 'center',
          padding: '0 24px',
          alignSelf: 'flex-start'
        }}>
            <span style={{
            color: '#FFFFFF',
            fontSize: '15px',
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 400,
            lineHeight: '24px'
          }}>
              Vision Expo 2026
            </span>
          </motion.div>

          {/* Typography */}
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
            <motion.h1 className="hero-h1" {...fadeUp(0.25)}>Go online. We handle everything.</motion.h1>
            <motion.p {...fadeUp(0.4)} style={{
            margin: 0,
            color: '#FFFFFF',
            opacity: 0.9,
            fontSize: '16px',
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 400,
            lineHeight: '1.5',
            maxWidth: '520px'
          }}>
              The platform, the prescription tools, and a team to build it all for you. One bundle — ready to sell.
            </motion.p>
          </div>
        </div>

        {/* Action Buttons */}
        <motion.div className="hero-buttons" {...fadeUp(0.55)}>
          <button onClick={onClaimOffer} onMouseEnter={() => setIsClaimHovered(true)} onMouseLeave={() => setIsClaimHovered(false)} style={{
          height: '50px',
          backgroundColor: isClaimHovered ? '#f0f0f0' : '#FFFFFF',
          borderRadius: '2px',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.2s ease',
          outline: 'none',
          padding: '0 32px',
          whiteSpace: 'nowrap'
        }}>
            <span style={{
            color: '#0749AB',
            fontSize: '16px',
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
              claim offer
            </span>
          </button>

          <button onClick={onHowItWorks} onMouseEnter={() => setIsHowHovered(true)} onMouseLeave={() => setIsHowHovered(false)} style={{
          height: '50px',
          backgroundColor: isHowHovered ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          border: '1px solid #FFFFFF',
          borderRadius: '2px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.2s ease',
          outline: 'none',
          padding: '0 32px',
          whiteSpace: 'nowrap'
        }}>
            <span style={{
            color: '#FFFFFF',
            fontSize: '16px',
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
              HOW IT WORKS?
            </span>
          </button>
        </motion.div>
      </div>

      <style>{`
        /* === HERO DEFAULTS (desktop ≥1200px) === */
        .hero-section {
          min-height: 935px;
          padding: 184px 75px;
        }
        .hero-graphics {
          width: 863.62px;
          height: 514px;
          position: absolute;
          right: 0;
          top: 211px;
          z-index: 1;
          pointer-events: none;
        }
        .hero-content {
          width: 100%;
          max-width: 744px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 52px;
          position: relative;
        }
        .hero-h1 {
          margin: 0;
          color: #FFFFFF;
          font-size: 64px;
          font-family: "DM Sans", sans-serif;
          font-weight: 700;
          line-height: 1.15;
          text-transform: capitalize;
          max-width: 560px;
        }
        .hero-buttons {
          display: flex;
          gap: 20px;
          align-items: center;
          flex-wrap: wrap;
        }

        /* === LARGE TABLET (900px – 1199px) === */
        @media (max-width: 1199px) and (min-width: 901px) {
          .hero-section {
            padding: 140px 40px 100px 40px;
            min-height: 780px;
          }
          .hero-h1 {
            font-size: 52px;
            max-width: 460px;
          }
          .hero-content {
            max-width: 500px;
            gap: 44px;
          }
          .hero-graphics {
            width: 720px;
            height: 430px;
            top: 200px;
            transform: scale(0.78);
            transform-origin: top right;
          }
        }

        /* === SMALL TABLET (769px – 900px) === */
        @media (max-width: 900px) and (min-width: 769px) {
          .hero-section {
            padding: 120px 32px 80px 32px;
            min-height: 680px;
          }
          .hero-h1 {
            font-size: 44px;
            max-width: 100%;
          }
          .hero-content {
            max-width: 420px;
            gap: 36px;
          }
          .hero-graphics {
            width: 500px;
            height: 300px;
            top: 180px;
            transform: scale(0.6);
            transform-origin: top right;
            opacity: 0.85;
          }
        }

        /* === MOBILE (≤768px) === */
        @media (max-width: 768px) {
          .hero-section {
            min-height: unset;
            padding: 110px 24px 64px 24px;
            align-items: flex-start;
          }
          .hero-graphics {
            display: none;
          }
          .hero-content {
            max-width: 100%;
            gap: 36px;
            align-items: flex-start;
          }
          .hero-h1 {
            font-size: 38px;
            line-height: 1.2;
            max-width: 100%;
          }
          .hero-buttons {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
            width: 100%;
          }
          .hero-buttons button {
            width: 100% !important;
            padding: 0 !important;
          }
        }

        @media (max-width: 420px) {
          .hero-h1 {
            font-size: 32px;
          }
          .hero-section {
            padding: 100px 20px 56px 20px;
          }
        }
      `}</style>
    </section>;
};