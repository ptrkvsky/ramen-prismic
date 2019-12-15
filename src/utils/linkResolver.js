const linkResolver = doc => {
  // Pretty URLs for known types
  if (doc.type === "blog") return `/recettes/${doc.uid}`
  if (doc.type === "page") return `/${doc.uid}`
  // Fallback for other types, in case new custom types get created
  return `/doc/${doc.id}`
}

return (
  <RichText render={document.data.text_field} linkResolver={linkResolver} />
)
