/* eslint-disable no-use-before-define */
const brands = [
  {
    iconName: 'ele1',
    img: 'ele1'
  },
  {
    iconName: 'ele2',
    img: 'ele2'
  },
  {
    iconName: 'ele3',
    img: 'ele3'
  },
  {
    iconName: 'ele4',
    img: 'ele4'
  },
  {
    iconName: 'ele5',
    img: 'ele5'
  },
  {
    iconName: 'ele6',
    img: 'ele6'
  },
  {
    iconName: 'ele1',
    img: 'elee'
  },
];
let correct = 0;
let total = 0;
const totalDraggableItems = 9;
const totalMatchingPairs = 4; // Should be <= totalDraggableItems

// const scoreSection = document.querySelector('.score');
// const correctSpan = scoreSection.querySelector('.correct');
// const totalSpan = scoreSection.querySelector('.total');
// const playAgainBtn = scoreSection.querySelector('#play-again-btn');

const draggableItems = document.querySelector('.draggable-items');
const matchingPairs = document.querySelector('.matching-pairs');
let draggableElements;
let droppableElements;

initiateGame();

function initiateGame() {
  const randomDraggableBrands = generateRandomItemsArray(totalDraggableItems, brands);

  for (const item of randomDraggableBrands) {
    draggableItems.insertAdjacentHTML('beforeend', `
      ${item.iconName}
      <img class="draggable" data-img="${item.img}" id="${item.img}" draggable src="../images/${item.img}.png" />
    `);
  }

  // Create "matching-pairs" and append to DOM
  for (let i = 0; i < totalMatchingPairs; i++) {
    matchingPairs.insertAdjacentHTML('beforeend', `
      <div class="matching-pair pair-${i+1} droppable"
        data-brand="${brands[i].iconName}"
        >
        ${brands[i].iconName}
      </div>
    `);
  }

  draggableElements = document.querySelectorAll('.draggable');
  droppableElements = document.querySelectorAll('.droppable');

  draggableElements.forEach((elem) => {
    elem.addEventListener('dragstart', dragStart);
    // elem.addEventListener("drag", drag);
    // elem.addEventListener("dragend", dragEnd);
  });

  droppableElements.forEach((elem) => {
    elem.addEventListener('dragenter', dragEnter);
    elem.addEventListener('dragover', dragOver);
    elem.addEventListener('dragleave', dragLeave);
    elem.addEventListener('drop', drop);
  });
}

// Drag and Drop Functions

// Events fired on the drag target

function dragStart(event) {
  event.dataTransfer.setData('text', event.target.id); // or "text/plain"
}

// Events fired on the drop target

function dragEnter(event) {
  if (event.target.classList && event.target.classList.contains('droppable') &&
  !event.target.classList.contains('dropped')) {
    event.target.classList.add('droppable-hover');
  }
}

function dragOver(event) {
  if (event.target.classList && event.target.classList.contains('droppable') &&
  !event.target.classList.contains('dropped')) {
    event.preventDefault();
  }
}

function dragLeave(event) {
  if (event.target.classList && event.target.classList.contains('droppable') &&
  !event.target.classList.contains('dropped')) {
    event.target.classList.remove('droppable-hover');
  }
}

function drop(event) {
  event.preventDefault();
  event.target.classList.remove('droppable-hover');

  const draggableElementBrand = event.dataTransfer.getData('text');
  const droppableElementBrand = event.target.getAttribute('data-brand');

  const target = brands.filter(item => item.img === draggableElementBrand)

  // 匹配
  const isCorrectMatching = target[0].iconName === droppableElementBrand;
  total++;


  console.log(target[0], droppableElementBrand);

  // console.log(draggableElementBrand, droppableElementBrand, target);

  if (isCorrectMatching) {
    const draggableElement = document.getElementById(draggableElementBrand);

    event.target.classList.add('dropped');
    event.target.classList.add('data-img');

    draggableElement.classList.add('dragged');
    draggableElement.setAttribute('draggable', 'false');
    console.log(draggableElement.getAttribute('data-img'), 22);

    // data-img="${item.img}"

    event.target.innerHTML = `
      <img src="../images/${target[0].img}.png" />
    `;
    correct++;

    console.log('success', correct, total);

    if(correct === totalMatchingPairs) {
      const genStoryELe = document.getElementById('gen-story-btn');
      genStoryELe.style['opacity'] = 1;
      genStoryELe.style['cursor'] = 'pointer';
    }
  }

}

// Auxiliary functions 辅助方法
function generateRandomItemsArray(n, originalArray) {
  const res = [];
  const clonedArray = [...originalArray];
  if (n > clonedArray.length) n = clonedArray.length;
  for (let i = 1; i <= n; i++) {

    const randomIndex = Math.floor(Math.random() * clonedArray.length);
     res.push(clonedArray[randomIndex]);

    clonedArray.splice(randomIndex, 1);
  }
  return res;
}
