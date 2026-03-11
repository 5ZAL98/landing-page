import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
interface FormData {
  fullName: string;
  businessEmail: string;
  businessPhone: string;
  company: string;
  websiteUrl: string;
}
interface FieldState {
  touched: boolean;
  error: string;
}
interface FormFieldStates {
  fullName: FieldState;
  businessEmail: FieldState;
  businessPhone: FieldState;
  company: FieldState;
  websiteUrl: FieldState;
}
const defaultFieldState = (): FieldState => ({
  touched: false,
  error: ''
});
const validateEmail = (value: string): string => {
  if (!value) return 'Email is required';
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(value)) return 'Enter a valid email address';
  return '';
};
const validatePhone = (value: string): string => {
  if (!value) return '';
  const digits = value.replace(/\D/g, '');
  if (digits.length < 7) return 'Enter a valid phone number';
  return '';
};
const validateUrl = (value: string): string => {
  if (!value) return '';
  try {
    const url = value.startsWith('http') ? value : `https://${value}`;
    new URL(url);
    return '';
  } catch {
    return 'Enter a valid URL (e.g. yourstore.com)';
  }
};
const formatPhoneNumber = (raw: string): string => {
  const digits = raw.replace(/\D/g, '').slice(0, 15);
  if (digits.length === 0) return '';
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  return `+${digits.slice(0, digits.length - 10)} (${digits.slice(-10, -7)}) ${digits.slice(-7, -4)}-${digits.slice(-4)}`;
};
export const PremiumBundlePromotion: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    businessEmail: '',
    businessPhone: '',
    company: '',
    websiteUrl: ''
  });
  const [fieldStates, setFieldStates] = useState<FormFieldStates>({
    fullName: defaultFieldState(),
    businessEmail: defaultFieldState(),
    businessPhone: defaultFieldState(),
    company: defaultFieldState(),
    websiteUrl: defaultFieldState()
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    if (name === 'businessPhone') {
      const formatted = formatPhoneNumber(value);
      setFormData(prev => ({
        ...prev,
        [name]: formatted
      }));
    } else if (name === 'websiteUrl') {
      // Strip protocol prefix for display — we'll add it on validate
      const stripped = value.replace(/^https?:\/\//i, '');
      setFormData(prev => ({
        ...prev,
        [name]: stripped
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };
  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFocusedField(null);
    let error = '';
    if (name === 'businessEmail') error = validateEmail(value);else if (name === 'businessPhone') error = validatePhone(value);else if (name === 'websiteUrl') error = validateUrl(value);else if (!value.trim()) error = 'This field is required';
    setFieldStates(prev => ({
      ...prev,
      [name]: {
        touched: true,
        error
      }
    }));
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const emailErr = validateEmail(formData.businessEmail);
    const phoneErr = validatePhone(formData.businessPhone);
    const urlErr = validateUrl(formData.websiteUrl);
    const nameErr = !formData.fullName.trim() ? 'This field is required' : '';
    const companyErr = !formData.company.trim() ? 'This field is required' : '';
    setFieldStates({
      fullName: {
        touched: true,
        error: nameErr
      },
      businessEmail: {
        touched: true,
        error: emailErr
      },
      businessPhone: {
        touched: true,
        error: phoneErr
      },
      company: {
        touched: true,
        error: companyErr
      },
      websiteUrl: {
        touched: true,
        error: urlErr
      }
    });
    if (!nameErr && !emailErr && !phoneErr && !companyErr && !urlErr) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
    }
  };
  const getFieldStyle = (name: keyof FormFieldStates): React.CSSProperties => {
    const state = fieldStates[name];
    const isFocused = focusedField === name;
    const hasError = state.touched && state.error;
    return {
      display: 'block',
      padding: '0 14px',
      height: '52px',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      border: 'none',
      boxShadow: hasError ? '0px 0px 0px 2px rgba(239, 68, 68, 0.8)' : isFocused ? '0px 0px 0px 2px rgba(103, 255, 255, 0.75)' : '0px 0px 0px 1px rgba(107, 113, 119, 1)',
      borderRadius: '4px',
      boxSizing: 'border-box',
      width: '100%',
      fontSize: '15px',
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 400,
      lineHeight: '1.4',
      color: 'rgba(0, 0, 0, 1)',
      outline: 'none',
      transition: 'box-shadow 0.18s ease'
    };
  };
  const getPrefixedFieldStyle = (name: keyof FormFieldStates): React.CSSProperties => {
    const state = fieldStates[name];
    const isFocused = focusedField === name;
    const hasError = state.touched && state.error;
    return {
      display: 'block',
      padding: '0 14px',
      height: '52px',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      border: 'none',
      boxShadow: 'none',
      boxSizing: 'border-box',
      width: '100%',
      fontSize: '15px',
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 400,
      lineHeight: '1.4',
      color: 'rgba(0, 0, 0, 1)',
      outline: 'none',
      transition: 'box-shadow 0.18s ease',
      paddingLeft: '0',
      background: 'transparent',
      borderRadius: '0 4px 4px 0'
    };
  };
  const getWrapperStyle = (name: keyof FormFieldStates): React.CSSProperties => {
    const state = fieldStates[name];
    const isFocused = focusedField === name;
    const hasError = state.touched && state.error;
    return {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      borderRadius: '4px',
      boxShadow: hasError ? '0px 0px 0px 2px rgba(239, 68, 68, 0.8)' : isFocused ? '0px 0px 0px 2px rgba(103, 255, 255, 0.75)' : '0px 0px 0px 1px rgba(107, 113, 119, 1)',
      overflow: 'hidden',
      transition: 'box-shadow 0.18s ease',
      height: '52px',
      boxSizing: 'border-box'
    };
  };
  if (submitted) {
    return <section className="pbp-section">
        <div className="pbp-inner">
          <motion.div initial={{
          opacity: 0,
          scale: 0.96
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1]
        }} style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          padding: '40px 0',
          textAlign: 'center'
        }}>
            <div style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            backgroundColor: 'rgba(103, 255, 255, 1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(7,73,171,1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 style={{
            margin: 0,
            color: '#fff',
            fontSize: '32px',
            fontWeight: 700,
            fontFamily: '"DM Sans", sans-serif'
          }}>
              <span>You're in!</span>
            </h2>
            <p style={{
            margin: 0,
            color: 'rgba(255,255,255,0.85)',
            fontSize: '16px',
            fontFamily: '"DM Sans", sans-serif',
            maxWidth: '420px',
            lineHeight: '1.6'
          }}>
              <span>We'll reach out within a day to scope your project and build your plan.</span>
            </p>
          </motion.div>
        </div>

        <style>{`
          .pbp-section {
            width: 100%;
            background-color: rgba(7, 73, 171, 1);
            box-sizing: border-box;
            overflow: hidden;
            font-family: "DM Sans", sans-serif;
          }
          .pbp-inner {
            max-width: 1300px;
            margin: 0 auto;
            padding: 80px 70px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            gap: 60px;
            box-sizing: border-box;
          }
        `}</style>
      </section>;
  }
  return <section className="pbp-section">
      <div className="pbp-inner">
        {/* Left: copy */}
        <motion.div className="pbp-left" initial={{
        opacity: 0,
        x: -40
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true,
        amount: 0.2
      }} transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1]
      }}>
          <img src="/premium.gif" alt="Premium Bundle" className="pbp-badge-img" />

          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
            <h2 className="pbp-heading">Claim the bundle</h2>
            <p style={{
            margin: 0,
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '1.6',
            fontFamily: '"DM Sans", sans-serif',
            maxWidth: '480px'
          }}>
              Book a free consultation. A ShopTrade specialist will walk you through the right setup for your store —
              with a clear plan and no obligations.
            </p>
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div className="pbp-right" initial={{
        opacity: 0,
        x: 40
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true,
        amount: 0.2
      }} transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1
      }}>
          <form onSubmit={handleSubmit} noValidate style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          width: '100%'
        }}>

            {/* Full Name */}
            <div className="pbp-field-group">
              <input type="text" name="fullName" placeholder="Full name *" value={formData.fullName} onChange={handleChange} onBlur={handleBlur} onFocus={() => setFocusedField('fullName')} autoComplete="name" required style={getFieldStyle('fullName')} />
              {fieldStates.fullName.touched && fieldStates.fullName.error && <span className="pbp-error">{fieldStates.fullName.error}</span>}
            </div>

            {/* Email + Phone row */}
            <div className="pbp-row">
              {/* Email */}
              <div className="pbp-field-group" style={{
              flex: 1,
              minWidth: 0
            }}>
                <div style={getWrapperStyle('businessEmail')}>
                  <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '12px',
                  paddingRight: '8px',
                  flexShrink: 0,
                  color: 'rgba(100,116,139,1)'
                }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <input type="email" name="businessEmail" placeholder="Business email *" value={formData.businessEmail} onChange={handleChange} onBlur={handleBlur} onFocus={() => setFocusedField('businessEmail')} autoComplete="email" inputMode="email" required style={getPrefixedFieldStyle('businessEmail')} />
                </div>
                {fieldStates.businessEmail.touched && fieldStates.businessEmail.error && <span className="pbp-error">{fieldStates.businessEmail.error}</span>}
              </div>

              {/* Phone */}
              <div className="pbp-field-group" style={{
              flex: 1,
              minWidth: 0
            }}>
                <div style={getWrapperStyle('businessPhone')}>
                  <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '12px',
                  paddingRight: '8px',
                  flexShrink: 0,
                  color: 'rgba(100,116,139,1)'
                }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <input type="tel" name="businessPhone" placeholder="(555) 000-0000" value={formData.businessPhone} onChange={handleChange} onBlur={handleBlur} onFocus={() => setFocusedField('businessPhone')} autoComplete="tel" inputMode="tel" style={getPrefixedFieldStyle('businessPhone')} />
                </div>
                {fieldStates.businessPhone.touched && fieldStates.businessPhone.error && <span className="pbp-error">{fieldStates.businessPhone.error}</span>}
              </div>
            </div>

            {/* Company */}
            <div className="pbp-field-group">
              <input type="text" name="company" placeholder="Company name *" value={formData.company} onChange={handleChange} onBlur={handleBlur} onFocus={() => setFocusedField('company')} autoComplete="organization" required style={getFieldStyle('company')} />
              {fieldStates.company.touched && fieldStates.company.error && <span className="pbp-error">{fieldStates.company.error}</span>}
            </div>

            {/* Website URL */}
            <div className="pbp-field-group">
              <div style={getWrapperStyle('websiteUrl')}>
                <div style={{
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '12px',
                paddingRight: '0',
                flexShrink: 0,
                height: '100%'
              }}>
                  <span style={{
                  fontSize: '14px',
                  fontFamily: '"DM Sans", sans-serif',
                  color: 'rgba(100,116,139,1)',
                  fontWeight: 500,
                  userSelect: 'none',
                  whiteSpace: 'nowrap',
                  paddingRight: '6px',
                  borderRight: '1px solid rgba(200,210,220,1)',
                  lineHeight: '1'
                }}>
                    https://
                  </span>
                </div>
                <input type="text" name="websiteUrl" placeholder="yourstore.com" value={formData.websiteUrl} onChange={handleChange} onBlur={handleBlur} onFocus={() => setFocusedField('websiteUrl')} autoComplete="url" inputMode="url" style={{
                ...getPrefixedFieldStyle('websiteUrl'),
                paddingLeft: '10px'
              }} />
              </div>
              {fieldStates.websiteUrl.touched && fieldStates.websiteUrl.error && <span className="pbp-error">{fieldStates.websiteUrl.error}</span>}
            </div>

            <div style={{
            marginTop: '6px'
          }}>
              <button type="submit" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{
              height: '50px',
              padding: '10px 36px',
              backgroundColor: isHovered ? 'rgba(153, 255, 255, 1)' : 'rgba(103, 255, 255, 1)',
              border: 'none',
              borderRadius: '2px',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%'
            }}>
                <span style={{
                color: 'rgba(7, 73, 171, 1)',
                fontSize: '16px',
                fontWeight: 600,
                fontFamily: '"DM Sans", sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                  claim offer
                </span>
              </button>
            </div>
          </form>

          <p style={{
          margin: '10px 0 0 0',
          color: 'rgba(255, 255, 255, 0.75)',
          fontSize: '13px',
          fontFamily: '"DM Sans", sans-serif',
          fontWeight: 400,
          lineHeight: '1.6'
        }}>
            We'll reach out within a day to scope your project and give you a plan.
          </p>
        </motion.div>
      </div>

      <style>{`
        .pbp-section {
          width: 100%;
          background-color: rgba(7, 73, 171, 1);
          box-sizing: border-box;
          overflow: hidden;
          font-family: "DM Sans", sans-serif;
        }
        .pbp-inner {
          max-width: 1300px;
          margin: 0 auto;
          padding: 80px 70px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 60px;
          box-sizing: border-box;
        }
        .pbp-left {
          flex: 1 1 420px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .pbp-badge-img {
          width: 140px;
          height: 140px;
          object-fit: cover;
        }
        .pbp-heading {
          margin: 0;
          color: rgba(255, 255, 255, 1);
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 700;
          line-height: 1.1;
          text-transform: capitalize;
        }
        .pbp-right {
          flex: 1 1 400px;
          display: flex;
          flex-direction: column;
          gap: 0;
          min-width: 0;
        }
        .pbp-row {
          display: flex;
          flex-direction: row;
          gap: 12px;
          width: 100%;
        }
        .pbp-field-group {
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 100%;
        }
        .pbp-error {
          color: rgba(253, 186, 186, 1);
          font-size: 12px;
          font-family: "DM Sans", sans-serif;
          font-weight: 400;
          line-height: 1.4;
          padding-left: 2px;
        }

        /* === LARGE TABLET (901px – 1200px) === */
        @media (max-width: 1200px) and (min-width: 901px) {
          .pbp-inner {
            padding: 64px 40px;
            gap: 48px;
          }
          .pbp-left {
            flex: 1 1 340px;
          }
          .pbp-right {
            flex: 1 1 340px;
          }
          .pbp-badge-img {
            width: 110px;
            height: 110px;
          }
        }

        /* === SMALL TABLET (769px – 900px): stack early for form usability === */
        @media (max-width: 900px) and (min-width: 769px) {
          .pbp-inner {
            flex-direction: column;
            padding: 56px 32px 64px 32px;
            gap: 40px;
            align-items: stretch;
          }
          .pbp-left {
            flex: unset;
          }
          .pbp-right {
            flex: unset;
          }
          .pbp-badge-img {
            width: 100px;
            height: 100px;
          }
        }

        /* === MOBILE (≤768px) === */
        @media (max-width: 768px) {
          .pbp-inner {
            flex-direction: column;
            padding: 48px 16px 56px 16px;
            gap: 36px;
            align-items: stretch;
          }
          .pbp-left {
            flex: unset;
          }
          .pbp-right {
            flex: unset;
            width: 100%;
          }
          .pbp-badge-img {
            width: 100px;
            height: 100px;
          }
          .pbp-row {
            flex-direction: column;
            gap: 12px;
          }
        }

        @media (max-width: 480px) {
          .pbp-inner {
            padding: 36px 12px 44px 12px;
          }
        }

        input::placeholder {
          color: rgba(160, 170, 185, 1);
          font-family: "DM Sans", sans-serif;
        }
      `}</style>
    </section>;
};