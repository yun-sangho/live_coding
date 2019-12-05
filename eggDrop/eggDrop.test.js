const { eggDrop } = require('./eggDrop.js')

describe('eggDrop', () => {
  // test('계란이 하나일때는 N횟수를 리턴합니다.', () => {
  //   expect(eggDrop(10, 1)).toBe(10)
  // })

  // test('층이 1층일 때는 계란 개수와 상관없이 1을 리턴한다.', () => {
  //   expect(eggDrop(1, 100)).toBe(1)
  // })

  // test('층이 0층일 때는 계란 개수와 상관없이 0을 리턴한다.', () => {
  //   expect(eggDrop(0, 100)).toBe(0)
  // })

  // test('계란이 0개일 때는, 층과 상관없이 0을 리턴한다.', () => {
  //   expect(eggDrop(100, 0)).toBe(0)
  // })

  // test('계란2개를 3층에서 떨어뜨렸을 때', () => {
  //   expect(eggDrop(3, 2)).toBe(2)
  // })

  test('5층에서 계란 2개가 있을 때', () => {
    expect(eggDrop(82, 10)).toBe(3)
  })
})
