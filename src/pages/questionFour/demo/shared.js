// -- Filter By Range
const filterByValueRange = (obj, dataset) => {
    let items = []
    items = dataset.filter(val => {
      return items.push(val[obj.type] >= obj.from && val[obj.type] <= obj.to)
    })
    return items
}
// -- end

export {
    filterByValueRange
}