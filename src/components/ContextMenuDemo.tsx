import { useState, useRef } from 'react';
import { useOnClickOutside } from '../hooks';
import type { ContextMenuPosition, MenuItem } from '../types';

export const ContextMenuDemo = () => {
  const [menuPosition, setMenuPosition] = useState<ContextMenuPosition | null>(null);
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const menuItems: MenuItem[] = [
    { id: '1', label: 'Copier', icon: '📋', action: () => setSelectedAction('Copier') },
    { id: '2', label: 'Couper', icon: '✂️', action: () => setSelectedAction('Couper') },
    { id: '3', label: 'Coller', icon: '📌', action: () => setSelectedAction('Coller') },
    { id: '4', label: 'Supprimer', icon: '🗑️', action: () => setSelectedAction('Supprimer') },
    { id: '5', label: 'Renommer', icon: '✏️', action: () => setSelectedAction('Renommer') },
    { id: '6', label: 'Propriétés', icon: 'ℹ️', action: () => setSelectedAction('Propriétés') },
  ];

  useOnClickOutside([menuRef, containerRef], () => {
    setMenuPosition(null);
  });

  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setMenuPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMenuItemClick = (item: MenuItem) => {
    item.action();
    setMenuPosition(null);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Menu Contextuel
      </h3>

      <div className="space-y-6">
        {/* Context Menu Area */}
        <div
          ref={containerRef}
          onContextMenu={handleContextMenu}
          className="h-64 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl flex items-center justify-center cursor-context-menu"
        >
          <div className="text-center">
            <div className="text-6xl mb-4">🖱️</div>
            <div className="text-xl font-bold text-gray-800 dark:text-white mb-2">
              Faites un clic droit ici
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              pour ouvrir le menu contextuel
            </div>
          </div>
        </div>

        {/* Context Menu */}
        {menuPosition && (
          <div
            ref={menuRef}
            className="fixed bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden animate-scale-in z-50"
            style={{
              top: `${menuPosition.y}px`,
              left: `${menuPosition.x}px`,
            }}
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuItemClick(item)}
                className="w-full px-6 py-3 flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-semibold text-gray-800 dark:text-white whitespace-nowrap">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Selected Action Display */}
        {selectedAction && (
          <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg animate-scale-in">
            <div className="font-semibold text-purple-800 dark:text-purple-300">
              ✓ Action sélectionnée : {selectedAction}
            </div>
          </div>
        )}

        <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
          <p className="text-sm text-green-700 dark:text-green-400">
            💡 Faites un clic droit dans la zone colorée pour ouvrir le menu contextuel.
          </p>
        </div>
      </div>
    </div>
  );
};