/**
 * - 어느날, 여러분들은 튼튼한 계란이 출시되었다는 소식을 듣게됩니다.
 * - 계란이 얼마나 튼튼한지 궁금한 여러분들은 빌딩의 각 층에서 계란을 떨어뜨려,
 * - 몇층까지 계란이 깨지지 않는지를 확인하려고 합니다.
 *
 * - 지금 여러분은 k개의 계란을 가지고, n층 짜리 건물 앞에 있습니다.
 * - 계란이 몇 층까지 깨지지 않는지 확인하려면 최소한 계란을 몇번 떨어뜨려 보아야 할까요?
 *
 *
 * - 조건
 * 1. x층 에서 계란을 떨어뜨렸을 때 깨지지 않았다면, 계란은 항상 x층 보다 낮은 층에서 깨지지 않습니다.
 * 2. x층 에서 계란을 떨어뜨렸을 때 깨졌다면, 계란은 항상 x층 보다 높은 층에서 깨집니다.
 * 3. 한 번 깨진 계란은 다시 사용할 수 없습니다.
 */

/**
 *
 * @param {*} floors
 * @param {*} eggs
 *
 * 계란 K개, 층 N층
 * - eggDrop(N, K)
 *
 * 임의의 x층을 선택해 떨어 뜨립니다. 1 ~ N
 *
 * - 깨질 때
 *   eggDrop(N - 1, k - 1)
 * - 안 깨질 때
 *   eggDrop(N - X, k)
 *
 * - Max(eggDrop(N - 1, k - 1), eggDrop(N - X, k)) + 1
 *
 * 1층 선택
 * Max(eggDrop(N - 1, k - 1), eggDrop(N - 1, k)) + 1
 * 2층 선택
 * Max(eggDrop(N - 1, k - 1), eggDrop(N - 2, k)) + 1
 * ...
 *
 *
 * N층 선택
 * Max(eggDrop(N - 1, k - 1), eggDrop(N - N, k)) + 1
 *
 * Min(for 1 ~ N층 까지 임의로 선택)
 *   Max(eggDrop(N - 1, k - 1), eggDrop(N - X, k)) + 1
 *
 * - eggDrop(1, K) === 1, eggDrop(N, 1) === N, eggDrop(0, K) === 0, eggDrop(N, 0) === 0
 */

const eggDrop = (floors, eggs) => {
  const memo = []

  for (let i = 0; i < floors + 1; i++) {
    memo[i] = new Array(eggs + 1)
  }

  for (let floor = 0; floor <= floors; floor++) {
    // Traverse through all eggs
    for (let egg = 0; egg <= eggs; egg++) {
      // Case where no drops are necessary
      if (floor == 0 || egg == 0) {
        memo[floor][egg] = 0
      } else if (floor == 1) {
        memo[floor][egg] = 1
      } else if (egg == 1) {
        memo[floor][egg] = floor
      } else {
        memo[floor][egg] = Number.MAX_SAFE_INTEGER

        for (let x = 1; x <= floor; x++) {
          const egg_break = memo[x - 1][egg - 1]

          const egg_not_break = memo[floor - x][egg]

          const drops = Math.max(egg_break, egg_not_break) + 1

          if (drops < memo[floor][egg]) {
            memo[floor][egg] = drops
          }
        }
      }
    }
  }
  console.log(memo)
  return memo[floors][eggs]
}

module.exports = { eggDrop }
