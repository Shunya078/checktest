<template>
  <div>
    <loading-view v-show="loading" />
    <div v-show="!loading">
      <v-layout wrap>
        <figure class="relative">
          <img
            src="~/assets/img/top_5.jpg"
            class="headerImage"
            v-on:load="load"
          />
          <img
            src="~/assets/img/top_6.jpg"
            class="headerImage-sp"
            v-on:load="load"
          />
          <figcaption class="absolute-text">
            <p class="jpn-text">結果発表</p>
            <br />
            <p class="eng-text">Your Personality Result</p>
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
              <div class="head-text">結果は以下の通りです</div>
              <div v-if="this.$route.params.id === '1'">
                <v-card class="mx-auto result-card">
                  <v-img
                    class="white--text align-end"
                    height="400px"
                    :src="safeImg"
                  >
                    <v-card-title class="title-text"
                      >あなたは大丈夫です</v-card-title
                    >
                  </v-img>
                  <v-card-text class="text--primary">
                    <div class="d-flex justify-center content-text">
                      自信を持って流されてください。
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="blue" text to="/"> もう一度診断する </v-btn>
                  </v-card-actions>
                </v-card>
              </div>
              <div v-else-if="this.$route.params.id === '2'">
                <v-card class="mx-auto result-card">
                  <v-img
                    class="white--text align-end"
                    height="400px"
                    :src="nutImg"
                  >
                    <v-card-title class="title-text"
                      >あなたは注意してください</v-card-title
                    >
                  </v-img>
                  <v-card-text class="text--primary">
                    <div
                      class="d-flex justify-center content-text"
                      v-text="
                        `どうしてもやりたい事なら、\nやってみても良いかもしれません。`
                      "
                    ></div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="#315850" text to="/">
                      もう一度診断する
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </div>
              <div v-else>
                <v-card class="mx-auto result-card">
                  <v-img
                    class="white--text align-end"
                    height="400px"
                    :src="dangerImg"
                  >
                    <v-card-title class="title-text"
                      >あなたは<span class="danger-text">危険</span
                      >です</v-card-title
                    >
                  </v-img>
                  <v-card-text class="text--primary">
                    <div
                      class="d-flex justify-center content-text"
                      v-text="
                        `今はタイミングじゃないので、\nやめておきましょう。`
                      "
                    ></div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="red" text to="/"> もう一度診断する </v-btn>
                  </v-card-actions>
                </v-card>
              </div>
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

.head-text {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.25em;
  padding-bottom: 2em;
  @include mq-down() {
    font-size: 20px;
    letter-spacing: 0.1em;
    padding-bottom: 2em;
  }
}

.result-card {
  margin-bottom: 64px;
}

.title-text {
  font-size: 28px;
  font-weight: 700;
}

.content-text {
  font-size: 24px;
  padding: 2em 0;
  white-space: pre-line;
  line-height: 32px;
  @include mq-down() {
    font-size: 16px;
  }
}

.danger-text {
  color: $red;
}
</style>

<script>
export default {
  data() {
    return {
      visible: false,
      loading: true,
      safeImg: require("@/assets/img/img_1.jpg"),
      nutImg: require("@/assets/img/img_2.jpg"),
      dangerImg: require("@/assets/img/img_3.jpg"),
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
