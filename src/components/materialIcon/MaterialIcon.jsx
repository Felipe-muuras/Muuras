/**
 * Google Material Symbols (Outlined) icon.
 * The font is loaded globally in index.css. Size and color are controlled by
 * the parent via CSS (target `.material-symbols-outlined`). Pass `fill` for the
 * filled variant.
 *
 * Usage: <MaterialIcon name="recycling" />
 */
export default function MaterialIcon({ name, fill = false, className }) {
  return (
    <span
      className={['material-symbols-outlined', className].filter(Boolean).join(' ')}
      style={fill ? { fontVariationSettings: "'FILL' 1" } : undefined}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
