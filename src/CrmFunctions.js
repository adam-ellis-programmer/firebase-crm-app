export function getCustomerRating(amountSpent, rating) {
  while (amountSpent > 0) {
    if (amountSpent >= 100) {
      rating++
      amountSpent -= 100

      if (rating >= 5) {
        rating = 5
      }
    } else {
      break
    }
  }
  return rating
}

export function getPointsEarned(amountSpent, points) {
  while (amountSpent > 0) {
    if (amountSpent >= 100) {
      points += 10
      amountSpent -= 100
    } else {
      break
    }
  }
  return points
}

export function getPointsEarned1(amountSpent) {
  const pointsPerHundred = 1 // Assuming 1 point for every $100 spent
  return Math.floor(amountSpent / 100) * pointsPerHundred
}

export function getRating(amountSpent) {
  const ratingPerTwelveHundred = 1 // 1 rating point for every $500 spent
  return Math.floor(amountSpent / 500) * ratingPerTwelveHundred
}
