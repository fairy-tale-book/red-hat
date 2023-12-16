<template>
  <main key="2">
    <header class="back-btn">
      <a href="/">
        <img src="../images/back.png" alt="" />
      </a>
    </header>

    <!-- 元素 -->
    <section class="draggable-items">
      <div v-for="item in brands" :key="item.img">
        <!-- <img :id="item.img" draggable class="draggable" :data-img="item.img" :src="`./../src/images/${item.img}.png`" /> -->
        <img :id="item.img" draggable class="draggable" :data-img="item.img" :src="getAssetsFile(`${item.img}.png`)" />

        <!-- {{ item.img }} -->
      </div>
    </section>

    <!-- 拼图 -->
    <div class="matching-pairs-container">
      <section class="matching-pairs">
        <div
          v-for="idx in totalMatchingPairs"
          :key="idx"
          :class="`matching-pair pair-${idx} droppable`"
          :data-brand="brands[idx - 1].iconName"
        >
          <!-- {{ brands[idx - 1].iconName }} -->
          <!-- <img src="../src/images/${target[0].img}.png" /> -->
        </div>
      </section>
    </div>

    <!-- 生成故事按钮 -->
    <div v-if="correct === 4" class="gen-story">
      <router-link id="gen-story-btn" to="/gen">
        <img src="../images/gen-story.png" alt="" />
      </router-link>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      brands: [
        {
          iconName: 'ele1',
          img: 'ele1',
        },
        {
          iconName: 'ele2',
          img: 'ele2-2',
        },
        {
          iconName: 'ele3',
          img: 'ele3',
        },
        {
          iconName: 'ele4',
          img: 'ele4',
        },
        {
          iconName: 'ele4',
          img: 'ele4-3',
        },
        {
          iconName: 'ele3',
          img: 'ele3-2',
        },
        {
          iconName: 'ele3',
          img: 'ele3-3',
        },
      ],
      randomDraggableBrands: [],
      totalDraggableItems: 9,
      totalMatchingPairs: 4,
      correct: 0,
      total: 0,
    };
  },
  mounted() {
    this.initiateGame();
  },
  methods: {
    getAssetsFile(url) {
      return new URL(`../images/${url}`, import.meta.url).href;
    },
    initiateGame() {
      this.randomDraggableBrands = this.generateRandomItemsArray(this.totalDraggableItems, this.brands);

      const draggableElements = document.querySelectorAll('.draggable');
      const droppableElements = document.querySelectorAll('.droppable');

      draggableElements.forEach((elem) => {
        elem.addEventListener('dragstart', this.dragStart);
      });

      droppableElements.forEach((elem) => {
        elem.addEventListener('dragenter', this.dragEnter);
        elem.addEventListener('dragover', this.dragOver);
        elem.addEventListener('dragleave', this.dragLeave);
        elem.addEventListener('drop', this.drop);
      });
    },
    dragStart(event) {
      event.dataTransfer.setData('text', event.target.id); // or "text/plain"
    },
    dragEnter(event) {
      if (
        event.target.classList &&
        event.target.classList.contains('droppable') &&
        !event.target.classList.contains('dropped')
      ) {
        event.target.classList.add('droppable-hover');
      }
    },
    dragOver(event) {
      if (
        event.target.classList &&
        event.target.classList.contains('droppable') &&
        !event.target.classList.contains('dropped')
      ) {
        event.preventDefault();
      }
    },
    dragLeave(event) {
      if (
        event.target.classList &&
        event.target.classList.contains('droppable') &&
        !event.target.classList.contains('dropped')
      ) {
        event.target.classList.remove('droppable-hover');
      }
    },
    drop(event) {
      event.preventDefault();
      event.target.classList.remove('droppable-hover');

      const draggableElementBrand = event.dataTransfer.getData('text');
      const droppableElementBrand = event.target.getAttribute('data-brand');

      const target = this.brands.filter((item) => item.img === draggableElementBrand);

      console.log(target, draggableElementBrand, 111);

      // 匹配
      const isCorrectMatching = target[0].iconName === droppableElementBrand;
      this.total++;

      // console.log(target[0], droppableElementBrand);

      // console.log(draggableElementBrand, droppableElementBrand, target);

      if (isCorrectMatching) {
        const draggableElement = document.getElementById(draggableElementBrand);

        event.target.classList.add('dropped');
        event.target.classList.add('data-img');

        draggableElement.classList.add('dragged');
        draggableElement.setAttribute('draggable', 'false');

        // console.log(draggableElement.getAttribute('data-img'), 22);

        event.target.innerHTML = `
          <img src="./src/images/${target[0].img}.png" />
        `;
        this.correct++;

        console.log('success', this.correct, this.total);

        // if (this.correct === this.totalMatchingPairs) {
        //   const genStoryELe = document.getElementById('gen-story-btn');
        //   genStoryELe.style.opacity = 1;
        //   genStoryELe.style.cursor = 'pointer';
        // }
      }
    },
    generateRandomItemsArray(n, originalArray) {
      const res = [];
      const clonedArray = [...originalArray];
      if (n > clonedArray.length) n = clonedArray.length;
      for (let i = 1; i <= n; i++) {
        const randomIndex = Math.floor(Math.random() * clonedArray.length);
        res.push(clonedArray[randomIndex]);

        clonedArray.splice(randomIndex, 1);
      }
      return res;
    },
  },
};
</script>

<style scoped>
.score {
  position: relative;
  margin: 1rem;
  font-family: monospace;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.25rem;
  transition: opacity 0.2s;
}

#play-again-btn {
  position: absolute;
  top: -0.5rem;
  left: 50%;
  display: none;
  padding: 8px 10px;
  margin-left: -50px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  letter-spacing: 0.05em;
  cursor: pointer;
  background-color: #111;
  border: 5px double #fff;
  border-radius: 14px;
  outline: none;
  opacity: 0;
  transition: opacity 0.5s, transform 0.5s, background-color 0.2s;
}

#play-again-btn:hover {
  background-color: #333;
}

#play-again-btn:active {
  background-color: #555;
}

#play-again-btn.play-again-btn-entrance {
  opacity: 1;
  transform: translateX(6rem);
}

.draggable-items {
  display: flex;
  justify-content: center;
  padding: 6px 10px;
  margin: 15px 20px 40px;
  background-color: #86b250;
  transition: opacity 0.5s;
}

.draggable {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  margin: 0 0.5rem;
  font-size: 4rem;
  font-weight: bold;
  cursor: move;
  transition: opacity 0.2s;
}

.draggable:hover {
  opacity: 0.5;
}

.matching-pairs {
  position: relative;
  display: grid;
  grid-template-areas: 'a a';
  justify-content: center;
  width: 320px;
  height: 320px;
  transition: opacity 0.5s;
}

.matching-pairs-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.matching-pair {
  position: absolute;

  /* height: 10rem;
  width: 10rem; */

  /* display: flex;
  justify-content: space-between;
  border: 2px solid var(--green); */

  width: 320px;
  height: 320px;
}

.matching-pair img {
  width: 100%;
}

.matching-pair span {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  user-select: none;
}

.pair-1 img,
.pair-4 img {
  width: auto;
  height: 100%;
}

.pair-1 {
  top: 0;
  left: 5px;
  width: 194px;
  height: 158px;
  background: url('../images/pair1.png') no-repeat;
  background-size: 100%;
}

.pair-2 {
  right: 0;
  width: 160px;
  height: 200px;
  background: url('../images/pair2.png') no-repeat;
  background-size: 100%;
}

.pair-3 {
  bottom: -115px;
  left: 5px;
  width: 160px;
  height: 100%;
  background: url('../images/pair3.png') no-repeat;
  background-size: 100%;
}

.pair-4 {
  right: 0;
  bottom: -32px;
  width: 197px;
  height: 200px;
  background: url('../images/pair4.png') no-repeat;
  background-size: 100%;
}

.label {
  width: 15rem;
}

.droppable {
  transition: 0.2s;
}

.droppable-hover {
  z-index: 999;

  /* background-color: #bee3f0; */
  transform: scale(1.1);
}

.dragged {
  cursor: default;
  user-select: none;
  opacity: 0.1;
}

.draggable.dragged:hover {
  opacity: 0.1;
}

@media (width <= 600px) {
  html {
    font-size: 14px;
  }

  #play-again-btn {
    top: -0.4rem;
  }

  #play-again-btn.play-again-btn-entrance {
    transform: translateX(7rem);
  }
}

.gen-story {
  position: fixed;
  right: 3rem;
  bottom: 3rem;
}

.gen-story a {
  display: flex;
  width: 8rem;
  height: 8rem;

  /* overflow: hidden; */

  /* cursor: not-allowed; */

  /* opacity: 0; */

  /* transform: scale(.8); */
}
</style>
