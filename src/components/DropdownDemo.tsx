import { useState, useRef } from 'react';
import { useOnClickOutside } from '../hooks';
import type { MenuItem } from '../types';

export const DropdownDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const menuItems: MenuItem[] = [
    { id: '1', label: 'Profil', icon: '👤', action: () => setSelectedItem('Profil') },
    { id: '2', label: 'Paramètres', icon: '⚙️', action: () => setSelectedItem('Paramètres') },
    { id: '3', label: 'Messages', icon: '💬', action: () => setSelectedItem('Messages') },
    { id: '4', label: 'Notifications', icon: '🔔', action: () => setSelectedItem('Notifications') },
    { id: '5', label: 'Aide', icon: '❓', action: () => setSelectedItem('Aide') },
    { id: '6', label: 'Déconnexion', icon: '🚪', action: () => setSelectedItem('Déconnexion') },
  ];

  useOnClickOutside(dropdownRef, () => {
    setIsOpen(false);
  });

  const handleItemClick = (item: MenuItem) => {
    item.action();
    setIsOpen(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Dropdown Menu
      </h3>

      <div className="space-y-6">
        {/* Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white rounded-lg font-bold flex items-center justify-between transition-all shadow-lg"
          >
            <span>Menu utilisateur</span>
            <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden animate-scale-in z-10">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className="w-full px-6 py-4 flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-semibold text-gray-800 dark:text-white">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Selected Item Display */}
        {selectedItem && (
          <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg animate-scale-in">
            <div className="font-semibold text-green-800 dark:text-green-300">
              ✓ Action sélectionnée : {selectedItem}
            </div>
          </div>
        )}

        <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <p className="text-sm text-blue-700 dark:text-blue-400">
            💡 Cliquez sur le bouton pour ouvrir le menu. Cliquez dehors ou appuyez sur Échap pour fermer.
          </p>
        </div>
      </div>
    </div>
  );
};