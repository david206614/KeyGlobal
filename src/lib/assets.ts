/**
 * Resuelve rutas de assets respetando el base path (útil para GitHub Pages).
 * Ejemplo: assetUrl('/images/logo.png') → '/KeyGlobal/images/logo.png'
 */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${clean}`;
}
