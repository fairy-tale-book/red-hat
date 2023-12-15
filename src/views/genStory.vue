<template>
  <main key="33">
    <div id="loading" class="loading">
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

    <div class="my-story">
      <section>
        <p>
          总结一波我日常使用的AI工具： 1.
          写文章用Claude模型（100k上下文一次可以输出一整篇文章），背后是poe.com（付费，一个月150左右） 2.
          写代码用copilot（模型是gpt-3.5），虽然不够聪明，但能联系整个项目的workspace提供建议（付费，我的是微软送的） 3.
          问问题用GPT-4，背后是poe.com 4. 查资料用https://www.perplexity.ai/
          ，免费，他能全网搜索我需要的主题，并给出引用地址 5. 问编程相关问题除了GPT-4，还能用 https://devv.ai/
          ，免费，针对编程问题有优化
        </p>
      </section>

      <div class="phonation">
        <div class="item-1">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  mounted() {
    const genUrl = 'https://api.thelittleredridinghood.com/story/';

    const params = {
      theme: '注意安全',
      key_words: ['滑滑梯', '下雨'],
    };

    async function postData(url = '', data = {}) {
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
    }

    const loadingEle = document.getElementById('loading');

    postData(genUrl, params)
      .then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
      })
      .catch((err) => {
        console.log(err, 11);
        loadingEle.style.display = 'none';
      });
  },
};
</script>

<style scoped lang="scss">
.loading {
  position: relative;
}

.loading-text {
  position: absolute;
  display: block;
  width: 202px;
  top: -100px;
  left: -38px;
  color: #fff;
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
  width: 34rem;
  background-color: #dcf1c0;
  color: #87b250;
  padding: 15px 20px;
  border-radius: 10px;
  p {
    font-size: 1rem;
  }
}
</style>
