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

export function formatTipPosts(tips, {
  sortByDate = true
} = {}) {
  // filter for future use
  const filteredPosts = tips.filter(() => true)

  // sortByDate or randomize
  if (sortByDate) {
    filteredPosts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
  } else {
    filteredPosts.sort(() => Math.random() - 0.5)
  }

  return filteredPosts

}

export function createBuildDate () {
  const date = new Date()
  return `${date.getFullYear()}${date.getMonth()}${date.getDate()}${date.getHours()}${date.getMinutes()}`
}
