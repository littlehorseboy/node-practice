const { Map } = require('immutable');

const decrementHP = player => player.set('hp', player.get('hp') - 1);

const isSameTeam = (player1, player2) => player1.get('team') === player2.get('team');

const punch = (player, target) => (isSameTeam(player, target) ? target : decrementHP(target));

const jobe = Map({
  name: 'Jobe',
  hp: 20,
  team: 'red',
});

const michael = Map({
  name: 'Michael',
  hp: 20,
  team: 'green',
});

console.log(punch(jobe, michael));
