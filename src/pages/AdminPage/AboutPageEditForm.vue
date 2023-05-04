<template>
  <form @submit.prevent="saveData" v-if="AboutPage.data">
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

      <div class="admin-content-row-wrap">
        <h4 class="caption">product_info</h4>
        <div class="admin-content-row">
          <label>
            <span class="caption">title</span>
            <input
              type="text"
              placeholder="title"
              v-model="AboutPage.data.product_info.wrap_title"
            />
          </label>
          <label>
            <span class="caption">description</span>
            <textarea
              placeholder="description"
              v-model="AboutPage.data.product_info.wrap_desc"
              rows="5"
            ></textarea>
          </label>
          <label>
            <span class="caption">description</span>
            <textarea
              placeholder="description"
              v-model="AboutPage.data.product_info.about_product"
              rows="5"
            ></textarea>
          </label>
          <div class="product-features">
            <label :style="{ flexDirection: 'column', gridColumn: 'span 2' }">
              <span class="caption">feature_title</span>
              <label>
                <input
                  type="text"
                  v-model="AboutPage.data.product_info.product_features.feature_title"
                />
              </label>
            </label>
            <label :style="{ flexDirection: 'column' }">
              <span class="caption">feature1</span>
              <label>
                <input
                  type="text"
                  v-model="AboutPage.data.product_info.product_features.feature1"
                />
              </label>
            </label>
            <label :style="{ flexDirection: 'column' }">
              <span class="caption">feature2</span>
              <label>
                <input
                  type="text"
                  v-model="AboutPage.data.product_info.product_features.feature2"
                />
              </label>
            </label>
            <label :style="{ flexDirection: 'column' }">
              <span class="caption">feature3</span>
              <label>
                <input
                  type="text"
                  v-model="AboutPage.data.product_info.product_features.feature3"
                />
              </label>
            </label>
            <label :style="{ flexDirection: 'column' }">
              <span class="caption">feature4</span>
              <label>
                <input
                  type="text"
                  v-model="AboutPage.data.product_info.product_features.feature4"
                />
              </label>
            </label>
            <label :style="{ flexDirection: 'column' }">
              <span class="caption">feature5</span>
              <label>
                <input
                  type="text"
                  v-model="AboutPage.data.product_info.product_features.feature5"
                />
              </label>
            </label>
            <label :style="{ flexDirection: 'column' }">
              <span class="caption">feature6</span>
              <label>
                <input
                  type="text"
                  v-model="AboutPage.data.product_info.product_features.feature6"
                />
              </label>
            </label>
            <label :style="{ flexDirection: 'column' }">
              <span class="caption">feature7</span>
              <label>
                <input
                  type="text"
                  v-model="AboutPage.data.product_info.product_features.feature7"
                />
              </label>
            </label>
            <label :style="{ flexDirection: 'column' }">
              <span class="caption">feature8</span>
              <label>
                <input
                  type="text"
                  v-model="AboutPage.data.product_info.product_features.feature8"
                />
              </label>
            </label>
            <label :style="{ flexDirection: 'column' }">
              <span class="caption">feature9</span>
              <label>
                <input
                  type="text"
                  v-model="AboutPage.data.product_info.product_features.feature9"
                />
              </label>
            </label>
            <label :style="{ flexDirection: 'column' }">
              <span class="caption">feature10</span>
              <label>
                <input
                  type="text"
                  v-model="AboutPage.data.product_info.product_features.feature10"
                />
              </label>
            </label>
          </div>

          <div class="admin-content-row-wrap">
            <h4 class="caption">product_price_info</h4>
            <div class="admin-content-row">
              <label>
                <img
                  :src="
                    image.previewLink
                      ? image.previewLink
                      : AboutPage.data.product_info.product_price_info.image?.data?.attributes?.url
                  "
                  class="preview_image"
                />
                <span class="caption">image</span>
                <input type="file" placeholder="title" @change="changeImage" />
              </label>
              <label>
                <span class="caption">quote</span>
                <input
                  type="text"
                  placeholder="title"
                  v-model="AboutPage.data.product_info.product_price_info.quote"
                />
              </label>
              <label>
                <span class="caption">price</span>
                <input
                  type="text"
                  placeholder="title"
                  v-model="AboutPage.data.product_info.product_price_info.price"
                />
              </label>
              <label>
                <span class="caption">btn_text</span>
                <input
                  type="text"
                  placeholder="title"
                  v-model="AboutPage.data.product_info.product_price_info.btn_text"
                />
              </label>
              <label>
                <span class="caption">quote2</span>
                <input
                  type="text"
                  placeholder="title"
                  v-model="AboutPage.data.product_info.product_price_info.quote2"
                />
              </label>
            </div>
          </div>
        </div>
        <div class="admin-content-row-wrap">
          <h4 class="caption">products</h4>
          <div class="admin-content-row">
            <div
              class="admin-content-row-wrap"
              v-for="(item, index) in AboutPage.data.product_info.product1"
              :key="item.id"
            >
              <h4 class="caption">
                {{ AboutPage.data.product_info.product1[index].product_title }}
              </h4>
              <div class="admin-content-row">
                <div class="product-features">
                  <label :style="{ flexDirection: 'column' }">
                    <span class="caption">product_title</span>
                    <label>
                      <input
                        type="text"
                        v-model="AboutPage.data.product_info.product1[index].product_title"
                      />
                    </label>
                  </label>
                  <label :style="{ flexDirection: 'column' }">
                    <span class="caption">product_price</span>
                    <label>
                      <input
                        type="text"
                        v-model="AboutPage.data.product_info.product1[index].product_price"
                      />
                    </label>
                  </label>
                  <label :style="{ flexDirection: 'column' }">
                    <span class="caption">product_feature</span>
                    <label>
                      <input
                        type="text"
                        v-model="AboutPage.data.product_info.product1[index].product_feature"
                      />
                    </label>
                  </label>
                  <label :style="{ flexDirection: 'column' }">
                    <span class="caption">product_feature2</span>
                    <label>
                      <input
                        type="text"
                        v-model="AboutPage.data.product_info.product1[index].product_feature2"
                      />
                    </label>
                  </label>
                  <label :style="{ flexDirection: 'column' }">
                    <span class="caption">product_feature3</span>
                    <label>
                      <input
                        type="text"
                        v-model="AboutPage.data.product_info.product1[index].product_feature3"
                      />
                    </label>
                  </label>
                  <label :style="{ flexDirection: 'column' }">
                    <span class="caption">product_feature4</span>
                    <label>
                      <input
                        type="text"
                        v-model="AboutPage.data.product_info.product1[index].product_feature4"
                      />
                    </label>
                  </label>
                  <label :style="{ flexDirection: 'column' }">
                    <span class="caption">product_feature5</span>
                    <label>
                      <input
                        type="text"
                        v-model="AboutPage.data.product_info.product1[index].product_feature5"
                      />
                    </label>
                  </label>
                  <label :style="{ flexDirection: 'column' }">
                    <span class="caption">product_btn_text</span>
                    <label>
                      <input
                        type="text"
                        v-model="AboutPage.data.product_info.product1[index].product_btn_text"
                      />
                    </label>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <v-button type="submit" :loading="AboutPageStatus">Сохранить</v-button>
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

const AboutPage = reactive({
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
    } else {
      const img = delete rawObject.data.product_info.product_price_info.image
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
