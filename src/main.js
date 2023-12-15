/* eslint-disable no-use-before-define */
const brands = [
  {
    iconName: 'ele1',
    eleName: 'Wix.com',
    color: '#333333',
    img: 'ele1'
  },
  {
    iconName: 'ele2',
    eleName: 'WordPress',
    color: '#21759b',
    img: 'ele2'
  },
  {
    iconName: 'ele3',
    eleName: 'Xbox',
    color: '#52b043',
    img: 'ele3'
  },
  {
    iconName: 'ele4',
    eleName: 'Yahoo!',
    color: '#410093',
    img: 'ele4'
  },
  {
    iconName: 'ele5',
    eleName: 'YouTube',
    color: '#ff0000',
    img: 'ele5'
  },
  {
    iconName: 'ele6',
    eleName: 'YouTube',
    color: '#ff0000',
    img: 'ele6'
  },
];
let correct = 0;
let total = 0;
const totalDraggableItems = 4;
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

  const randomDroppableBrands = totalMatchingPairs < totalDraggableItems
    ? generateRandomItemsArray(totalMatchingPairs, randomDraggableBrands) : randomDraggableBrands;

  const alphabeticallySortedRandomDroppableBrands = [...randomDroppableBrands].sort((a, b) => a.eleName.toLowerCase().localeCompare(b.eleName.toLowerCase()));


  console.log(alphabeticallySortedRandomDroppableBrands, 111);

  // <i class="fab fa-${randomDraggableBrands[i].iconName} draggable"
  //     draggable="true"
  //     style="color: ${randomDraggableBrands[i].color};"
  //     id="${randomDraggableBrands[i].iconName}"></i>
  // Create "draggable-items" and append to DOM
  // for (let i = 0; i < randomDraggableBrands.length; i++) {
  for (const item of randomDraggableBrands) {
    console.log(item, 11);
    draggableItems.insertAdjacentHTML('beforeend', `
      ${item.iconName}
      <img class="draggable" id="${item.iconName}" draggable src="../images/${item.img}.png" />
    `);
  }


  // Create "matching-pairs" and append to DOM
  for (let i = 0; i < alphabeticallySortedRandomDroppableBrands.length; i++) {
    matchingPairs.insertAdjacentHTML('beforeend', `
      <div class="matching-pair pair-${i+1} droppable"
        data-brand="${alphabeticallySortedRandomDroppableBrands[i].iconName}">
        ${alphabeticallySortedRandomDroppableBrands[i].iconName}
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

  // 匹配
  const isCorrectMatching = draggableElementBrand === droppableElementBrand;
  total++;


  console.log(draggableElementBrand, droppableElementBrand);
  if (isCorrectMatching) {
    const draggableElement = document.getElementById(draggableElementBrand);

    event.target.classList.add('dropped');
    event.target.classList.add();

    draggableElement.classList.add('dragged');
    draggableElement.setAttribute('draggable', 'false');
    // console.log(draggableElementBrand, 22);

    const target = brands.map(item => item.eleName === draggableElementBrand)
    console.log(target, 1133);
    // <i class="fab fa-${draggableElementBrand}" style="color: ${draggableElement.style.color};"></i>
    event.target.innerHTML = `
      <img src="../images/${draggableElementBrand}.png" />
    `;
    correct++;

    console.log('success', correct);
  }

  // scoreSection.style.opacity = 0;

  // setTimeout(() => {
  //   correctSpan.textContent = correct;
  //   totalSpan.textContent = total;
  //   scoreSection.style.opacity = 1;
  // }, 200);

  // if (correct === Math.min(totalMatchingPairs, totalDraggableItems)) { // Game Over!!
  //   playAgainBtn.style.display = 'block';
  //   setTimeout(() => {
  //     playAgainBtn.classList.add('play-again-btn-entrance');
  //   }, 200);
  // }
}

// Other Event Listeners
// playAgainBtn.addEventListener('click', playAgainBtnClick);
// function playAgainBtnClick() {
//   playAgainBtn.classList.remove('play-again-btn-entrance');
//   correct = 0;
//   total = 0;
//   draggableItems.style.opacity = 0;
//   matchingPairs.style.opacity = 0;
//   // setTimeout(() => {
//   //   scoreSection.style.opacity = 0;
//   // }, 100);
//   setTimeout(() => {
//     playAgainBtn.style.display = 'none';
//     while (draggableItems.firstChild) draggableItems.removeChild(draggableItems.firstChild);
//     while (matchingPairs.firstChild) matchingPairs.removeChild(matchingPairs.firstChild);
//     initiateGame();
//     // correctSpan.textContent = correct;
//     // totalSpan.textContent = total;
//     draggableItems.style.opacity = 1;
//     matchingPairs.style.opacity = 1;
//     // scoreSection.style.opacity = 1;
//   }, 500);
// }

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
