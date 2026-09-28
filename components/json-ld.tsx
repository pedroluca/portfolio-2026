// JSON-LD é dado, não código: vai num <script> nativo, com `<` escapado para não fechar a tag antes da hora
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
