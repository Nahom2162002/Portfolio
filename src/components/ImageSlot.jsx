export default function ImageSlot({ src, alt, placeholder, fit = 'cover', style, className }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt || placeholder || ''}
        className={className}
        style={{ objectFit: fit, display: 'block', ...style }}
      />
    )
  }

  return (
    <div
      className={`image-slot-placeholder ${className || ''}`}
      style={style}
      role="img"
      aria-label={placeholder || 'Image placeholder'}
    >
      <span>{placeholder || 'IMAGE'}</span>
    </div>
  )
}
