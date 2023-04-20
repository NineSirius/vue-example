<template>
  <PageHeader>
    <img src="/img/gallery-page-header.png" alt="Header bg" class="img" />
    <h1 class="title">Gallery</h1>
    <p>
      Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. A lacus vestibulum
      sed arcu non. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Mauris pellentesque
      pulvinar pellentesque habitant morbi tristique senectus.
    </p>
    <p>
      Nec feugiat nisl pretium fusce id. Justo laoreet sit amet cursus sit amet. Porta non pulvinar
      neque laoreet suspendisse interdum consectetur libero.
    </p>

    <v-button @click="startedModal = true">Read More</v-button>
  </PageHeader>

  <v-modal :isActive="startedModal" @closeModal="startedModal = false">
    <MessageForm bg="#f2f2f2"></MessageForm>
  </v-modal>

  <div class="container gallery-wrap">
    <lightgallery :settings="{ speed: 300, plugins: [lgZoom, lgVideo] }" class="gallery">
      <a
        class="gallery-item"
        data-src="/img/gallery-pic1.jpg"
        data-download-url="/img/gallery-pic1.jpg"
      >
        <img class="img-responsive" src="/img/gallery-pic1.jpg" />
      </a>
      <a
        class="gallery-item"
        data-src="/img/gallery-pic2.jpg"
        data-download-url="/img/gallery-pic2.jpg"
      >
        <img class="img-responsive" src="/img/gallery-pic2.jpg" />
      </a>
      <a
        class="gallery-item"
        data-src="/img/gallery-pic3.jpg"
        data-download-url="/img/gallery-pic3.jpg"
      >
        <img class="img-responsive" src="/img/gallery-pic3.jpg" />
      </a>
      <a
        class="gallery-item"
        data-src="/img/gallery-pic4.jpg"
        data-download-url="/img/gallery-pic4.jpg"
      >
        <img width="200" class="img-responsive" src="/img/gallery-pic4.jpg" />
      </a>
      <a
        class="gallery-item"
        data-src="/img/gallery-pic5.jpg"
        data-download-url="/img/gallery-pic5.jpg"
      >
        <img width="200" class="img-responsive" src="/img/gallery-pic5.jpg" />
      </a>
      <a
        class="gallery-item"
        data-src="/img/gallery-pic6.jpg"
        data-download-url="/img/gallery-pic6.jpg"
      >
        <img width="200" class="img-responsive" src="/img/gallery-pic6.jpg" />
      </a>
    </lightgallery>
  </div>

  <InfoWrapItem
    title="Make your marketing more effective"
    desc="Nec feugiat nisl pretium fusce id. Justo laoreet sit amet cursus sit amet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero."
    picture="/img/info-wrap-item.png"
    bg="url('/img/main-header.jpg')"
    color="#000"
    reverse
  ></InfoWrapItem>

  <NumberContact style="background-color: var(--additional-color)"></NumberContact>
</template>

<style lang="scss" scoped>
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-zoom.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-video.css');

.gallery-wrap {
  padding: 100px 0;
}
.gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 20px;
  gap: 20px;

  .img-responsive {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.2s;

    &:hover {
      cursor: pointer;
      filter: brightness(0.7);
    }
  }
}
</style>

<script setup>
import PageHeader from '@/components/shared/PageHeader.vue'
import Lightgallery from 'lightgallery/vue'
import lgZoom from 'lightgallery/plugins/zoom'
import lgVideo from 'lightgallery/plugins/video'
import NumberContact from '@/components/shared/NumberContact.vue'
import InfoWrapItem from '../../components/InfoWrapItem.vue'

import { ref } from 'vue'
import MessageForm from '../../components/Forms/MessageForm/MessageForm.vue'

const startedModal = ref(false)

// const onInit = () => {
//   console.log('lightGallery has been initialized')
// }
// const onBeforeSlide = () => {
//   console.log('calling before slide')
// }
</script>
