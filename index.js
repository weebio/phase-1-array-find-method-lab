function superbowlWin(record){
  const foundSeason = record.find(season => season.result === "W")
  if(foundSeason){
    return foundSeason.year
  }
}