import { JsonLd } from "./JsonLd";

interface SchemaMarkupProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export function SchemaMarkup({ data }: SchemaMarkupProps) {
  const schemas = Array.isArray(data) ? data : [data];
  return (
    <>
      {schemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
    </>
  );
}
