const decrementHP = player => player.set('hp', player.get('hp') - 1);

const isSameTeam = (player1, player2) => player1.get('team') === player2.get('team');

const punch = (player, target) => (isSameTeam(player, target) ? target : decrementHP(target));

const jobe = new Map();
jobe.set('name', 'Jobe');
jobe.set('hp', 20);
jobe.set('team', 'red');

const michael = new Map();
jobe.set('name', 'Michael');
jobe.set('hp', 20);
jobe.set('team', 'green');

console.log(punch(jobe, michael));
