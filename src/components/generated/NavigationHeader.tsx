import React, { useState, useEffect } from 'react';
interface NavigationHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  onPartners?: () => void;
  onFeatures?: () => void;
  onProcess?: () => void;
  onGetStarted?: () => void;
}
export const NavigationHeader = ({
  className,
  style,
  onPartners,
  onFeatures,
  onProcess,
  onGetStarted
}: NavigationHeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isBtnHovered, setIsBtnHovered] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (menuOpen && scrolled) setMenuOpen(false);
  }, [scrolled, menuOpen]);
  const navLinks = [{
    label: 'Partners',
    handler: onPartners
  }, {
    label: 'Features',
    handler: onFeatures
  }, {
    label: 'Process',
    handler: onProcess
  }] as any[];
  const logoSrc = scrolled || menuOpen ? '/dark-logo.svg' : '/light-logo.svg';
  const handleNavClick = (handler?: () => void) => {
    setMenuOpen(false);
    handler?.();
  };
  return <header className={`nav-header ${className || ''}`} style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 100,
    transition: 'background-color 0.35s ease, box-shadow 0.35s ease',
    backgroundColor: scrolled || menuOpen ? 'rgba(255, 255, 255, 1)' : 'transparent',
    boxShadow: scrolled ? '0 1px 0 rgba(0, 0, 0, 0.06)' : 'none',
    ...style
  }}>
      {/* Main bar */}
      <div className="nav-inner">
        {/* Logo */}
        <button onClick={() => window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })} style={{
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        flexShrink: 0
      }} aria-label="Home">
          <img src={logoSrc} alt="Logo" style={{
          width: '190px',
          height: 'auto',
          display: 'block',
          transition: 'opacity 0.35s ease'
        }} />
        </button>

        {/* Desktop nav — centered */}
        <nav aria-label="Main navigation" className="desktop-nav" style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '48px'
      }}>
          {navLinks.map(({
          label,
          handler
        }) => <button key={label} onMouseEnter={() => setHoveredItem(label)} onMouseLeave={() => setHoveredItem(null)} onClick={() => handleNavClick(handler)} style={{
          color: scrolled ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)',
          fontSize: '16px',
          fontFamily: '"DM Sans", sans-serif',
          fontWeight: 400,
          lineHeight: '24px',
          cursor: 'pointer',
          background: 'none',
          border: 'none',
          padding: 0,
          transition: 'opacity 0.2s ease, color 0.35s ease',
          opacity: hoveredItem === label ? 0.6 : 1
        }}>
              {label}
            </button>)}
        </nav>

        {/* Right side: CTA + hamburger */}
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        flexShrink: 0
      }}>
          {/* Desktop CTA */}
          <button className="desktop-cta" onMouseEnter={() => setIsBtnHovered(true)} onMouseLeave={() => setIsBtnHovered(false)} onClick={onGetStarted} aria-label="Get Started" style={{
          height: '44px',
          padding: '10px 20px',
          backgroundColor: isBtnHovered ? 'rgba(80, 240, 240, 1)' : 'rgba(103, 255, 255, 1)',
          boxSizing: 'border-box',
          borderRadius: '2px',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
          boxShadow: isBtnHovered ? '0 4px 12px rgba(103, 255, 255, 0.35)' : 'none',
          whiteSpace: 'nowrap'
        }}>
            <span style={{
            color: 'rgba(7, 73, 171, 1)',
            fontSize: '15px',
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            pointerEvents: 'none'
          }}>
              Get started
            </span>
          </button>

          {/* Hamburger — tablet/mobile */}
          <button className="hamburger-btn" onClick={() => setMenuOpen(prev => !prev)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
            <span style={{
            display: 'block',
            width: '22px',
            height: '2px',
            backgroundColor: scrolled || menuOpen ? 'rgba(0,0,0,0.85)' : '#fff',
            borderRadius: '2px',
            transition: 'transform 0.25s ease, opacity 0.25s ease',
            transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none'
          }} />
            <span style={{
            display: 'block',
            width: '22px',
            height: '2px',
            backgroundColor: scrolled || menuOpen ? 'rgba(0,0,0,0.85)' : '#fff',
            borderRadius: '2px',
            transition: 'opacity 0.25s ease',
            opacity: menuOpen ? 0 : 1
          }} />
            <span style={{
            display: 'block',
            width: '22px',
            height: '2px',
            backgroundColor: scrolled || menuOpen ? 'rgba(0,0,0,0.85)' : '#fff',
            borderRadius: '2px',
            transition: 'transform 0.25s ease, opacity 0.25s ease',
            transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none'
          }} />
          </button>
        </div>
      </div>

      {/* Mobile/Tablet dropdown menu */}
      <div className="mobile-menu" style={{
      maxHeight: menuOpen ? '320px' : '0',
      overflow: 'hidden',
      transition: 'max-height 0.35s ease',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      borderTop: menuOpen ? '1px solid rgba(0,0,0,0.06)' : 'none'
    }}>
        <nav style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '16px 24px 24px 24px',
        gap: '4px'
      }}>
          {navLinks.map(({
          label,
          handler
        }) => <button key={label} onClick={() => handleNavClick(handler)} style={{
          color: 'rgba(0, 0, 0, 0.85)',
          fontSize: '17px',
          fontFamily: '"DM Sans", sans-serif',
          fontWeight: 500,
          lineHeight: '1',
          padding: '14px 0',
          textAlign: 'left',
          background: 'none',
          border: 'none',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
          cursor: 'pointer',
          width: '100%'
        }}>
              {label}
            </button>)}
          <button onClick={() => handleNavClick(onGetStarted)} style={{
          marginTop: '16px',
          height: '48px',
          backgroundColor: 'rgba(103, 255, 255, 1)',
          border: 'none',
          borderRadius: '2px',
          cursor: 'pointer',
          width: '100%',
          color: 'rgba(7, 73, 171, 1)',
          fontSize: '15px',
          fontFamily: '"DM Sans", sans-serif',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
            Get started
          </button>
        </nav>
      </div>

      <style>{`
        /* Base nav-inner layout */
        .nav-inner {
          width: 100%;
          max-width: 1440px;
          height: 80px;
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 0 70px;
          box-sizing: border-box;
          position: relative;
        }

        /* === DESKTOP (≥1200px) === */
        @media (min-width: 1200px) {
          .hamburger-btn { display: none !important; }
          .desktop-nav { display: flex !important; gap: 48px !important; }
          .desktop-cta { display: flex !important; }
          .mobile-menu { display: none !important; }
        }

        /* === LARGE TABLET (769px – 1199px): show full nav, reduce gaps === */
        @media (max-width: 1199px) and (min-width: 769px) {
          .hamburger-btn { display: none !important; }
          .desktop-nav { display: flex !important; gap: 32px !important; }
          .desktop-cta { display: flex !important; }
          .mobile-menu { display: none !important; }
          .nav-inner {
            height: 72px;
            padding: 0 40px;
          }
        }

        /* === SMALL TABLET / MOBILE (≤768px): hamburger menu === */
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .nav-inner {
            height: 64px;
            padding: 0 24px;
          }
        }
      `}</style>
    </header>;
};