import { useState, useRef } from 'react';
import { useOnClickOutside } from '../hooks';

export const ModalDemo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef, () => {
    setIsModalOpen(false);
  });

  const handleSubmit = () => {
    alert(`Formulaire soumis !\nNom: ${formData.name}\nEmail: ${formData.email}`);
    setIsModalOpen(false);
    setFormData({ name: '', email: '' });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Modal avec Overlay
      </h3>

      <div className="space-y-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-bold text-lg transition-all shadow-lg"
        >
          🎭 Ouvrir le Modal
        </button>

        <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">
            Fonctionnalités :
          </h4>
          <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
            <li>✓ Clic dehors pour fermer</li>
            <li>✓ Touche Échap pour fermer</li>
            <li>✓ Overlay semi-transparent</li>
            <li>✓ Animation d'entrée/sortie</li>
          </ul>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Modal Content */}
            <div
              ref={modalRef}
              className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full p-8 animate-scale-in"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Inscription
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <span className="text-2xl text-gray-500 dark:text-gray-400">×</span>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-2 border-transparent focus:border-blue-500 rounded-lg text-gray-800 dark:text-white transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-2 border-transparent focus:border-blue-500 rounded-lg text-gray-800 dark:text-white transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
                  >
                    Annuler
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="flex-1 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
                  >
                    Soumettre
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};