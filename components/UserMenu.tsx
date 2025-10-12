
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

export function UserMenu() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="text-white hover:underline">
        {user?.email ?? 'Guest'}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg z-10">
          <button onClick={logout} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}