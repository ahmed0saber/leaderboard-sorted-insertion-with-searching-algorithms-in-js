let leaderboardArr = []

const insertIntoLeaderboard = (leaderboard, player) => {
    let left = 0
    let right = leaderboard.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (leaderboard[mid].score === player.score) {
            leaderboard.splice(mid + 1, 0, player)
            return leaderboard
        } else if (leaderboard[mid].score < player.score) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    leaderboard.splice(left, 0, player)
    return leaderboard
}

leaderboardArr = insertIntoLeaderboard(leaderboardArr, {
    name: "Ahmed Saber",
    score: 50
})

leaderboardArr = insertIntoLeaderboard(leaderboardArr, {
    name: "Ahmed",
    score: 60
})

leaderboardArr = insertIntoLeaderboard(leaderboardArr, {
    name: "ahmed0saber",
    score: 40
})

leaderboardArr = insertIntoLeaderboard(leaderboardArr, {
    name: "Saber",
    score: 50
})

console.log(leaderboardArr)
