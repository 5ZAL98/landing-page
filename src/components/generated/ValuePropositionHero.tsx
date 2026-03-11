import React, { useState } from 'react';
import { motion } from 'framer-motion';
interface ValuePropositionHeroProps {
  className?: string;
  style?: React.CSSProperties;
}
const cards = [{
  id: 'shopify',
  image: 'https://storage.googleapis.com/storage.magicpath.ai/user/365329335495827456/figma-assets/5562b75e-762c-4d86-826d-0976fae8f9d0.jpg',
  logo: 'https://storage.googleapis.com/storage.magicpath.ai/user/365329335495827456/figma-assets/3964c652-8473-4b48-b943-0e278af433d6.svg',
  logoWidth: '92px',
  logoHeight: '26px',
  title: 'Your store, payments & checkout',
  description: 'Your eyewear business runs on Shopify — the commerce platform trusted by millions of brands worldwide.'
}, {
  id: 'lensadvisor',
  image: 'https://storage.googleapis.com/storage.magicpath.ai/user/365329335495827456/figma-assets/43b3ff9b-4b63-44aa-a7fa-b1d872ae1b86.png',
  logo: 'https://storage.googleapis.com/storage.magicpath.ai/user/365329335495827456/figma-assets/5c1f6d95-698f-49c3-a016-70b9bce89253.svg',
  logoWidth: '130px',
  logoHeight: '19px',
  title: 'Prescription lens sales & lab integration',
  description: 'Customers pick a frame, enter their Rx, choose lenses — the order goes straight to your lab.'
}, {
  id: 'shoptrade',
  image: 'https://storage.googleapis.com/storage.magicpath.ai/user/365329335495827456/figma-assets/d4a4d72c-b553-42d3-8c10-32690f85bac2.png',
  logo: 'https://storage.googleapis.com/storage.magicpath.ai/user/365329335495827456/figma-assets/94869c40-79b0-4dce-8af4-07f262534b46.svg',
  logoWidth: 'auto',
  logoHeight: 'auto',
  title: 'Store design, development & setup',
  description: 'We design your store, configure LensAdvisor, connect your lab, and hand you the keys. Ready to sell.'
}] as any[];
export const ValuePropositionHero: React.FC<ValuePropositionHeroProps> = ({
  className,
  style
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
  return <section className={`vph-section ${className || ''}`} style={{
    width: '100%',
    backgroundColor: 'rgba(244, 242, 240, 1)',
    boxSizing: 'border-box',
    overflow: 'hidden',
    fontFamily: '"DM Sans", sans-serif',
    ...style
  }}>
      <div className="vph-inner">
        {/* Label */}
        <motion.div {...fadeUp(0)} style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '6px',
        marginBottom: '16px'
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
          fontWeight: 900,
          lineHeight: '1',
          letterSpacing: '0.07em',
          textTransform: 'uppercase'
        }}>
            All in one solution
          </span>
        </motion.div>

        <motion.h2 {...fadeUp(0.1)} style={{
        maxWidth: '680px',
        margin: '0 0 14px 0',
        color: 'rgba(0, 0, 0, 1)',
        fontSize: 'clamp(28px, 4.5vw, 40px)',
        fontWeight: 700,
        lineHeight: '1.2',
        textAlign: 'center',
        textTransform: 'capitalize'
      }}>
          Everything you need. Nothing you don't.
        </motion.h2>

        <motion.p {...fadeUp(0.2)} style={{
        margin: '0 0 48px 0',
        color: 'rgba(0, 0, 0, 0.85)',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '1.6',
        textAlign: 'center',
        maxWidth: '480px'
      }}>
          Three partners, one bundle. Your store goes live in ~30 days.
        </motion.p>

        {/* Cards Grid */}
        <div className="vph-cards">
          {cards.map((card, index) => <motion.div key={card.id} className="vph-card" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          amount: 0.15
        }} transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.1 + index * 0.12
        }} style={{
          transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)',
          boxShadow: hoveredIndex === index ? '0 20px 40px rgba(0,0,0,0.1)' : '0 4px 6px rgba(0,0,0,0.02)'
        }}>
              <div className="vph-card-img">
                <img src={card.image} alt={card.title} style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease',
              transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)'
            }} />
              </div>

              <div className="vph-card-body">
                <div style={{
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px'
            }}>
                  <img src={card.logo} alt="Partner Logo" style={{
                width: card.logoWidth,
                height: card.logoHeight,
                maxWidth: '100%',
                objectFit: 'contain'
              }} />
                </div>

                <h3 style={{
              margin: '0 0 10px 0',
              color: 'rgba(26, 26, 26, 1)',
              fontSize: '22px',
              fontWeight: 700,
              lineHeight: '1.3',
              letterSpacing: '0.2px',
              textTransform: 'capitalize'
            }}>
                  {card.title}
                </h3>

                <p style={{
              margin: 0,
              color: 'rgba(26, 26, 26, 0.8)',
              fontSize: '15px',
              fontWeight: 400,
              lineHeight: '1.6',
              letterSpacing: '0.2px'
            }}>
                  {card.description}
                </p>
              </div>
            </motion.div>)}
        </div>
      </div>

      <style>{`
        .vph-section {
          padding: 64px 20px 80px 20px;
        }
        .vph-inner {
          max-width: 1301px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .vph-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          width: 100%;
        }
        .vph-card {
          background-color: rgba(255, 255, 255, 1);
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          overflow: hidden;
        }
        .vph-card-img {
          width: 100%;
          height: 240px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .vph-card-body {
          padding: 28px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        /* === LARGE TABLET (901px – 1200px) === */
        @media (max-width: 1200px) and (min-width: 901px) {
          .vph-section {
            padding: 56px 40px 72px 40px;
          }
          .vph-cards {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .vph-card-img {
            height: 210px;
          }
        }

        /* === SMALL TABLET (769px – 900px) === */
        @media (max-width: 900px) and (min-width: 769px) {
          .vph-section {
            padding: 48px 32px 64px 32px;
          }
          .vph-cards {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .vph-card-img {
            height: 180px;
          }
          .vph-card-body {
            padding: 22px;
          }
        }

        /* === MOBILE (≤640px) === */
        @media (max-width: 640px) {
          .vph-section {
            padding: 48px 20px 56px 20px;
          }
          .vph-cards {
            grid-template-columns: 1fr;
            max-width: 480px;
          }
          .vph-card-img {
            height: 220px;
          }
          .vph-inner {
            align-items: flex-start;
          }
          .vph-inner h2,
          .vph-inner p {
            text-align: left !important;
          }
          .vph-inner > div:first-child {
            align-self: flex-start;
          }
        }
      `}</style>
    </section>;
};