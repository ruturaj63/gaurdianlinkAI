
import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { getDashboardData } from '../services/firestoreService';
import { DashboardData } from '../types';
import { HistoryList } from './HistoryList';
import { UserMenu } from './UserMenu';
import { DashboardModal } from './DashboardModal';
import { FamilySettingsModal } from './FamilySettingsModal';
import { Spinner } from './Spinner';

export function Dashboard() {
  const { user } = useAuth();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [showDashboardModal, setShowDashboardModal] = useState(false);
  const [showFamilySettings, setShowFamilySettings] = useState(false);

  useEffect(() => {
    if (user) {
      getDashboardData(user.uid).then(setData).catch(console.error).finally(() => setLoading(false));
    }
  }, [user]);

  if (loading) return <Spinner size="lg" />;

  return (
    <div className="p-4" role="main">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Family Dashboard</h2>
        <UserMenu />
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-4 rounded shadow">Total Scans: {data?.totalScans ?? 0}</div>
        <div className="bg-white p-4 rounded shadow">Fraud Detected: {data?.fraudDetected ?? 0}</div>
      </div>
      
      {/* Chart Placeholder */}
      <div className="bg-white p-4 rounded shadow mb-4">
        <h3>Activity Chart</h3>
        <div className="h-64 bg-gray-200 flex items-center justify-center">Interactive Chart (Add Recharts for real impl)</div>
      </div>
      
      <HistoryList scans={data?.recentScans ?? []} />
      
      <button onClick={() => setShowDashboardModal(true)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        View Reports
      </button>
      <button onClick={() => setShowFamilySettings(true)} className="ml-2 bg-green-500 text-white px-4 py-2 rounded">
        Family Settings
      </button>
      
      <DashboardModal isOpen={showDashboardModal} onClose={() => setShowDashboardModal(false)} />
      <FamilySettingsModal isOpen={showFamilySettings} onClose={() => setShowFamilySettings(false)} />
    </div>
  );
}