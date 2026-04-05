import { useState, useRef } from 'react';
import { useOnClickOutside } from '../hooks';

export const PopoverDemo = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(popoverRef, () => {
    setIsPopoverOpen(false);
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Popover / Tooltip
      </h3>

      <div className="space-y-6">
        <div className="min-h-[300px] flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8">
          {/* Popover Trigger */}
          <div className="relative" ref={popoverRef}>
            <button
              onClick={() => setIsPopoverOpen(!isPopoverOpen)}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-bold text-lg transition-all shadow-lg"
            >
              ℹ️ Plus d'infos
            </button>

            {/* Popover Content */}
            {isPopoverOpen && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 animate-scale-in">
                {/* Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-2">
                  <div className="w-4 h-4 bg-white dark:bg-gray-800 rotate-45" />
                </div>

                {/* Content */}
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                      💡 Le saviez-vous ?
                    </h4>
                    <button
                      onClick={() => setIsPopoverOpen(false)}
                      className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                    >
                      <span className="text-xl text-gray-500 dark:text-gray-400">×</span>
                    </button>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Les popovers sont parfaits pour afficher des informations contextuelles sans encombrer l'interface principale.
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-green-500">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Clic dehors pour fermer</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-green-500">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Touche Échap pour fermer</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-green-500">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Positionnement automatique</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsPopoverOpen(false)}
                    className="w-full mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
                  >
                    Compris !
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <p className="text-sm text-blue-700 dark:text-blue-400">
            💡 Cliquez sur le bouton pour afficher le popover. Cliquez dehors ou appuyez sur Échap pour fermer.
          </p>
        </div>
      </div>
    </div>
  );
};