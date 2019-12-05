/**
 * array에 어떤 값이 있는지 없는지 찾기!
 */

const search = (array, searchValue) => {
  let middle = Math.floor(array.length / 2)
  // 없다는것은 무엇인가? what is upda
  // element가 하나밖에 없는 어레이에서 그 element가 search value랑 다른면
  if (!array.length) {
    return false
  }
  if (array[middle] === searchValue) {
    return true
  }
  if (array.length === 1 && array[0] !== searchValue) {
    return false
  }
  if (array[middle] < searchValue) {
    return search(array.slice(middle + 1), searchValue)
  }
  if (array[middle] > searchValue) {
    // [0, 1, 2, 3, 4]
    return search(array.slice(0, middle), searchValue)
  }
}

module.exports = { search }
