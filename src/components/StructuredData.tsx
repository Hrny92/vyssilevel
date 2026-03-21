/**
 * StructuredData — vloží JSON-LD script tag do <head>
 * Použij na každé stránce pro GEO (Generative Engine Optimization).
 *
 * Příklad použití:
 *   <StructuredData data={organizationJsonLd()} />
 *   <StructuredData data={[organizationJsonLd(), breadcrumbJsonLd([...])]} />
 */
export default function StructuredData({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
