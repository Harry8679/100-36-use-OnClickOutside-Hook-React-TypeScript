import { useState, useRef } from 'react';
import { useOnClickOutside } from '../hooks';

export const MultiRefDemo = () => {
  const [isActive, setIsActive] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const box1Ref = useRef<HTMLDivElement>(null);
  const box2Ref = useRef<HTMLDivElement>(null);
  const box3Ref = useRef<HTMLDivElement>(null);

  useOnClickOutside([box1Ref, box2Ref, box3Ref], () => {
    if (isActive) {
      setIsActive(false);
      setClickCount((c) => c + 1);
    }
  });

  const handleBoxClick = () => {
    setIsActive(true);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Multiple Refs Demo
      </h3>

      <div className="space-y-6">
        {/* Info */}
        <div className="p-4 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
          <p className="text-sm text-orange-700 dark:text-orange-400">
            💡 Cliquez sur l'une des trois boîtes pour les activer. Cliquez en dehors de toutes les boîtes pour les désactiver.
          </p>
        </div>

        {/* Boxes */}
        <div className="grid grid-cols-3 gap-4">
          <div
            ref={box1Ref}
            onClick={handleBoxClick}
            className={`p-8 rounded-xl cursor-pointer transition-all ${
              isActive
                ? 'bg-gradient-to-br from-red-500 to-pink-600 scale-105 shadow-xl'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            <div className="text-center">
              <div className={`text-4xl mb-2 ${isActive ? 'animate-bounce' : ''}`}>
                🔴
              </div>
              <div className={`font-bold text-sm ${isActive ? 'text-white' : 'text-gray-800 dark:text-white'}`}>
                Boîte 1
              </div>
            </div>
          </div>

          <div
            ref={box2Ref}
            onClick={handleBoxClick}
            className={`p-8 rounded-xl cursor-pointer transition-all ${
              isActive
                ? 'bg-gradient-to-br from-green-500 to-teal-600 scale-105 shadow-xl'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            <div className="text-center">
              <div className={`text-4xl mb-2 ${isActive ? 'animate-bounce' : ''}`}>
                🟢
              </div>
              <div className={`font-bold text-sm ${isActive ? 'text-white' : 'text-gray-800 dark:text-white'}`}>
                Boîte 2
              </div>
            </div>
          </div>

          <div
            ref={box3Ref}
            onClick={handleBoxClick}
            className={`p-8 rounded-xl cursor-pointer transition-all ${
              isActive
                ? 'bg-gradient-to-br from-blue-500 to-purple-600 scale-105 shadow-xl'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            <div className="text-center">
              <div className={`text-4xl mb-2 ${isActive ? 'animate-bounce' : ''}`}>
                🔵
              </div>
              <div className={`font-bold text-sm ${isActive ? 'text-white' : 'text-gray-800 dark:text-white'}`}>
                Boîte 3
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
              isActive
                ? 'text-green-600 dark:text-green-400'
                : 'text-gray-600 dark:text-gray-400'
            }`}>
              {isActive ? 'Actif' : 'Inactif'}
            </div>
          </div>

          <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg text-center">
            <div className="text-sm text-purple-700 dark:text-purple-400 mb-1">
              Désactivations
            </div>
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-300">
              {clickCount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};