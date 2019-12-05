const { search } = require('./search.js')

describe('search', () => {
  let randomArr = []

  beforeEach(() => {
    let i

    for (i = 0; i < 30; i++) {
      randomArr.push(Math.floor(Math.random() * 100))
    }

    randomArr.sort((a, b) => {
      return a - b
    })
  })

  afterEach(() => {
    randomArr = []
  })

  test('빈 array일 경우 false를 return 합니다.', () => {
    expect(search([], 1)).toBe(false)
  })

  test('array에 찾는 값이 있을 경우 true를 return 합니다.', () => {
    randomArr.forEach(el => {
      expect(search(randomArr, el)).toBe(true)
    })
  })

  test('array에 찾는 값이 없을 경우 false를 return 합니다.', () => {
    let numSearch
    let i

    for (i = 0; i < 30; i++) {
      numSearch = Math.floor(Math.random() * 100)

      if (randomArr.indexOf(numSearch) === -1) {
        expect(search(randomArr, numSearch)).toBe(false)
      }
    }
  })
})
