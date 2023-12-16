<template>
  <main key="2">
    <header class="back-btn">
      <a href="/">
        <img src="/images/back.png" alt="" />
      </a>
    </header>

    <!-- 元素 -->
    <section class="draggable-items">
      <div v-for="item in brands" :key="item.img">
        <img :id="item.img" draggable class="draggable" :data-img="item.img" :src="`images/${item.img}.png`" />
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
        </div>
      </section>
    </div>

    <!-- 生成故事按钮 -->
    <div v-show="correct === 4" class="gen-story">
      <a id="myBtn">
        <img src="/images/gen-story.png" alt="" />
      </a>
    </div>

    <!-- The Modal -->
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <span class="close">&times;</span>
        <h1>选你喜欢的角色</h1>
        <div class="favorite-role">
          <div class="role" @click="goResult('迪迦奥特曼')">
            <img src="/images/atm.png" alt="" />
          </div>
          <div class="role" @click="goResult('艾莎')">
            <img src="/images/elsa.png" alt="" />
          </div>
        </div>
      </div>
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
          name: '毛毛虫',
        },
        {
          iconName: 'ele2',
          img: 'ele2',
          name: '孔雀',
        },
        {
          iconName: 'ele3',
          img: 'ele3',
          name: '小鸡',
        },
        {
          iconName: 'ele4',
          img: 'ele4',
          name: '小狗',
        },
        {
          iconName: 'ele4',
          img: 'ele4-3',
          name: '长颈鹿',
        },
        {
          iconName: 'ele3',
          img: 'ele3-2',
          name: '蝴蝶',
        },
        {
          iconName: 'ele1',
          img: 'ele1-1',
          name: '小鸟',
        },
        {
          iconName: 'ele2',
          img: 'ele2-1',
          name: '小猪',
        },
      ],
      randomDraggableBrands: [],
      totalDraggableItems: 9,
      totalMatchingPairs: 4,
      correct: 0,
      total: 0,
      keywords: [],
    };
  },
  mounted() {
    this.initiateGame();

    // Get the modal
    const modal = document.getElementById('myModal');

    // Get the button that opens the modal
    const btn = document.getElementById('myBtn');

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName('close')[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
      modal.style.display = 'block';
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = 'none';
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };
  },
  methods: {
    goResult(storyTeller) {
      this.$router.push({
        path: `/gen/${this.$route.params.theme}`,
        query: {
          keywords: this.keywords,
          storyTeller,
        },
      });
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

      if (isCorrectMatching) {
        const draggableElement = document.getElementById(draggableElementBrand);

        event.target.classList.add('dropped');
        event.target.classList.add('data-img');

        draggableElement.classList.add('dragged');
        draggableElement.setAttribute('draggable', 'false');

        // console.log(draggableElement.getAttribute('data-img'), 22);

        event.target.innerHTML = `
          <img src="./images/${target[0].img}.png" />
        `;
        this.correct++;

        this.keywords.push(target[0].name);

        console.log('success!!!~~~~~~~~~', this.keywords, this.correct, this.total);

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

<style scoped src="./main.less"></style>
