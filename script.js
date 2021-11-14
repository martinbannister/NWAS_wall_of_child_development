const words = [
  'Work/ College',
  'Understanding peer group',
  'Belonging / new experiences	',
  'Hobbies, interests',
  'Special person',
  'Special person',
  'Reassurance, School',
  'Communication, affection, love',
  'Rules playmates',
  'Routine, protection',
  'Privacy, space, belonging',
  'Possessions, collections',
  'Special person',
  'Food, warmth, physical care',
  'Attention, reassurance',
  'Boundaries, security',
  'Special person',
  'Respect, communication',
  'Stimulation, affection, love',
  'Boundaries, tolerance',
  'Identity, money, recognition',
  'Responsibility for actions',
  'Sexuality, independence',
  'Special person',
  'Friends, school',
  'Encouragement, independence',
  'Rewards, play'
];

function addBricks() {
  document.getElementById('top');
  let wall = document.querySelectorAll('#top .wall');
  wall.forEach((space, i) => {
    let brick = document.createElement('div');
    brick.id = `brick${i}`;
    brick.textContent = words[i];
    brick.classList.add('brick');
    brick.setAttribute('draggable', 'true');
    brick.addEventListener('dragstart', drag);
    space.append(brick);
  });
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData('text', ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(data));
}

const walls = document.querySelectorAll('.wall, .bottom_wall');
walls.forEach((space) => {
  space.addEventListener('drop', drop);
  space.addEventListener('dragover', allowDrop);
});

addBricks();