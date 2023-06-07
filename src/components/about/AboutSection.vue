<template>
  <section class="about section" id="about">
    <h2 class="section__title">Как это работает?</h2>
    <div>
      <ul class="about__steps">
        <li class="about__step"><span class="about__step-number">1</span>Вы вводите поисковый запрос</li>
        <li class="about__step"><span class="about__step-number">2</span>При помощи магии и GitHub Api мы ищем пользователей</li>
        <li class="about__step"><span class="about__step-number">3</span>Затем фильтруем пользователей на наличие пришельцев и рептилоидов</li>
        <li class="about__step"><span class="about__step-number">4</span>Показываем вам что нашли</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped lang="scss">
.about {
  &__steps {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 70px 0 0;
  }

  &__step {
      display: flex;
      align-items: baseline;
      width: 45%;
      font-size: 26px;

      &:nth-child(even) {
        align-self: end;
      }
  }

  &__step-number {
    display: block;
    min-width: 50px;
    height: 50px;
    padding: 10px;
    margin-right: 20px;

    user-select: none;

    // background-color: var(--main_green);
    border: 1px solid var(--main_green);
    border-radius: 50%;

    text-align: center;
    font-size: 30px;
    line-height: 100%;
    font-weight: 600;
  }
}
</style>
