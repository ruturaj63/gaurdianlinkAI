/**
 * Header Component
 * @description App header with navigation.
 * @author Member 2
 */

import { Link } from 'react-router-dom';
import { UserMenu } from './UserMenu';

export function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center" role="banner">
      <h1 className="text-2xl font-bold">Elderly Fraud Guardian</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
      </nav>
      <UserMenu />
    </header>
  );
}