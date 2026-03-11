import React from 'react';
import { HeroSection } from './HeroSection';
import { StatisticsHighlight } from './StatisticsHighlight';
import { ValuePropositionHero } from './ValuePropositionHero';
import { FeatureHighlight } from './FeatureHighlight';
import { ProcessExplainer } from './ProcessExplainer';
import { PremiumBundlePromotion } from './PremiumBundlePromotion';
import { BrandFooter } from './BrandFooter';
import { NavigationHeader } from './NavigationHeader';

/**
 * LandingPage Component
 * 
 * A high-conversion landing page specifically tailored for optical businesses
 * looking to establish an online presence. This page stacks the Hero, 
 * Statistics, Value Proposition, and Feature sections.
 */

// @component: LandingPage
export const LandingPage = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="flex flex-col w-full min-h-screen bg-white">
      {/* Sticky fixed header — transparent over hero, white on scroll */}
      <NavigationHeader onPartners={() => scrollTo('solution-section')} onFeatures={() => scrollTo('features-section')} onProcess={() => scrollTo('process-section')} onGetStarted={() => scrollTo('offer-section')} />

      {/* Hero sits beneath the fixed header */}
      <HeroSection onClaimOffer={() => scrollTo('offer-section')} onHowItWorks={() => scrollTo('process-section')} />

      {/* Social Proof & Metrics: Establishes credibility and trust */}
      <StatisticsHighlight style={{
      borderBottom: '1px solid rgba(0,0,0,0.05)'
    }} />

      {/* Value Proposition: Explains the partners and the core solution */}
      <div id="solution-section">
        <ValuePropositionHero />
      </div>

      {/* Detailed Features: Breaks down the specific tools included */}
      <div id="features-section">
        <FeatureHighlight />
      </div>

      <div id="process-section">
        <ProcessExplainer />
      </div>

      <div id="offer-section">
        <PremiumBundlePromotion />
      </div>

      <BrandFooter />
    </div>;
};