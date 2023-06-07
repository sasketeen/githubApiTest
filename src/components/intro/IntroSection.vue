<template>
  <section class="intro section">
    <div class="intro__description">
      <h1 class="intro__title">SearchHub</h1>
      <p class="intro__project-description">
        — это лучшее приложение для поиска пользователей на Github. Почему нельзя искать
        пользователей прямо на Github, спросите Вы. А я вам отвечу...откуда ж мне знать ¯\_(ツ)_/¯,
        мне сказали сделать — я сделал
        <span class="intro__postscriptum"
          >P.S. это задание является тестовым для вакансии vue-разработчик</span
        >
      </p>
    </div>
    <div>
      <a href="#search" class="link intro__link">
        Перейти к поиску
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" class="arrow-icon">
          <path
            d="M480-200 240-440l42-42 198 198 198-198 42 42-240 240Zm0-253L240-693l42-42 198 198 198-198 42 42-240 240Z"
          />
        </svg>
      </a>
    </div>
  </section>
</template>

<script setup></script>

<style scoped lang="scss">
@keyframes downArrows {
  from {
    top: 25px;
  }
  to {
    top: 40px;
  }
}

.intro {
  min-height: calc(100dvh - 80px);
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  &__title {
    display: block;
    font-size: 70px;
    background-color: var(--main_green);
    background-image: linear-gradient(90deg, var(--main_green) 10%, var(--main_violet) 87%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
  }
  &__description {
    display: flex;
    align-items: baseline;
    gap: 0.5em;
    font-size: 34px;
    max-width: 1200px;
    align-self: flex-end;
  }
  &__project-description {
    display: inline-block;
    margin: 0;
  }
  &__postscriptum {
    display: block;
    margin-top: 24px;
    font-size: 0.6em;
    font-weight: 100;
  }
  &__link {
    display: block;
    margin: 80px auto 0;
    font-size: 20px;
    position: relative;
  }

  .arrow-icon {
    position: absolute;
    left: calc((100% - 30px)/2);
    width: 30px;
    height: 30px;
    fill: currentColor;
    animation: downArrows 1.5s alternate infinite;
  }
}
</style>
