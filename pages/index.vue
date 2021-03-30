<template>
  <div>
    <loading-view v-show="loading" />
    <div v-show="!loading">
      <v-layout wrap>
        <figure class="relative">
          <img
            src="~/assets/img/top_3.jpg"
            class="headerImage"
            v-on:load="load"
          />
          <img
            src="~/assets/img/top_4.jpg"
            class="headerImage-sp"
            v-on:load="load"
          />
          <figcaption class="absolute-text">
            <p class="jpn-text">流されチェックテスト</p>
            <br />
            <p class="eng-text">Personality Diagnostic Test</p>
          </figcaption>
        </figure>
      </v-layout>
      <div class="d-flex">
        <v-divider></v-divider>
      </div>
      <div style="margin-bottom: 40px"></div>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="10" md="8">
          <div class="text-center">
            <div>
              <div class="head-text">以下の質問に正直にお答えください</div>
              <question-container />
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
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
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-align: right;
  @include mq-down() {
    font-size: 24px;
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

.head-text {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.25em;
  padding-bottom: 2em;
  @include mq-down() {
    font-size: 20px;
    letter-spacing: 0.1em;
    padding-bottom: 1em;
  }
}
</style>

<script>
export default {
  data() {
    return {
      visible: false,
      loading: true,
    };
  },
  methods: {
    handleScroll() {
      if (!this.visible) {
        var top = this.$el.getBoundingClientRect().top;
        this.visible = top < window.innerHeight + 300;
      }
    },
    load() {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
};
</script>
