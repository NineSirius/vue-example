<template>
  <div class="container">
    <section class="sponsors">
      <article class="sponsors-item" v-for="item in SponsorsStore.Sponsors" :key="item.id">
        <a :href="item.sponsor_link" target="_blank"
          ><img :src="item.sponsor_logo.data.attributes.url" alt="First sponsor"
        /></a>
      </article>
      <!-- <article class="sponsors-item">
        <img src="/img/sponsor-item2.png" alt="Second sponsor" />
      </article>
      <article class="sponsors-item">
        <img src="/img/sponsor-item3.png" alt="Third sponsor" />
      </article>
      <article class="sponsors-item">
        <img src="/img/sponsor-item4.png" alt="Fourth sponsor" />
      </article>
      <article class="sponsors-item">
        <img src="/img/sponsor-item5.png" alt="Fifth sponsor" />
      </article> -->
    </section>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 50px 0 !important;
}
.sponsors {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;

  .sponsors-item {
    filter: opacity(0.3);
    transition: 0.2s;

    &:hover {
      cursor: pointer;
      filter: opacity(1);
    }
  }
}

@media screen and (max-width: 768px) {
  .sponsors {
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }
}

@media screen and (max-width: 420px) {
}
</style>

<script setup>
import { getPageInfo } from '../../api/requests'
import { usePageStore } from '../../store/pageStore'

const SponsorsStore = usePageStore()

if (!SponsorsStore.Sponsors) {
  getPageInfo('sponsor').then((resp) => {
    console.log(resp)
    SponsorsStore.changeState('Sponsors', resp.data.attributes.sponsors)
  })
}
</script>
