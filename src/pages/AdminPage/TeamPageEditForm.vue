<template>
  <form @submit.prevent="saveData" v-if="TeamPage.data">
    <div class="admin-content">
      <div class="admin-content-row-wrap">
        <h4 class="caption">team-page</h4>
        <div class="admin-content-row">
          <label>
            <span class="caption">title</span>
            <input type="text" v-model="TeamPage.data.title" />
          </label>
          <label>
            <span class="caption">description</span>
            <input type="text" v-model="TeamPage.data.description" />
          </label>

          <label>
            <span class="caption">description2</span>
            <input type="text" v-model="TeamPage.data.description2" />
          </label>
          <label>
            <span class="caption">btn_text</span>
            <input type="text" v-model="TeamPage.data.btn_text" />
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

const TeamPage = reactive({
  data: null
})

const isSaved = ref(false)
const isError = ref(false)
const isLoading = ref(false)

if (!TeamPage.data) {
  getPageInfo('team-page').then((resp) => {
    TeamPage.data = resp.data.attributes
  })
}

const saveData = async () => {
  isLoading.value = true

  let rawObject = toRaw(TeamPage)

  if (rawObject) {
    await sendPageData(rawObject.data, 'team-page', Cookie.get('token'))
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
