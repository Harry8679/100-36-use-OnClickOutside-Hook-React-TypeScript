import { useState, useRef } from 'react';
import { useOnClickOutside } from '../hooks';

export const BasicClickOutsideDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(boxRef, () => {
    if (isOpen) {
      setIsOpen(false);
      setClickCount((c) => c + 1);
    }
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Click Outside Basique
      </h3>

      <div className="space-y-6">
        {/* Target Box */}
        <div className="flex items-center justify-center min-h-[300px] bg-gray-100 dark:bg-gray-700/50 rounded-xl p-8">
          <div
            ref={boxRef}
            onClick={() => setIsOpen(true)}
            className={`p-8 rounded-xl cursor-pointer transition-all ${
              isOpen
                ? 'bg-gradient-to-br from-blue-500 to-purple-600 scale-110 shadow-2xl'
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
            }`}
          >
            <div className="text-center">
              <div className={`text-4xl mb-4 ${isOpen ? 'animate-bounce' : ''}`}>
                {isOpen ? '🎯' : '📦'}
              </div>
              <div className={`font-bold ${isOpen ? 'text-white' : 'text-gray-800 dark:text-white'}`}>
                {isOpen ? 'Cliquez dehors pour fermer' : 'Cliquez pour ouvrir'}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg text-center">
            <div className="text-sm text-blue-700 dark:text-blue-400 mb-1">
              État
            </div>
            <div className={`text-2xl font-bold ${
              isOpen
                ? 'text-green-600 dark:text-green-400'
                : 'text-gray-600 dark:text-gray-400'
            }`}>
              {isOpen ? 'Ouvert' : 'Fermé'}
            </div>
          </div>

          <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg text-center">
            <div className="text-sm text-purple-700 dark:text-purple-400 mb-1">
              Clics dehors
            </div>
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-300">
              {clickCount}
            </div>
          </div>
        </div>

        <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
          <p className="text-sm text-green-700 dark:text-green-400">
            💡 Cliquez sur la boîte pour l'ouvrir, puis cliquez n'importe où ailleurs pour la fermer. La touche Échap fonctionne aussi !
          </p>
        </div>
      </div>
    </div>
  );
};