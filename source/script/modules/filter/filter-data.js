export function filterData(data, tag) {
  if (!tag || tag === '#all') {
    return [...data];
  }

  return data.filter((item) => {
    return item.tags.includes(tag);
  })
}
