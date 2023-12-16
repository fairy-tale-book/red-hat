<template>
  <main key="33">
    <header class="back-btn">
      <a href="/">
        <img src="/images/back.png" alt="" />
      </a>
    </header>

    <div v-if="loading" id="loading" class="loading">
      <h1 class="loading-text">故事生成中...</h1>
      <div class="loader">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>

    <div v-else class="my-story">
      <section>
        <!-- <p>
          {{ story }}
        </p> -->
        <p>
          奥特曼：小朋友们，今天我们要讲一个关于滑滑梯和下雨的故事。
          有一天，小刚和小朋友们在公园里玩滑滑梯。突然，天空变得阴沉，开始下雨了。小刚和小朋友们都很兴奋，他们觉得雨中的滑滑梯一定很好玩。
          但是，奥特曼告诉他们，下雨天滑滑梯很危险。因为雨水会让滑滑梯变得湿滑，容易摔倒。而且，如果雨下得很大，还可能造成地面湿滑，容易摔倒受伤。
          所以，小朋友们在下雨天玩耍时，一定要注意安全。不要在滑滑梯、游乐场等湿滑的地方玩耍，以免摔倒受伤。
        </p>

        <div class="item-1">
          <img src="/images/setting.png" alt="" />
        </div>

        <div class="item-1">
          <img src="/images/setting.png" alt="" />
        </div>
      </section>
    </div>

    <div class="fix-setting-btn">
      <img src="/images/setting.png" alt="" />
    </div>

    <img class="result" src="/images/result.png" alt="" />

    <audio v-if="mp3url" controls>
      <source :src="mp3url" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </main>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      story: '',
      mp3url: '',
    };
  },
  mounted() {
    this.getStory();
    this.getMp3();
  },
  methods: {
    getStory() {
      this.loading = true;
      const genUrl = 'https://api.thelittleredridinghood.com/story/';
      const params = {
        theme: '注意安全',
        key_words: ['滑滑梯', '下雨'],
      };
      this.postData(genUrl, params)
        .then((data) => {
          this.loading = false;
          this.story = data.story;
        })
        .catch((err) => {
          this.loading = false;
          console.log(err, 11);
        });
    },
    getMp3() {
      const params = {
        story: 'abc',
      };

      this.postData('https://api.thelittleredridinghood.com/sound-story', params).then((data) => {
        console.log(data);
        this.mp3url = data;
      });
    },
    async postData(url = '', data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    },
  },
};
</script>

<style scoped lang="scss">
main {
  position: relative;
}
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65vh;
}

.loading-text {
  position: absolute;
  top: 232px;
  color: #fff;
  font-size: 30px;
}
.loading p {
  text-align: center;
  font-size: 3rem;
}

body {
  align-items: center;
  // background: #d65b9e;
  // background: linear-gradient(45deg, #d65b9e 1%,#f699cb 22%,#ffacd9 51%,#f699cb 83%,#d65b9e 100%);
  display: flex;
  justify-content: center;
}

$dot-count: 26;
$dot-size: 10px;
$dot-space: 15px;
$dot-start: (($dot-count / 2 + 1) * ($dot-size + $dot-space)) / 2;

$animation-time: 2s;
$animation-distance: 25px;

.loader {
  position: relative;

  .dot {
    animation-name: movement;
    animation-duration: $animation-time;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    height: $dot-size;
    position: absolute;
    top: -#{$dot-size};
    transform: translate3d(0, -#{$animation-distance}, 0) scale(1);
    width: $dot-size;

    @for $i from 1 through $dot-count {
      $dot-move: ceil($i / 2);
      $dot-pos: $dot-start - (($dot-size + $dot-space) * $dot-move);

      $animation-delay: -#{$i * 0.1}s;
      @if $i % 2 == 0 {
        $animation-delay: -#{($i * 0.1) + ($animation-time / 2)};
      }

      &:nth-of-type(#{$i}) {
        animation-delay: $animation-delay;
        left: $dot-pos;

        &::before {
          animation-delay: $animation-delay;
        }
      }
    }

    &::before {
      animation-name: size-opacity;
      animation-duration: $animation-time;
      animation-iteration-count: infinite;
      animation-timing-function: ease;
      background: white;
      border-radius: 50%;
      content: '';
      display: block;
      height: 100%;
      width: 100%;
    }

    &:nth-of-type(even)::before {
      background-color: #ff47aa;
      box-shadow: inset 0 0 4px darken(#ff47aa, 10%);
    }
  }
}

@keyframes movement {
  0% {
    transform: translate3d(0, -#{$animation-distance}, 0);
    z-index: 0;
  }
  50% {
    transform: translate3d(0, #{$animation-distance}, 0);
    z-index: 10;
  }
  100% {
    transform: translate3d(0, -#{$animation-distance}, 0);
    z-index: -5;
  }
}

@keyframes size-opacity {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  25% {
    transform: scale(1.5);
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0.35;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.my-story {
  width: 95%;
  background-color: #dcf1c0;
  color: #87b250;
  padding: 15px 20px;
  border-radius: 10px;
  margin: 20px;
  position: fixed;
  bottom: 50px;

  p {
    font-size: 16px;
  }

  section {
    display: grid;
    grid-template-columns: 1fr 100px 100px;
  }
}

.fix-setting-btn {
  width: 100px;
  position: fixed;
  right: 0;
  top: 4px;
}

.result {
  position: fixed;
  top: 0;
  z-index: -1;
  height: 100%;
}
</style>
