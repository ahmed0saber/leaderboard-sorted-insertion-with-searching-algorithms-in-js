let leaderboardArr = []

function insertIntoLeaderboard(leaderboard, player) {
    const newLeaderboard = []
    let inserted = false

    for (let i = 0; i < leaderboard.length; i++) {
        if (!inserted && leaderboard[i].score < player.score) {
            newLeaderboard.push(player)
            inserted = true
        }
        newLeaderboard.push(leaderboard[i])
    }

    if (!inserted) {
        newLeaderboard.push(player)
    }

    return newLeaderboard
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
