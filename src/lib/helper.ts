export function formatDate (date) {
  const formatDate = new Date(date).toLocaleDateString('cs-CZ', {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  })
  return formatDate
}

export function imagePath (name) {
  return `/assets/${name}`
}
