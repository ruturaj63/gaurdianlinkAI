
import { ScanResult } from '../types';
import { ResultCard } from './ResultCard';

interface HistoryListProps {
  scans: ScanResult[];
}

export function HistoryList({ scans }: HistoryListProps) {
  return (
    <div className="bg-white p-4 rounded shadow" role="list">
      <h3 className="text-lg font-semibold mb-2">Recent Scans</h3>
      {scans.length ? (
        <ul className="space-y-4">
          {scans.map((scan) => (
            <li key={scan.id}>
              <ResultCard result={scan} onEmergency={() => {}} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No scans yet.</p>
      )}
    </div>
  );
}