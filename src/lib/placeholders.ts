export function svgPlaceholder(width: number, height: number, bgColor = '#E8D5D9'): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect width="100%" height="100%" fill="${bgColor}"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
            font-family="system-ui" font-size="14" fill="#9B2640" opacity="0.4">
        ${width}×${height}
      </text>
    </svg>
  `.trim();
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
