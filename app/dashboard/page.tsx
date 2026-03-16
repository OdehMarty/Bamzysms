'use client';

import React from 'react';
import Link from 'next/link';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import Topbar from '@/components/dashboard/Topbar';
import WelcomeModal from '@/components/dashboard/WelcomeModal';
import {
  RiWalletLine, RiShoppingCartLine, RiAddLine,
  RiArrowRightLine, RiInboxLine, RiBankLine, RiHistoryLine,
} from 'react-icons/ri';
import { useAppStore } from '@/store/appStore';

export default function DashboardPage() {
  const { user } = useAppStore();

  return (
    <DashboardLayout>
      <WelcomeModal />
      <Topbar title="Dashboard" />

      <main style={{ padding: '20px 16px', maxWidth: 1100 }}>
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link href="/dashboard">Dashboard</Link>
          <span>/</span>
          <span>Home</span>
        </div>

        {/* Stat cards — 2 col on desktop, 1 col on mobile */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 12,
          marginBottom: 20,
        }}
          className="stat-grid"
        >
          {/* Wallet Balance */}
          <div className="stat-card" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 52, height: 52, borderRadius: 14, flexShrink: 0,
              background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7C3AED',
            }}>
              <RiWalletLine size={24} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ color: 'var(--color-text-faint)', fontSize: '0.75rem', fontWeight: 600, marginBottom: 4 }}>
                Wallet Balance
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.4rem' }}>
                ₦{user?.balance?.toLocaleString() ?? '0'}
              </div>
            </div>
            <Link href="/dashboard/fund-wallet" style={{ textDecoration: 'none', flexShrink: 0 }}>
              <button className="btn-primary" style={{ padding: '8px 14px', fontSize: '0.78rem', gap: 4 }}>
                <RiAddLine size={13} /> Recharge
              </button>
            </Link>
          </div>

          {/* Generate Virtual Account */}
          <div className="stat-card" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 52, height: 52, borderRadius: 14, flexShrink: 0,
              background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981',
            }}>
              <RiBankLine size={24} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ color: 'var(--color-text-faint)', fontSize: '0.75rem', fontWeight: 600, marginBottom: 4 }}>
                Generate Virtual Account
              </div>
              <div style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem' }}>
                Click to generate
              </div>
            </div>
            <button className="btn-primary" style={{ padding: '8px 14px', fontSize: '0.78rem', flexShrink: 0, whiteSpace: 'nowrap' }}>
              Generate Account
            </button>
          </div>

          {/* SMS Purchased */}
          <div className="stat-card" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 52, height: 52, borderRadius: 14, flexShrink: 0,
              background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F59E0B',
            }}>
              <RiShoppingCartLine size={24} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ color: 'var(--color-text-faint)', fontSize: '0.75rem', fontWeight: 600, marginBottom: 4 }}>
                SMS Purchased - Lifetime
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.4rem' }}>
                {user?.smsUnits ?? 0}
              </div>
            </div>
            <Link href="/dashboard/usa-numbers" style={{ textDecoration: 'none', flexShrink: 0 }}>
              <button className="btn-ghost" style={{ padding: '8px 12px', fontSize: '0.78rem' }}>
                <RiArrowRightLine size={16} />
              </button>
            </Link>
          </div>

          {/* Total Recharge */}
          <div className="stat-card" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 52, height: 52, borderRadius: 14, flexShrink: 0,
              background: 'var(--color-primary-dim)', border: '1px solid rgba(0,229,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)',
            }}>
              <RiHistoryLine size={24} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ color: 'var(--color-text-faint)', fontSize: '0.75rem', fontWeight: 600, marginBottom: 4 }}>
                Total Recharge
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.4rem' }}>
                ₦0
              </div>
            </div>
          </div>
        </div>

        {/* History panels */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="history-grid">
          <div className="stat-card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem' }}>
                Number Purchase History
              </h3>
              <Link href="/dashboard/numbers-history" style={{ color: 'var(--color-primary)', fontSize: '0.75rem', fontWeight: 600, textDecoration: 'none' }}>
                View All
              </Link>
            </div>
            <EmptyState message="No Recent Numbers Yet." />
          </div>

          <div className="stat-card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem' }}>
                Recent Transactions
              </h3>
              <Link href="/dashboard/transactions" style={{ color: 'var(--color-primary)', fontSize: '0.75rem', fontWeight: 600, textDecoration: 'none' }}>
                View All
              </Link>
            </div>
            <EmptyState message="No Recent Transactions Yet." />
          </div>
        </div>
      </main>

      <style>{`
        @media (max-width: 600px) {
          .stat-grid { grid-template-columns: 1fr !important; }
          .history-grid { grid-template-columns: 1fr !important; }
          main { padding: 16px 12px !important; }
        }
      `}</style>
    </DashboardLayout>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px 16px', gap: 8 }}>
      <RiInboxLine size={32} color="var(--color-text-faint)" style={{ opacity: 0.4 }} />
      <p style={{ color: 'var(--color-text-faint)', fontSize: '0.8rem' }}>{message}</p>
    </div>
  );
}