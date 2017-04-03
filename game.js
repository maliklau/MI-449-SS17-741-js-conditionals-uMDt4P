var chosenName = window.prompt('What character name do you want?')
if (chosenName === null || chosenName === undefined || chosenName === ' ' || chosenName === '') {
  chosenName = 'NoName'
}
chosenName = chosenName.trim().toLowerCase()
var decideToKeep = window.confirm('Are you sure you want to continue into this exciting game, ' + chosenName + ' ?')
if (decideToKeep === false) {
  window.alert('Good Bye, you missed out!')
}
else {
  var stringDis = 'Welcome to the adventure game, ' + chosenName
  window.alert(stringDis)
  var location = window.prompt('Where do you want your adventure to start...Saturn, the rainforest, or the underworld?')
  if (location === null || location === undefined || location === ' ' || location === '') {
    chosenName = 'earth'
  }
  location = chosenName.trim().toLowerCase()
  if (location === 'saturn') {
    window.alert('Dressed in your space suit you must navigate the gas giant planet to find the rare galactic geode.')
    var companions = window.prompt('How many companions do you want with you?')
    if (companions === null || companions === undefined || companions === ' ' || companions === '') {
      companions = '2'
    }
    var compInt = parseInt(companions)
    if (isNan(companions)) {
      compInt = 2
    }
    var randInt = parseInt(Math.random())
    if (compInt > randInt) {
      window.alert('Yay you beat the aliens to the geode')
    }
    else if (compInt < randInt){
      window.alert('Unfortunately you did not get the geode.')
    }
    else {
      window.alert('You decide to eat instead of continue to look for the geode.')
    }
  }
  else if (location === 'the rainforest') {
    window.alert('You must travle the rainforest in search of the mighty orangatang oracle to get answers about life.')
    var companions = window.prompt('How many companions do you want with you?')
    if (companions === null || companions === undefined || companions === ' ' || companions === '') {
      companions = '2'
    }
    var compInt = parseInt(companions)
    if (isNan(companions)) {
      compInt = 2
    }
    var randInt = parseInt(Math.random())
    if (compInt > randInt) {
      window.alert('You have found the oracle and will live a prosperous life.')
    }
    else if (compInt < randInt){
      window.alert('Unfortunately you did not get to the orangatang oracle and had to fight a python instead.')
    }
    else {
      window.alert('You decide to eat instead of search for answers to life.')
    }
  }
  else if (location === 'the underworld') {
    window.alert('Unfortunately you are stuck here until you find your own way out through the magic portal of white light')
    var companions = window.prompt('How many companions do you want with you?')
    if (companions === null || companions === undefined || companions === ' ' || companions === '') {
      companions = '2'
    }
    var compInt = parseInt(companions)
    if (isNan(companions)) {
      compInt = 2
    }
    var randInt = parseInt(Math.random())
    if (compInt > randInt) {
      window.alert('Yay, you discovered the exit of the underworld!')
    }
    else if (compInt < randInt){
      window.alert('Unfortunately you are wondering around in circles.')
    }
    else {
      window.alert('You decide to eat instead of continue to find a way out.')
    }
  }
  else {
    location = 'earth'
    window.alert('Did you try to create your own location? Well, now you get earth by default.')
    window.alert('You must save all the polar bears and people of Florida before global warming drowns them and their habitats.')
    var companions = window.prompt('How many companions do you want with you?')
    if (companions === null || companions === undefined || companions === ' ' || companions === '') {
      companions = '2'
    }
    var compInt = parseInt(companions)
    if (isNan(companions)) {
      compInt = 2
    }
    var randInt = Math.random()
    if (compInt > randInt) {
      window.alert('Yes! Your grandchild will know what Dinsney World is and what polar bears look like!')
    }
    else if (compInt < randInt){
      window.alert('Unfortunately, you failed.')
    }
    else {
      window.alert('You decide to eat instead of continue to stop global warming.')
    }
  }
}
window.alert('Thanks for your time! The end!')
