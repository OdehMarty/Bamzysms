'use client';

import React, { useEffect, useState } from 'react';
import { RiSignalTowerFill } from 'react-icons/ri';

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: '#fff',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: 20, zIndex: 9999,
    }}>
      <div style={{
        width: 64, height: 64, borderRadius: 16,
        background: 'linear-gradient(135deg, #1A73E8, #7C3AED)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 8px 32px rgba(26,115,232,0.3)',
      }}>
        <RiSignalTowerFill size={32} color="#fff" />
      </div>
      <div style={{
        fontFamily: 'Poppins, sans-serif', fontWeight: 800,
        fontSize: '1.3rem', letterSpacing: '-0.02em', color: '#111827',
      }}>
        bamzy<span style={{ color: '#1A73E8' }}>SMS</span>
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
        <div className="loader-dot" />
        <div className="loader-dot" />
        <div className="loader-dot" />
      </div>
    </div>
  );
}

