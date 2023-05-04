<template>
  <form @submit.prevent="saveData" v-if="DigitalMarketing.data">
    <div class="admin-content">
      <div class="admin-content-row-wrap">
        <h4 class="caption">digital-marketing</h4>
        <div class="admin-content-row">
          <label>
            <span class="caption">title</span>
            <input type="text" v-model="DigitalMarketing.data.title" />
          </label>
          <label>
            <span class="caption">description</span>
            <input type="text" v-model="DigitalMarketing.data.description" />
          </label>
        </div>
      </div>

      <div
        class="admin-content-row-wrap"
        v-for="(item, index) in DigitalMarketing.data.digital_marketing_features"
        :key="item.id"
      >
        <h4 class="caption">{{ item.title }}</h4>
        <div class="admin-content-row">
          <label>
            <span class="caption">icon_name</span>
            <input
              type="text"
              v-model="DigitalMarketing.data.digital_marketing_features[index].icon_name"
            />
          </label>
          <label>
            <span class="caption">title</span>
            <input
              type="text"
              v-model="DigitalMarketing.data.digital_marketing_features[index].title"
            />
          </label>
          <label>
            <span class="caption">description</span>
            <input
              type="text"
              v-model="DigitalMarketing.data.digital_marketing_features[index].desc"
            />
          </label>
        </div>
      </div>

      <v-button type="submit" :loading="isLoading">Сохранить</v-button>
    </div>
  </form>

  <div class="message" :class="{ active: isSaved }">Успешно сохранено</div>
  <div class="message error" :class="{ active: isError }">При сохранении возникла ошибка</div>
</template>

<script setup>
import { reactive, ref, toRaw } from 'vue'
import { getPageInfo, sendPageData } from '../../api/requests'
import Cookie from 'js-cookie'

const DigitalMarketing = reactive({
  data: null
})

const isSaved = ref(false)
const isError = ref(false)
const isLoading = ref(false)

if (!DigitalMarketing.data) {
  getPageInfo('digital-marketing').then((resp) => {
    DigitalMarketing.data = resp.data.attributes
  })
}

const saveData = async () => {
  isLoading.value = true

  let rawObject = toRaw(DigitalMarketing)

  if (rawObject) {
    await sendPageData(rawObject.data, 'digital-marketing', Cookie.get('token'))
      .then((resp) => {
        console.log(rawObject)
        isSaved.value = true
        setTimeout(() => {
          isSaved.value = false
        }, 3000)
      })
      .catch((err) => {
        isError.value = true
        setTimeout(() => {
          isError.value = false
        }, 3000)
      })
      .finally(() => {
        isLoading.value = false
      })
  }
}
</script>

<style lang="scss" scoped>
.product-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.message {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
  background: #07b307;
  color: #fff;
  padding: 10px 15px;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  transition: 0.2s;

  &.error {
    background: #d8360d;
  }
}

.active {
  transform: translate(-50%, 100px);
}
.preview_image {
  max-width: 200px;
  margin: 20px 0;
}
</style>
