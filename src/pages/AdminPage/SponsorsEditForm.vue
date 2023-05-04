<template>
  <form @submit.prevent="saveData" v-if="Sponsors.data">
    <div class="admin-content">
      <div class="admin-content-row-wrap">
        <h4 class="caption">sponsors</h4>
        <div
          class="admin-content-row"
          v-for="(item, index) in Sponsors.data.sponsors"
          :key="item.id"
        >
          <label>
            <img
              :src="
                previewLinks[index] ? previewLinks[index] : item.sponsor_logo?.data?.attributes?.url
              "
              class="preview_image"
            />
            <span class="caption">image</span>
            <input
              type="file"
              placeholder="title"
              @change="changeImage($event, item.sponsor_logo.data.id, index)"
            />
          </label>
          <label>
            <span class="caption">sponsor_link</span>
            <input
              type="text"
              placeholder="link"
              v-model="Sponsors.data.sponsors[index].sponsor_link"
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
import { getPageInfo, sendPageData, updateImage } from '../../api/requests'
import Cookie from 'js-cookie'

const Sponsors = reactive({
  data: null
})

const isSaved = ref(false)
const isError = ref(false)
const isLoading = ref(false)

const image = ref([{}, {}, {}, {}, {}])
const previewLinks = ref(['', '', '', '', ''])

const changeImage = (e, id, index) => {
  image.value[index] = {
    file: e.target.files[0],
    id: id
  }
  previewLinks.value[index] = URL.createObjectURL(e.target.files[0])
}

if (!Sponsors.data) {
  getPageInfo('sponsor').then((resp) => {
    Sponsors.data = resp.data.attributes
  })
}

const saveData = async () => {
  isLoading.value = true

  let rawObject = toRaw(Sponsors)

  if (rawObject) {
    const publicImages = image.value.map((item, index) => {
      if (item.file) {
        const ImageData = new FormData()
        ImageData.append('files', item.file)

        updateImage(item.id, ImageData, Cookie.get('token')).then((resp) => {
          Sponsors.data.sponsors[index].sponsor_logo = resp
        })
      }
    })

    rawObject.data.sponsors.map((item) => {
      if (item.sponsor_logo?.data) {
        delete item.sponsor_logo
      }
    })

    await sendPageData(rawObject.data, 'sponsor', Cookie.get('token'))
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
