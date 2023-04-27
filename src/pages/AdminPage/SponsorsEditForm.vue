<template>
  <form @submit.prevent="saveData">
    <div class="admin-content blur">
      <div class="admin-content-row-wrap">
        <h4 class="caption">page_header</h4>
        <div class="admin-content-row">
          <label>
            <span class="caption">title</span>
            <input type="text" placeholder="title" v-model="AboutPage.data.page_header.title" />
          </label>
          <label>
            <span class="caption">description</span>
            <textarea
              placeholder="description"
              v-model="AboutPage.data.page_header.description"
              rows="5"
            ></textarea>
          </label>
          <label>
            <span class="caption">description2</span>
            <textarea
              placeholder="description"
              v-model="AboutPage.data.page_header.description2"
              rows="5"
            ></textarea>
          </label>
        </div>
      </div>
    </div>
  </form>

  <div class="message" :class="{ active: isSaved }">Успешно сохранено</div>
  <div class="message error" :class="{ active: isErrror }">При сохранении возникла ошибка</div>
</template>

<script setup>
import { reactive, ref, isProxy, toRaw } from 'vue'
import { getPageInfo, sendPageData, updateImage } from '../../api/requests'
import Cookie from 'js-cookie'

const Sponsors = reactive({
  data: null
})

const isSaved = ref(false)
const isErrror = ref(false)

const AboutPageStatus = ref(false)

const image = reactive({
  file: null,
  id: null,
  previewLink: null
})
const changeImage = (e) => {
  console.log('wtf')
  image.file = e.target.files[0]
  image.id = 7
  image.previewLink = URL.createObjectURL(e.target.files[0])
}

if (!AboutPage.data) {
  getPageInfo('about').then((resp) => {
    AboutPage.data = resp.data.attributes
  })
}

const saveData = async () => {
  AboutPageStatus.value = true

  let rawObject = toRaw(AboutPage)

  if (rawObject) {
    if (image.file) {
      const imgData = new FormData()
      imgData.append('files', image.file)

      await updateImage(image.id, imgData, Cookie.get('token'))
        .then((resp) => {
          console.log(rawObject)
          rawObject.data.product_info.product_price_info.image = resp
        })
        .catch((err) => console.log(err))
    }

    await sendPageData(rawObject.data, 'about', Cookie.get('token'))
      .then((resp) => {
        console.log(rawObject)
        isSaved.value = true
        setTimeout(() => {
          isSaved.value = false
        }, 3000)
      })
      .catch((err) => {
        isErrror.value = true
        setTimeout(() => {
          isErrror.value = false
        }, 3000)
      })
      .finally(() => {
        AboutPageStatus.value = false
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

  &.active {
    transform: translate(-50%, 100px);
  }
}

.preview_image {
  max-width: 200px;
  margin: 20px 0;
}
</style>
