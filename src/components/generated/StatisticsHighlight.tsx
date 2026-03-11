import React from 'react';
import { motion } from 'framer-motion';
interface StatisticsHighlightProps {
  className?: string;
  style?: React.CSSProperties;
}
const statsData = [{
  id: 'stores',
  value: '500+',
  label: 'Stores Launched'
}, {
  id: 'setup',
  value: '30',
  label: 'Days Avg Setup'
}, {
  id: 'satisfaction',
  value: '98%',
  label: 'Client Satisfaction'
}, {
  id: 'support',
  value: '24/7',
  label: 'Support Available'
}] as any[];
export const StatisticsHighlight: React.FC<StatisticsHighlightProps> = ({
  className,
  style
}) => {
  return <motion.section className={`stats-section ${className || ''}`} style={{
    width: '100%',
    backgroundColor: 'rgba(244, 242, 240, 1)',
    boxSizing: 'border-box',
    overflow: 'hidden',
    ...style
  }} initial={{
    opacity: 0,
    y: 32
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    amount: 0.3
  }} transition={{
    duration: 0.65,
    ease: [0.22, 1, 0.36, 1]
  }}>
      <div className="stats-inner">
        {statsData.map((stat, index) => <motion.div key={stat.id} className="stat-item" initial={{
        opacity: 0,
        y: 24
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        amount: 0.4
      }} transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1
      }}>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </motion.div>)}
      </div>

      <style>{`
        .stats-section {
          padding: 48px 5%;
        }
        .stats-inner {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: clamp(32px, 8vw, 120px);
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
        }
        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
          transition: transform 0.2s ease-in-out;
          cursor: default;
          min-width: 100px;
        }
        .stat-item:hover {
          transform: translateY(-2px);
        }
        .stat-value {
          color: rgba(0, 0, 0, 1);
          font-size: clamp(36px, 5vw, 50px);
          font-family: "DM Sans", sans-serif;
          font-weight: 700;
          line-height: 1.2;
          text-align: left;
        }
        .stat-label {
          color: rgba(0, 0, 0, 0.8);
          font-size: 15px;
          font-family: "DM Sans", sans-serif;
          font-weight: 400;
          line-height: 1.4;
          text-align: left;
        }

        /* === TABLET (769px – 1024px) === */
        @media (max-width: 1024px) and (min-width: 769px) {
          .stats-section {
            padding: 40px 40px;
          }
          .stats-inner {
            gap: clamp(28px, 6vw, 72px);
            justify-content: space-between;
          }
          .stat-item {
            min-width: 80px;
          }
          .stat-value {
            font-size: clamp(32px, 4.5vw, 44px);
          }
        }

        @media (max-width: 640px) {
          .stats-section {
            padding: 40px 24px;
          }
          .stats-inner {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px 24px;
            justify-items: start;
          }
          .stat-item {
            min-width: unset;
            width: 100%;
          }
          .stat-value {
            font-size: 38px;
          }
        }
      `}</style>
    </motion.section>;
};