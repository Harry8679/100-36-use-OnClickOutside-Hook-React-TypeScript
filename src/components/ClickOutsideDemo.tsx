import { BasicClickOutsideDemo } from './BasicClickOutsideDemo';
import { ModalDemo } from './ModalDemo';
import { DropdownDemo } from './DropdownDemo';
import { ContextMenuDemo } from './ContextMenuDemo';
import { ColorPickerDemo } from './ColorPickerDemo';
import { PopoverDemo } from './PopoverDemo';
import { MultiRefDemo } from './MultiRefDemo';

export const ClickOutsideDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            🎯 useOnClickOutside Hook
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
            Projet 36/100 • Click Outside Detection
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Détection des clics en dehors d'un élément avec support Escape
          </p>
        </div>

        {/* Demos */}
        <div className="space-y-8">
          {/* Row 1 */}
          <div className="grid lg:grid-cols-2 gap-8">
            <BasicClickOutsideDemo />
            <ModalDemo />
          </div>

          {/* Row 2 */}
          <div className="grid lg:grid-cols-2 gap-8">
            <DropdownDemo />
            <ContextMenuDemo />
          </div>

          {/* Row 3 */}
          <div className="grid lg:grid-cols-2 gap-8">
            <ColorPickerDemo />
            <PopoverDemo />
          </div>

          {/* Row 4 */}
          <MultiRefDemo />

          {/* Features */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              ✨ Fonctionnalités
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Click Outside</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Détection automatique
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Escape Key</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Support touche Échap
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Multiple Refs</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Plusieurs éléments
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Touch Support</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Mobile-friendly
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Modals</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Fenêtres modales
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Dropdowns</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Menus déroulants
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Context Menu</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Menu contextuel
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Type-Safe</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    100% TypeScript
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Code Examples */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              💻 Exemples d'utilisation
            </h2>

            <div className="space-y-6">
              {/* Basic Usage */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Utilisation basique :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`import { useOnClickOutside } from './hooks';

const [isOpen, setIsOpen] = useState(false);
const ref = useRef<HTMLDivElement>(null);

useOnClickOutside(ref, () => {
  setIsOpen(false);
});

return (
  <div ref={ref}>
    {/* Contenu qui se ferme au clic dehors */}
  </div>
);`}
                </pre>
              </div>

              {/* Modal */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Modal avec overlay :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const [isModalOpen, setIsModalOpen] = useState(false);
const modalRef = useRef<HTMLDivElement>(null);

useOnClickOutside(modalRef, () => {
  setIsModalOpen(false);
});

return (
  <>
    {isModalOpen && (
      <div className="fixed inset-0 flex items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Modal */}
        <div ref={modalRef} className="relative bg-white rounded-xl p-8">
          <h2>Mon Modal</h2>
          {/* Contenu du modal */}
        </div>
      </div>
    )}
  </>
);`}
                </pre>
              </div>

              {/* Dropdown */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Dropdown menu :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const [isOpen, setIsOpen] = useState(false);
const dropdownRef = useRef<HTMLDivElement>(null);

useOnClickOutside(dropdownRef, () => {
  setIsOpen(false);
});

return (
  <div className="relative" ref={dropdownRef}>
    <button onClick={() => setIsOpen(!isOpen)}>
      Menu ▼
    </button>
    
    {isOpen && (
      <div className="absolute top-full left-0 mt-2">
        {/* Menu items */}
      </div>
    )}
  </div>
);`}
                </pre>
              </div>

              {/* Multiple Refs */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Plusieurs éléments :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const buttonRef = useRef<HTMLButtonElement>(null);
const menuRef = useRef<HTMLDivElement>(null);

useOnClickOutside([buttonRef, menuRef], () => {
  setIsOpen(false);
});

return (
  <>
    <button ref={buttonRef} onClick={() => setIsOpen(true)}>
      Ouvrir
    </button>
    
    {isOpen && (
      <div ref={menuRef}>
        {/* Menu qui ne se ferme pas au clic sur le bouton */}
      </div>
    )}
  </>
);`}
                </pre>
              </div>

              {/* Context Menu */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Menu contextuel :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const [menuPosition, setMenuPosition] = useState<{x: number, y: number} | null>(null);
const menuRef = useRef<HTMLDivElement>(null);

useOnClickOutside(menuRef, () => {
  setMenuPosition(null);
});

const handleContextMenu = (e: React.MouseEvent) => {
  e.preventDefault();
  setMenuPosition({ x: e.clientX, y: e.clientY });
};

return (
  <>
    <div onContextMenu={handleContextMenu}>
      Faites un clic droit ici
    </div>
    
    {menuPosition && (
      <div
        ref={menuRef}
        style={{ top: menuPosition.y, left: menuPosition.x }}
        className="fixed"
      >
        {/* Menu items */}
      </div>
    )}
  </>
);`}
                </pre>
              </div>

              {/* With Options */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Avec options :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const [isOpen, setIsOpen] = useState(false);
const ref = useRef<HTMLDivElement>(null);

useOnClickOutside(
  ref,
  () => {
    setIsOpen(false);
  },
  {
    enabled: isOpen  // Désactiver quand fermé
  }
);

// La touche Échap ferme aussi automatiquement`}
                </pre>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">🎯 Cas d'usage courants</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>🎭</span> Modals & Overlays
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Fenêtres modales</li>
                  <li>• Dialogues de confirmation</li>
                  <li>• Lightboxes</li>
                  <li>• Drawers latéraux</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>📋</span> Menus
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Dropdowns</li>
                  <li>• Menus contextuels</li>
                  <li>• Navigation mobile</li>
                  <li>• Action menus</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>🎨</span> Pickers
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Color pickers</li>
                  <li>• Date pickers</li>
                  <li>• Emoji pickers</li>
                  <li>• File selectors</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>💬</span> Tooltips & Popovers
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Info popovers</li>
                  <li>• Help tooltips</li>
                  <li>• User cards</li>
                  <li>• Quick actions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};