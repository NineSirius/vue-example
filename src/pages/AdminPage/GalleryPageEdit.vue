<template>
  <form @submit.prevent="saveData" v-if="GalleryPage.data">
    <div class="admin-content">
      <h4 class="caption">gallery</h4>
      <div class="admin-content-row">
        <label>
          <span class="caption">title</span>
          <input type="text" v-model="GalleryPage.data.title" />
        </label>
        <label>
          <span class="caption">description</span>
          <textarea type="text" rows="5" v-model="GalleryPage.data.description"></textarea>
        </label>
        <label>
          <span class="caption">description2</span>
          <textarea type="text" rows="5" v-model="GalleryPage.data.description2"></textarea>
        </label>
        <label>
          <span class="caption">btn_text</span>
          <input type="text" v-model="GalleryPage.data.btn_text" />
        </label>
      </div>
      <div class="admin-content-row-wrap">
        <div
          class="admin-content-row"
          v-for="(item, index) in GalleryPage.data.gallery_images"
          :key="item.id"
        >
          <label>
            <img
              :src="
                previewLinks[index]
                  ? previewLinks[index]
                  : GalleryPage.data?.gallery_images[index].image?.data?.attributes?.url
              "
              class="preview_image"
            />
            <span class="caption">image</span>
            <input type="file" placeholder="title" @change="changeImage($event, item.id, index)" />
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

const GalleryPage = reactive({
  data: null
})

const isSaved = ref(false)
const isError = ref(false)
const isLoading = ref(false)
const imagesSended = ref(false)

const image = ref([null, null, null, null, null, null])
const previewLinks = ref(['', '', '', '', '', ''])

const changeImage = (e, id, index) => {
  image.value[index] = {
    file: e.target.files[0],
    id: id
  }
  previewLinks.value[index] = URL.createObjectURL(e.target.files[0])
}

if (!GalleryPage.data) {
  getPageInfo('gallery').then((resp) => {
    GalleryPage.data = resp.data.attributes
  })
}

const saveData = async () => {
  isLoading.value = true

  let rawObject = toRaw(GalleryPage)

  if (rawObject) {
    const publicImages = image.value.map((item, index) => {
      if (item?.file) {
        const ImageData = new FormData()
        ImageData.append('files', item.file)

        updateImage(item.id, ImageData, Cookie.get('token')).then((resp) => {
          console.log(resp)
          GalleryPage.data.gallery_images[index].image = resp
        })
      }

      if (image.value.length - 1 === index) {
        imagesSended.value = true
      }
    })

    await rawObject.data.gallery_images.map((item, index) => {
      if (item.image.data.attributes) {
        const rawImage = toRaw(image.value)
        if (rawImage[index]) {
          rawObject.data.gallery_images[index].image = rawImage[index]
        } else {
          delete rawObject.data.gallery_images[index].image
        }
      }
    })
    if (imagesSended.value) {
      await sendPageData(rawObject.data, 'gallery', Cookie.get('token'))
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
