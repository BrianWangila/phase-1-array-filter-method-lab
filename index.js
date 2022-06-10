// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, string){
  return drivers.filter(function(drivers){
    // return drivers.toLowerCase().indexOf(string.toLowerCase()) !== -1
    return drivers.toLowerCase() === string.toLowerCase()
  })
} 
console.log(findMatching(drivers, "Bobby"))



function fuzzyMatch(drivers, letter){
  return drivers.filter(function(drivers){
    // return drivers.toLowerCase().indexOf(letter.toLowerCase()) === 0
    return drivers.toLowerCase().startsWith(letter.toLowerCase())
  })
}
console.log(fuzzyMatch(drivers, "s"))


const drivers2 = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

function matchName(drivers2, string){
  return drivers2.filter(function(drivers2){
    return drivers2["name"]=== string
  })
}
console.log(matchName(drivers2, "Bobby"))