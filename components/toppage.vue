<template>
  <v-layout wrap>
    <figure class="relative">
      <img src="~/assets/img/top_3.jpg" class="headerImage" />
      <img src="~/assets/img/top_4.jpg" class="headerImage-sp" />
      <figcaption class="absolute-text">
        <p class="jpn-text">性格診断テスト</p>
        <br />
        <p class="eng-text">Personality diagnostic test</p>
      </figcaption>
    </figure>
  </v-layout>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/_imports.scss";

.headerImage {
  width: 100%;
  height: auto;
  opacity: 1;
  @include mq-down() {
    display: none;
  }
}

.headerImage-sp {
  width: 100%;
  height: auto;
  opacity: 1;
  @include mq-up() {
    display: none;
  }
  @include mq-down() {
    display: relative;
  }
}

.relative {
  position: relative;
}
.absolute-text {
  position: absolute;
  right: 0;
  bottom: 150px;
  color: #fff;
  background: rgba(0, 0, 0, 0.25);
  width: 50%;
  padding: 2em 1em 1em 0;
  line-height: 24px;
  @include mq-down() {
    bottom: 0;
    width: 100%;
    line-height: 20px;
    padding: 2em 0 0.5em 0;
  }
}
.jpn-text {
  margin: 0;
  padding: 0 0.8em;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-align: right;
  @include mq-down() {
    font-size: 28px;
  }
}
.eng-text {
  margin: 0;
  padding: 0 2em;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.5em;
  text-align: right;
}
</style>
