import { useState } from 'react';
import { svgPlaceholder } from '../../lib/placeholders';

interface ImageWithPlaceholderProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  placeholderBg?: string;
}

export function ImageWithPlaceholder({
  src,
  alt,
  width = 600,
  height = 600,
  priority = false,
  className = '',
  placeholderBg = '#E8D5D9',
}: ImageWithPlaceholderProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  const placeholderSrc = svgPlaceholder(width, height, placeholderBg);

  if (status === 'error') {
    return (
      <img
        src={placeholderSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
  }

  return (
    <>
      {/* Placeholder shown while loading */}
      {status === 'loading' && (
        <img
          src={placeholderSrc}
          alt=""
          width={width}
          height={height}
          className={`${className} absolute inset-0`}
          aria-hidden="true"
        />
      )}

      {/* Real image with fade-in */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        className={`${className} ${status === 'loaded' ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
      />
    </>
  );
}
