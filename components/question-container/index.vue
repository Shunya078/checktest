<template>
  <div class="d-flex flex-column">
    <v-form ref="form">
      <div class="flex-grow-1 main-view">
        <v-window v-model="step">
          <template v-for="(f, i) of forms">
            <v-window-item :key="i">
              <template v-if="f.title === '新しい環境に関して'">
                <div class="d-flex align-start title-text">{{ f.title }}</div>
                <template v-for="(c, j) of f.contents">
                  <div :key="j">
                    <div class="content-text">{{ c.text }}</div>
                    <div class="d-flex justify-space-around checkbox-wrapper">
                      <v-checkbox
                        v-model="selectedValues"
                        @change="onChange('yes', c.id)"
                        label="はい"
                        color="#315850"
                        :value="c.id"
                        :rules="validateCheckbox"
                        hide-details
                      ></v-checkbox>
                      <v-checkbox
                        v-model="selectedValues"
                        @change="onChange('no', c.id)"
                        label="いいえ"
                        color="#315850"
                        :value="Number(c.id) + 100"
                        :rules="validateCheckbox"
                        hide-details
                      ></v-checkbox>
                    </div>
                    <v-divider></v-divider>
                  </div>
                </template>
              </template>
              <template v-else-if="f.title === '紹介してくれた人に関して'">
                <div class="d-flex align-start title-text">{{ f.title }}</div>
                <template v-for="(c, j) of f.contents">
                  <div :key="j">
                    <div class="content-text">{{ c.text }}</div>
                    <div class="d-flex justify-space-around checkbox-wrapper">
                      <v-checkbox
                        v-model="selectedValues"
                        @change="onChange('yes', c.id)"
                        label="はい"
                        color="#315850"
                        :value="c.id"
                        :rules="validateCheckbox"
                        hide-details
                      ></v-checkbox>
                      <v-checkbox
                        v-model="selectedValues"
                        @change="onChange('no', c.id)"
                        label="いいえ"
                        color="#315850"
                        :value="Number(c.id) + 100"
                        :rules="validateCheckbox"
                        hide-details
                      ></v-checkbox>
                    </div>
                    <v-divider></v-divider>
                  </div>
                </template>
              </template>
              <template v-else-if="f.title === '今の環境に関して'">
                <div class="d-flex align-start title-text">{{ f.title }}</div>
                <template v-for="(c, j) of f.contents">
                  <div :key="j">
                    <div class="content-text">{{ c.text }}</div>
                    <div class="d-flex justify-space-around checkbox-wrapper">
                      <v-checkbox
                        v-model="selectedValues"
                        @change="onChange('yes', c.id)"
                        label="はい"
                        color="#315850"
                        :value="c.id"
                        :rules="validateCheckbox"
                        hide-details
                      ></v-checkbox>
                      <v-checkbox
                        v-model="selectedValues"
                        @change="onChange('no', c.id)"
                        label="いいえ"
                        color="#315850"
                        :value="Number(c.id) + 100"
                        :rules="validateCheckbox"
                        hide-details
                      ></v-checkbox>
                    </div>
                    <v-divider></v-divider>
                  </div>
                </template>
              </template>
              <template v-else>
                <div class="d-flex align-start title-text">{{ f.title }}</div>
                <template v-for="(c, j) of f.contents">
                  <div :key="j">
                    <div class="content-text">{{ c.text }}</div>
                    <div class="d-flex justify-space-around checkbox-wrapper">
                      <v-checkbox
                        v-model="selectedValues"
                        @change="onChange('yes', c.id)"
                        label="はい"
                        color="#315850"
                        :value="c.id"
                        :rules="validateCheckbox"
                        hide-details
                      ></v-checkbox>
                      <v-checkbox
                        v-model="selectedValues"
                        @change="onChange('no', c.id)"
                        label="いいえ"
                        color="#315850"
                        :value="Number(c.id) + 100"
                        :rules="validateCheckbox"
                        hide-details
                      ></v-checkbox>
                    </div>
                    <v-divider></v-divider>
                  </div>
                </template>
              </template>
            </v-window-item>
          </template>
        </v-window>
      </div>
      <div
        v-show="!isValid"
        class="v-messages error--text text-center error-message"
      >
        {{ validateCheckbox[0] }}
      </div>
      <div class="button-wrapper">
        <v-btn
          color="#315850"
          @click="next"
          width="144"
          height="48"
          class="button"
          >{{ nextText() }}</v-btn
        >
        <v-btn
          v-if="step !== 0"
          color="#315850"
          class="button"
          width="144"
          height="48"
          :outlined="true"
          @click="back"
          >戻る</v-btn
        >
      </div>
    </v-form>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/_imports.scss";

.main-view {
  @include flex-vertical(stretch, 12px);
}

.disabled {
  opacity: 0.4;
  pointer-events: none;
}

.title-text {
  color: $black;
  font-size: 20px;
  font-weight: 700;
  @include mq-down() {
    font-size: 16px;
    display: relative;
  }
}

.content-text {
  font-size: 16px;
  padding: 1em 0;
  white-space: pre-wrap;
  @include mq-down() {
    font-size: 14px;
  }
}

.button-wrapper {
  margin: 30px 0;
}

.button {
  color: $white;
  font-weight: 700;
  font-size: 18px;
}

.checkbox-wrapper {
  padding-bottom: 24px;
}

.error-message {
  padding: 1em;
}
</style>

<script>
export default {
  data() {
    return {
      step: 0,
      count: 0,
      selectedValues: [],
      isValid: true,
      forms: [
        {
          title: "新しい環境に関して",
          contents: [
            {
              id: 1,
              text: "新しい環境に自分と同じ\nスタートラインの人がいる",
              yes: false,
            },
            {
              id: 2,
              text: "新しい環境にどんな人がいるか知っている",
              yes: false,
            },
            {
              id: 3,
              text:
                "新しい環境で自分がどんな仕事（関わり方）\nをするのか知っている",
              yes: false,
            },
            {
              id: 4,
              text:
                "新しい環境に誘ってくれた人は自分が\nどんな仕事（関わり方）をするのか知っている",
              yes: false,
            },
            {
              id: 5,
              text: "新しい環境は今の自分では得られない学びがある",
              yes: false,
            },
            {
              id: 6,
              text: "新しい環境にワクワクする",
              yes: false,
            },
            {
              id: 7,
              text: "新しい環境の目標に共感できる",
              yes: false,
            },
          ],
        },
        {
          title: "紹介してくれた人に関して",
          contents: [
            {
              id: 8,
              text: "紹介してもらった人と普段からよく話す",
              yes: false,
            },
            {
              id: 9,
              text: "紹介してもらった人は家族や親友である",
              yes: false,
            },
            {
              id: 10,
              text: "紹介してもらった人は新しい環境で精力的に活動している",
              yes: false,
            },
          ],
        },
        {
          title: "今の環境に関して",
          contents: [
            {
              id: 11,
              text: "今の環境での仕事（関わり方）は忙しくない",
              yes: false,
            },
            {
              id: 12,
              text: "相談出来る友達がいる",
              yes: false,
            },
            {
              id: 13,
              text: "今の環境に満足していない",
              yes: false,
            },
          ],
        },
        {
          title: "自分に関して",
          contents: [
            {
              id: 14,
              text: "満足にいく生活基盤がある",
              yes: false,
            },
            {
              id: 15,
              text: "自分の信念や目標を持っている",
              yes: false,
            },
          ],
        },
      ],
    };
  },
  computed: {
    validateCheckbox() {
      return [this.selectedValues.length > 6 || "選択肢を選んでください"];
    },
  },
  watch: {
    selectedValues() {
      if (this.selectedValues.length === 0) {
        this.isValid = false;
        return;
      }
      this.isValid = true;
    },
  },
  methods: {
    next() {
      if (!this.$refs.form.validate()) {
        this.isValid = false;
        return;
      }
      if (!this.isLastStep()) {
        this.step += 1;
        return;
      }
      this.forms.forEach((e) =>
        e.contents.forEach((e) => {
          if (e.yes) {
            this.count += 1;
          }
        })
      );
      if (this.count > 5) {
        this.$router.push("/answer/1");
        return;
      }
      this.$router.push("/answer/2");
    },
    back() {
      if (this.step <= 0) {
        this.closeOrBack();
        return;
      }
      this.step -= 1;
    },
    formEl() {
      const el = this.$refs[`${this.forms[this.step].type}-form`];
      if (Array.isArray(el)) {
        return el[0];
      } else {
        return el;
      }
    },
    title() {
      return this.forms[this.step]?.title || "";
    },
    isLastStep() {
      return this.step + 1 >= this.forms.length;
    },
    nextText() {
      return this.isLastStep() ? "確認へ" : "次へ";
    },
    onChange(value, id) {
      if (id < 8) {
        if (value == "yes") {
          this.forms[0].contents[Number(id) - 1].yes = true;
        } else {
          this.forms[0].contents[Number(id) - 1].yes = false;
        }
        return;
      } else if (id < 11) {
        if (value == "yes") {
          this.forms[1].contents[Number(id) - 8].yes = true;
        } else {
          this.forms[1].contents[Number(id) - 8].yes = false;
        }
        return;
      } else if (id < 14) {
        if (value == "yes") {
          this.forms[2].contents[Number(id) - 11].yes = true;
        } else {
          this.forms[2].contents[Number(id) - 11].yes = false;
        }
        return;
      } else {
        if (value == "yes") {
          this.forms[3].contents[Number(id) - 14].yes = true;
        } else {
          this.forms[3].contents[Number(id) - 14].yes = false;
        }
      }
    },
  },
};
</script>
