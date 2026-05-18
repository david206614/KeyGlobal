import type { View } from '../types';

export function pathToView(path: string): View {
  if (path === '/catalog') return 'catalog';
  return 'home';
}

export function viewToPath(view: View): string {
  if (view === 'catalog') return '/catalog';
  return '/';
}
