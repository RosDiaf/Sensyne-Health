// -- Filter By Range
const filterByValueRange = (obj, dataset) => {
    let items = []
    items = dataset.filter(val => {
      return val[obj.type] >= obj.from && val[obj.type] <= obj.to
    })
    return items
}
// -- end

// -- Extract values from array of objects
const extractValues = (arr) => {
    let dataArray = [];
    for (let i = 0; i < arr.length; i++) {
        dataArray.push(Object.values(arr[i]));
    }
    return dataArray
}
// -- end

export {
    filterByValueRange,
    extractValues
}