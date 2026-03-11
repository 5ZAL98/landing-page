import React from 'react';
interface BrandFooterProps {
  className?: string;
  style?: React.CSSProperties;
}
const footerData = [{
  id: 'shopify',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/365329335495827456/figma-assets/9ae57917-4ad5-46c7-96cc-10119d7c1432.svg',
  logo: 'https://storage.googleapis.com/storage.magicpath.ai/user/365329335495827456/figma-assets/077d6f15-498a-4358-8907-68a70b77992c.svg',
  logoWidth: '143px',
  logoHeight: '40px',
  text: "The world's most powerful commerce platform. Your products, your checkout, your brand — all native.",
  link: 'https://www.shopify.com',
  alt: 'Shopify'
}, {
  id: 'lensadvisor',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/365329335495827456/figma-assets/96b53f9c-2318-400b-b832-824f11bcd206.svg',
  logo: null,
  logoWidth: '',
  logoHeight: '',
  text: 'Prescription lens configuration on every product page. No code, no redirects, no friction.',
  link: 'https://www.lensadvisor.com',
  alt: 'LensAdvisor'
}, {
  id: 'shoptrade',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/365329335495827456/figma-assets/76a739fb-9573-4c7d-9b22-b834cabe2c22.svg',
  logo: 'https://storage.googleapis.com/storage.magicpath.ai/user/365329335495827456/figma-assets/501f4cb5-37dc-4f0e-ac1d-4be316780ec6.svg',
  logoWidth: '160px',
  logoHeight: '40px',
  text: 'Shopify experts specializing in eyewear commerce. We built the theme, the integrations, and this demo.',
  link: 'https://www.shoptrade.co',
  alt: 'ShopTrade'
}] as any[];
export const BrandFooter: React.FC<BrandFooterProps> = ({
  className,
  style
}) => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  return <footer className={`bf-footer ${className || ''}`} style={{
    width: '100%',
    boxSizing: 'border-box',
    position: 'relative',
    backgroundColor: 'rgba(30, 30, 30, 1)',
    overflow: 'hidden',
    ...style
  }}>
      <img src="https://storage.googleapis.com/storage.magicpath.ai/user/365329335495827456/figma-assets/cb4c6ad0-fe9a-4a79-85c4-73f7dd87457f.jpg" alt="" aria-hidden="true" className="bf-bg" />

      <div className="bf-container">
        {footerData.map((item, index) => <React.Fragment key={item.id}>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="bf-col" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} style={{
          opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.65 : 1,
          transform: hoveredIndex === index ? 'translateY(-3px)' : 'translateY(0)'
        }} aria-label={`Visit ${item.alt}`}>
              <img src={item.icon} alt={`${item.alt} icon`} style={{
            width: '64px',
            height: '64px',
            flexShrink: 0
          }} />

              {item.id === 'lensadvisor' ? <div style={{
            width: '200px',
            height: '30px',
            position: 'relative'
          }}>
                  <img src="https://storage.googleapis.com/storage.magicpath.ai/user/365329335495827456/figma-assets/151106ec-be39-4184-a9b4-075896fe8dce.svg" alt="LensAdvisor Text" style={{
              width: '150px',
              height: '20px',
              position: 'absolute',
              left: '50px',
              top: '7px'
            }} />
                  <div style={{
              width: '42px',
              height: '30px',
              position: 'absolute',
              left: 0,
              top: 0
            }}>
                    <img src="https://storage.googleapis.com/storage.magicpath.ai/user/365329335495827456/figma-assets/60a73f38-4d13-44a9-98b7-2040e754c41c.svg" alt="LensAdvisor Icon" style={{
                width: '36px',
                height: '30px',
                position: 'absolute',
                left: '3px',
                top: 0
              }} />
                  </div>
                </div> : <img src={item.logo!} alt={`${item.alt} logo`} style={{
            width: item.logoWidth,
            height: item.logoHeight,
            objectFit: 'contain'
          }} />}

              <p className="bf-text">{item.text}</p>
            </a>

            {index < footerData.length - 1 && <div className="bf-divider" aria-hidden="true" />}
          </React.Fragment>)}
      </div>

      <style>{`
        .bf-bg {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          object-fit: cover;
          z-index: 1;
          opacity: 0.6;
          pointer-events: none;
        }
        .bf-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: flex-start;
          gap: 0;
          width: 100%;
          max-width: 1224px;
          margin: 0 auto;
          padding: 48px 24px;
          position: relative;
          z-index: 2;
          box-sizing: border-box;
        }
        .bf-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
          flex: 1;
          text-decoration: none;
          transition: transform 0.2s ease, opacity 0.2s ease;
          cursor: pointer;
          outline: none;
          padding: 0 28px;
        }
        .bf-col:focus-visible {
          outline: 2px solid #ffffff;
          border-radius: 8px;
        }
        .bf-text {
          color: rgba(255, 255, 255, 1);
          font-size: 14px;
          font-family: "DM Sans", sans-serif;
          font-weight: 400;
          line-height: 1.6;
          text-align: center;
          margin: 0;
          max-width: 260px;
        }
        .bf-divider {
          width: 1px;
          align-self: stretch;
          background-color: rgba(255, 255, 255, 0.2);
          flex-shrink: 0;
          margin: 8px 0;
        }

        /* === TABLET (769px – 1023px): keep row, reduce col padding === */
        @media (max-width: 1023px) and (min-width: 769px) {
          .bf-container {
            padding: 40px 24px;
          }
          .bf-col {
            padding: 0 16px;
            gap: 14px;
          }
          .bf-text {
            font-size: 13px;
            max-width: 200px;
          }
        }

        /* === MOBILE (≤768px): stack === */
        @media (max-width: 768px) {
          .bf-container {
            flex-direction: column;
            align-items: center;
            gap: 40px;
            padding: 48px 24px;
          }
          .bf-divider {
            width: 80px;
            height: 1px;
            align-self: auto;
            margin: 0;
          }
          .bf-col {
            padding: 0;
            width: 100%;
            max-width: 300px;
          }
        }

        @media (max-width: 480px) {
          .bf-container {
            padding: 40px 20px;
            gap: 32px;
          }
        }
      `}</style>
    </footer>;
};