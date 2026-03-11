import React, { useState } from 'react';
import { motion } from 'framer-motion';
const checklistItems = [{
  id: 'setup',
  text: 'Full technical setup handled for you'
}, {
  id: 'rx',
  text: 'Prescription lens sales from day one'
}, {
  id: 'lab',
  text: 'Direct lab order routing'
}, {
  id: 'no-lock',
  text: 'No lock-in, no surprises'
}] as any[];
const steps = [{
  id: 'express',
  number: '01',
  title: 'Express Interest',
  description: 'Fill in the short form. No commitments — just a conversation starter.'
}, {
  id: 'consult',
  number: '02',
  title: 'Free Consultation',
  description: 'A Shop Trade specialist reviews your business and maps out the right setup.'
}, {
  id: 'build',
  number: '03',
  title: 'Store Build',
  description: 'Shopify store design and LensAdvisor configuration, done for you.'
}, {
  id: 'launch',
  number: '04',
  title: 'Launch & Grow',
  description: 'Go live in weeks, backed by ongoing support from all three partners.'
}] as any[];
export const ProcessExplainer: React.FC = () => {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);
  return <section style={{
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    overflow: 'hidden',
    boxSizing: 'border-box'
  }}>
      <div className="pe-content">
        {/* Left column */}
        <motion.div className="pe-left" initial={{
        opacity: 0,
        x: -36
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true,
        amount: 0.25
      }} transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }}>
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
              The Process
            </span>
          </div>

          <h2 style={{
          margin: '16px 0 0 0',
          color: 'rgba(0, 0, 0, 1)',
          fontSize: 'clamp(28px, 4vw, 40px)',
          fontFamily: '"DM Sans", sans-serif',
          fontWeight: 700,
          lineHeight: '1.25',
          textAlign: 'left',
          textTransform: 'capitalize'
        }}>
            How the All in one bundle works
          </h2>

          <ul className="pe-checklist">
            {checklistItems.map(item => <li key={item.id} className="pe-checklist-item">
                <div style={{
              width: '28px',
              height: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(103, 255, 255, 1)',
              borderRadius: '50%',
              flexShrink: 0
            }}>
                  <img src="https://storage.googleapis.com/storage.magicpath.ai/user/365329335495827456/figma-assets/63104230-bc2e-4a68-ab8a-800a5106b581.svg" alt="Checkmark" style={{
                width: '10px',
                height: '7px'
              }} />
                </div>
                <span style={{
              color: 'rgba(0, 0, 0, 0.65)',
              fontSize: '15px',
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 400,
              lineHeight: '1.5'
            }}>
                  {item.text}
                </span>
              </li>)}
          </ul>
        </motion.div>

        {/* Right column — steps */}
        <div className="pe-right">
          {steps.map((step, index) => <motion.div key={step.id} className="pe-step" onMouseEnter={() => setHoveredStep(step.id)} onMouseLeave={() => setHoveredStep(null)} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          amount: 0.2
        }} transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
          delay: index * 0.1
        }}>
              <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
            alignItems: 'flex-start',
            paddingTop: "16px"
          }}>
                <div style={{
              width: '72px',
              height: '72px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: hoveredStep === step.id ? 'rgba(5, 53, 131, 1)' : 'rgba(7, 73, 171, 1)',
              borderRadius: '50%',
              transition: 'background-color 0.3s ease',
              flexShrink: 0
            }}>
                  <span style={{
                color: '#fff',
                fontSize: '28px',
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 700,
                lineHeight: 1
              }}>
                    {step.number}
                  </span>
                </div>

                <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              paddingTop: '8px'
            }}>
                  <h3 style={{
                margin: 0,
                color: 'rgba(26, 26, 26, 1)',
                fontSize: '20px',
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 700,
                lineHeight: '1.3',
                letterSpacing: '0.2px',
                textTransform: 'capitalize'
              }}>
                    {step.title}
                  </h3>
                  <p style={{
                margin: 0,
                color: 'rgba(26, 26, 26, 0.75)',
                fontSize: '15px',
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 400,
                lineHeight: '1.6',
                letterSpacing: '0.2px'
              }}>
                    {step.description}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && <div style={{
            height: '1px',
            width: '100%',
            backgroundColor: 'rgba(218, 218, 218, 1)',
            marginTop: '28px'
          }} />}
            </motion.div>)}
        </div>
      </div>

      <style>{`
        .pe-content {
          max-width: 1300px;
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          gap: 60px;
          padding: 80px 70px;
          box-sizing: border-box;
        }
        .pe-left {
          flex: 0 0 420px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .pe-checklist {
          list-style: none;
          margin: 8px 0 0 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .pe-checklist-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 12px;
        }
        .pe-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0;
          min-width: 0;
        }
        .pe-step {
          padding-bottom: 0;
        }

        /* === LARGE TABLET (901px – 1200px) === */
        @media (max-width: 1200px) and (min-width: 901px) {
          .pe-content {
            padding: 64px 40px;
            gap: 48px;
          }
          .pe-left {
            flex: 0 0 320px;
          }
        }

        /* === SMALL TABLET (769px – 900px): keep side-by-side but compact === */
        @media (max-width: 900px) and (min-width: 769px) {
          .pe-content {
            padding: 56px 32px;
            gap: 36px;
          }
          .pe-left {
            flex: 0 0 260px;
          }
        }

        /* === MOBILE (≤768px): stack === */
        @media (max-width: 768px) {
          .pe-content {
            flex-direction: column;
            padding: 48px 24px 56px 24px;
            gap: 40px;
          }
          .pe-left {
            flex: unset;
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .pe-content {
            padding: 40px 20px 48px 20px;
          }
        }
      `}</style>
    </section>;
};