let leaderboardArr = []

const insertIntoLeaderboard = (leaderboard, player) => {
    let index = 0

    while (index < leaderboard.length && leaderboard[index].score >= player.score) {
        index++
    }

    leaderboard.splice(index, 0, player)
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
