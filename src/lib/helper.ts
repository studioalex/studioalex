export function formatDate (date) {
  const formatDate = new Date(date).toLocaleDateString('cs-CZ', {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "UTC"
  })
  return formatDate
}

export function imagePath (name) {
  return `/assets/${name}`
}

export function createBuildDate () {
  const date = new Date()
  const env = import.meta.env.ASTRO_MODE
  return [
    env,
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, '0'),
    String(date.getDate()).padStart(2, '0'),
    date.getHours(),
    date.getMinutes()
  ].join('')
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function formatTipPosts(tips, {
  sortByDate = true,
  categoryFilter = ''
} = {}) {
  let filteredPosts = tips.filter(() => true)
  // filter by category
  if (categoryFilter.length) {
    filteredPosts = tips.filter((record) => record.data.tags.includes(categoryFilter))
  }


  // sortByDate or randomize
  if (sortByDate) {
    filteredPosts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
  } else {
    filteredPosts.sort(() => Math.random() - 0.5)
  }

  return filteredPosts

}
