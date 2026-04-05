// Types pour click outside - AUCUN ANY

export interface MenuItem {
  id: string;
  label: string;
  icon: string;
  action: () => void;
}

export interface ContextMenuPosition {
  x: number;
  y: number;
}

export interface ColorPalette {
  id: string;
  name: string;
  colors: string[];
}