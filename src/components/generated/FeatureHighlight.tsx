import React, { useState } from 'react';
import { motion } from 'framer-motion';
interface FeatureHighlightProps {
  className?: string;
  style?: React.CSSProperties;
}
const features = [{
  id: 'custom-theme',
  title: 'Custom theme',
  description: 'Bespoke Shopify theme designed for eyewear',
  iconSrc: 'https://storage.googleapis.com/storage.magicpath.ai/user/365329335495827456/figma-assets/47822aa2-2f87-476e-9ea4-b47900276919.svg',
  iconAlt: 'Custom theme icon'
}, {
  id: 'rx-configurator',
  title: 'Rx configurator',
  description: 'Single vision, progressive, bifocal — built in',
  iconSrc: '/RX.svg',
  iconAlt: 'Rx configurator icon'
}, {
  id: 'lab-connected',
  title: 'Lab connected',
  description: 'Orders flow directly to your lab partner',
  iconSrc: 'https://storage.googleapis.com/storage.magicpath.ai/user/365329335495827456/figma-assets/a1e2d487-987f-43a9-b81d-4756695cf318.svg',
  iconAlt: 'Lab connected icon'
}, {
  id: 'virtual-tryon',
  title: 'Virtual try-on',
  description: 'AR-powered frame fitting for customers',
  iconSrc: 'https://storage.googleapis.com/storage.magicpath.ai/user/365329335495827456/figma-assets/af72b7c5-82d3-4c47-8f24-3a4f06040b59.svg',
  iconAlt: 'Virtual try-on icon'
}, {
  id: 'pd-capture',
  title: 'PD capture',
  description: 'Camera-based pupillary distance measurement',
  iconSrc: 'https://storage.googleapis.com/storage.magicpath.ai/user/365329335495827456/figma-assets/6ed56feb-82b4-40f2-b431-4690781c029e.svg',
  iconAlt: 'PD capture icon'
}, {
  id: 'fast-launch',
  title: 'Fast launch',
  description: 'Live in ~30 days, not months',
  iconSrc: 'https://storage.googleapis.com/storage.magicpath.ai/user/365329335495827456/figma-assets/c27f2378-5990-41a3-890a-528e4e39b250.svg',
  iconAlt: 'Fast launch icon'
}] as any[];
export const FeatureHighlight = ({
  className,
  style
}: FeatureHighlightProps) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const fadeUp = (delay: number) => ({
    initial: {
      opacity: 0,
      y: 28
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    viewport: {
      once: true,
      amount: 0.3
    },
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      delay
    }
  });
  return <section className={`fh-section ${className || ''}`} style={{
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    overflow: 'hidden',
    boxSizing: 'border-box',
    ...style
  }}>
      <div className="fh-inner">
        {/* Header */}
        <motion.div className="fh-header" {...fadeUp(0)}>
          <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '8px'
        }}>
            <div style={{
            width: '11px',
            height: '11px',
            backgroundColor: 'rgba(7, 73, 171, 1)',
            borderRadius: '50%',
            flexShrink: 0
          }} />
            <span style={{
            color: 'rgba(7, 73, 171, 1)',
            fontSize: '14px',
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 900,
            letterSpacing: '0.07em',
            textTransform: 'uppercase'
          }}>
              What's included
            </span>
          </div>

          <h2 style={{
          margin: '12px 0 12px 0',
          maxWidth: '481px',
          color: 'rgba(0, 0, 0, 1)',
          fontSize: 'clamp(28px, 4vw, 40px)',
          fontFamily: '"DM Sans", sans-serif',
          fontWeight: 700,
          lineHeight: '1.25',
          textTransform: 'capitalize'
        }}>
            {'Built for optical.\nReady to sell.'}
          </h2>

          <p style={{
          margin: 0,
          maxWidth: '432px',
          color: 'rgba(0, 0, 0, 0.85)',
          fontSize: '16px',
          fontFamily: '"DM Sans", sans-serif',
          fontWeight: 400,
          lineHeight: '1.6'
        }}>
            Every tool an independent optical business needs to sell prescription eyewear online.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="fh-grid">
          {features.map((feature, index) => <motion.div key={feature.id} className="fh-cell" onMouseEnter={() => setHoveredId(feature.id)} onMouseLeave={() => setHoveredId(null)} initial={{
          opacity: 0,
          y: 32
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          amount: 0.15
        }} transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.05 + index * 0.08
        }} style={{
          backgroundColor: hoveredId === feature.id ? 'rgba(7, 73, 171, 0.02)' : 'transparent'
        }}>
              <div style={{
            width: '48px',
            height: '48px',
            backgroundColor: 'rgba(7, 73, 171, 1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'transform 0.3s ease',
            transform: hoveredId === feature.id ? 'scale(1.06)' : 'scale(1)'
          }}>
                <img src={feature.iconSrc} alt={feature.iconAlt} style={{
              width: '22px',
              height: '22px',
              objectFit: "fill",
              objectPosition: "50% 50%",
              opacity: "1"
            }} />
              </div>
              <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}>
                <h3 style={{
              margin: 0,
              color: 'rgba(0, 0, 0, 1)',
              fontSize: '20px',
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 700,
              lineHeight: '1.2',
              textTransform: 'capitalize'
            }}>
                  {feature.title}
                </h3>
                <p style={{
              margin: 0,
              color: 'rgba(0, 0, 0, 0.6)',
              fontSize: '15px',
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 400,
              lineHeight: '1.6'
            }}>
                  {feature.description}
                </p>
              </div>
            </motion.div>)}
        </div>
      </div>

      <style>{`
        .fh-section {
          padding: 64px 20px 80px 20px;
        }
        .fh-inner {
          max-width: 1300px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .fh-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 56px;
        }
        .fh-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-left: 1px solid rgba(218, 218, 218, 1);
          border-top: 1px solid rgba(218, 218, 218, 1);
        }
        .fh-cell {
          padding: 40px 36px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          border-right: 1px solid rgba(218, 218, 218, 1);
          border-bottom: 1px solid rgba(218, 218, 218, 1);
          transition: background-color 0.25s ease;
          cursor: default;
          box-sizing: border-box;
        }

        /* === LARGE TABLET (901px – 1200px): 3-col, reduced padding === */
        @media (max-width: 1200px) and (min-width: 901px) {
          .fh-section {
            padding: 56px 40px 72px 40px;
          }
          .fh-header {
            margin-bottom: 44px;
          }
          .fh-cell {
            padding: 32px 28px;
            gap: 20px;
          }
        }

        /* === SMALL TABLET (769px – 900px): 2-col === */
        @media (max-width: 900px) and (min-width: 769px) {
          .fh-section {
            padding: 48px 32px 64px 32px;
          }
          .fh-header {
            margin-bottom: 36px;
          }
          .fh-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .fh-cell {
            padding: 28px 24px;
            gap: 18px;
          }
        }

        /* === MOBILE (≤640px) === */
        @media (max-width: 640px) {
          .fh-section {
            padding: 48px 20px 56px 20px;
          }
          .fh-header {
            align-items: flex-start;
            text-align: left;
            margin-bottom: 36px;
          }
          .fh-grid {
            grid-template-columns: 1fr;
          }
          .fh-cell {
            padding: 28px 20px;
            flex-direction: row;
            align-items: flex-start;
            gap: 20px;
          }
        }
      `}</style>
    </section>;
};