import { useState, useRef } from 'react';
import { useOnClickOutside } from '../hooks';
import type { ColorPalette } from '../types';

export const ColorPickerDemo = () => {
  const [selectedColor, setSelectedColor] = useState('#3B82F6');
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  const palettes: ColorPalette[] = [
    {
      id: '1',
      name: 'Primaires',
      colors: ['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899'],
    },
    {
      id: '2',
      name: 'Pastel',
      colors: ['#FCA5A5', '#FDE68A', '#A7F3D0', '#93C5FD', '#C4B5FD', '#F9A8D4'],
    },
    {
      id: '3',
      name: 'Sombres',
      colors: ['#7F1D1D', '#78350F', '#064E3B', '#1E3A8A', '#4C1D95', '#831843'],
    },
  ];

  useOnClickOutside(pickerRef, () => {
    setIsPickerOpen(false);
  });

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    setIsPickerOpen(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Color Picker
      </h3>

      <div className="space-y-6">
        {/* Color Display */}
        <div
          className="h-48 rounded-xl shadow-lg transition-all cursor-pointer hover:scale-105"
          style={{ backgroundColor: selectedColor }}
          onClick={() => setIsPickerOpen(!isPickerOpen)}
        />

        {/* Color Info */}
        <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Couleur sélectionnée :
            </span>
            <span className="font-mono text-lg font-bold" style={{ color: selectedColor }}>
              {selectedColor}
            </span>
          </div>
        </div>

        {/* Color Picker Button */}
        <div className="relative" ref={pickerRef}>
          <button
            onClick={() => setIsPickerOpen(!isPickerOpen)}
            className="w-full px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-lg font-bold flex items-center justify-between transition-all shadow-lg"
          >
            <span>🎨 Choisir une couleur</span>
            <span className={`transition-transform ${isPickerOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          {/* Color Picker Dropdown */}
          {isPickerOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 animate-scale-in z-10">
              {palettes.map((palette) => (
                <div key={palette.id} className="mb-6 last:mb-0">
                  <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                    {palette.name}
                  </h4>
                  <div className="grid grid-cols-6 gap-3">
                    {palette.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => handleColorSelect(color)}
                        className={`w-full aspect-square rounded-lg transition-all hover:scale-110 ${
                          selectedColor === color
                            ? 'ring-4 ring-blue-500 ring-offset-2 dark:ring-offset-gray-800'
                            : ''
                        }`}
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              ))}

              {/* Custom Color Input */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Couleur personnalisée
                </label>
                <div className="flex gap-3">
                  <input
                    type="color"
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="w-16 h-12 rounded-lg cursor-pointer border-2 border-gray-300 dark:border-gray-600"
                  />
                  <input
                    type="text"
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-700 border-2 border-transparent focus:border-blue-500 rounded-lg text-gray-800 dark:text-white font-mono transition-colors"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-pink-100 dark:bg-pink-900/20 rounded-lg">
          <p className="text-sm text-pink-700 dark:text-pink-400">
            💡 Cliquez sur le bouton ou la zone colorée pour ouvrir le sélecteur.
          </p>
        </div>
      </div>
    </div>
  );
};