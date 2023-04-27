<template>
  <div v-if="AboutPageStore.AboutPage">
    <PageHeader>
      <img src="/img/about-page-header.png" alt="image" />
      <h1 class="title">{{ AboutPageStore.AboutPage.page_header.title }}</h1>
      <p>
        {{ AboutPageStore.AboutPage.page_header.description }}
      </p>
      <p>
        {{ AboutPageStore.AboutPage.page_header.description2 }}
      </p>

      <v-button @click="startedModal = true">Read More</v-button>
    </PageHeader>
    <MainSponsors></MainSponsors>

    <DigitalMarketing></DigitalMarketing>

    <section class="product">
      <div class="container" style="color: #fff">
        <h2 class="title" style="color: inherit">
          {{ AboutPageStore.AboutPage.product_info.wrap_title }}
        </h2>
        <p>{{ AboutPageStore.AboutPage.product_info.wrap_desc }}</p>

        <div class="product-card">
          <div class="product-about">
            <p class="product-desc">
              {{ AboutPageStore.AboutPage.product_info.about_product }}
            </p>

            <h4 class="product-title">{{ AboutPageStore.AboutPage.product_info.about_product }}</h4>

            <div class="product-features">
              <ul class="features-list">
                <li>
                  <i class="icon-check"></i>
                  {{ AboutPageStore.AboutPage.product_info.product_features.feature1 }}
                </li>
                <li>
                  <i class="icon-check"></i>
                  {{ AboutPageStore.AboutPage.product_info.product_features.feature2 }}
                </li>
                <li>
                  <i class="icon-check"></i>
                  {{ AboutPageStore.AboutPage.product_info.product_features.feature3 }}
                </li>
                <li>
                  <i class="icon-check"></i>
                  {{ AboutPageStore.AboutPage.product_info.product_features.feature4 }}
                </li>
                <li>
                  <i class="icon-check"></i>
                  {{ AboutPageStore.AboutPage.product_info.product_features.feature5 }}
                </li>
              </ul>
              <ul class="features-list">
                <li>
                  <i class="icon-check"></i>
                  {{ AboutPageStore.AboutPage.product_info.product_features.feature6 }}
                </li>
                <li>
                  <i class="icon-check"></i>
                  {{ AboutPageStore.AboutPage.product_info.product_features.feature7 }}
                </li>
                <li>
                  <i class="icon-check"></i>
                  {{ AboutPageStore.AboutPage.product_info.product_features.feature8 }}
                </li>
                <li>
                  <i class="icon-check"></i
                  >{{ AboutPageStore.AboutPage.product_info.product_features.feature9 }}
                </li>
                <li>
                  <i class="icon-check"></i>
                  {{ AboutPageStore.AboutPage.product_info.product_features.feature10 }}
                </li>
              </ul>
            </div>
          </div>
          <div class="product-pricing">
            <img
              :src="
                AboutPageStore.AboutPage.product_info.product_price_info.image.data.attributes.url
              "
              alt="picture"
              class="avatar"
            />
            <p style="color: var(--text-color)">
              {{ AboutPageStore.AboutPage.product_info.product_price_info.quote }}
            </p>
            <h4 class="price">
              <span>$</span> {{ AboutPageStore.AboutPage.product_info.product_price_info.price }}
            </h4>
            <v-button color="secondary" @click="startedModal = true">{{
              AboutPageStore.AboutPage.product_info.product_price_info.btn_text
            }}</v-button>
            <p>{{ AboutPageStore.AboutPage.product_info.product_price_info.quote2 }}</p>
          </div>
        </div>
      </div>
    </section>

    <TicketsPricing></TicketsPricing>

    <section
      :style="{
        backgroundColor: '#f2f2f2'
      }"
    >
      <div class="container">
        <InfoWrap>
          <template #first-content>
            <div class="card-wrapper">
              <div
                class="card"
                v-for="item in AboutPageStore.AboutPage.about_stats.about_stats_items"
                :key="item.id"
              >
                <h4
                  :style="{
                    fontSize: '3.75rem',
                    color: 'var(--secondary-color)',
                    fontWeight: '700'
                  }"
                >
                  {{ item.title }}
                </h4>
                <p>{{ item.description }}.</p>
              </div>
            </div>
          </template>
          <template #second-content>
            <div class="img-wrap">
              <img src="/img/team-page-header.png" alt="picture" style="width: 80%" />
            </div>
          </template>
        </InfoWrap>
      </div>
    </section>
    <v-modal :isActive="startedModal" @closeModal="startedModal = false">
      <MessageForm bg="#f2f2f2"></MessageForm>
    </v-modal>
  </div>

  <div v-else>Loading</div>
</template>

<script setup>
import PageHeader from '@/components/shared/PageHeader.vue'
import MessageForm from '../../components/Forms/MessageForm/MessageForm.vue'
import { ref } from 'vue'
import InfoWrap from '../../components/shared/InfoWrap.vue'
import DigitalMarketing from '../../components/DigitalMarketing.vue'
import MainSponsors from '../../components/MainContent/MainSponsors.vue'
import TicketsPricing from '@/components/TicketsPricing/TicketsPricing.vue'
import { usePageStore } from '../../store/pageStore'
import { getPageInfo } from '@/api/requests.js'

const startedModal = ref(false)
const AboutPageStore = usePageStore()

if (!AboutPageStore.AboutPage) {
  getPageInfo('about').then((resp) => {
    console.log(resp)
    console.log(resp)
    AboutPageStore.changeState('AboutPage', resp.data.attributes)
  })
}
</script>

<style lang="scss" scoped>
.img-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.card-wrapper {
  padding: 60px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  .card {
    flex-basis: 32%;
    flex-grow: 1;
    display: flex;
    align-self: center;
    flex-direction: column;
    gap: 20px;
    background-color: var(--light-color);
    box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.15);
    border-radius: var(--border-radius);
    padding: 20px;
    text-align: center;

    .icon {
      font-size: 24px;
    }

    h4 {
      color: var(--text-color);
      text-transform: uppercase;
      font-size: 1.25rem;
      font-weight: 500;
    }

    p {
      color: var(--text-color);
    }
  }
}

@media screen and (max-width: 500px) {
  .card-wrapper {
    grid-template-columns: repeat(1, 1fr) !important;
  }
}

.product {
  background: var(--additional-color);
  padding: 60px 0;

  text-align: center;

  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .product-card {
    background: #fff;
    color: var(--text-color) !important;
    display: flex;

    .product-about {
      padding: 30px;
      width: 70%;
      text-align: left;
      display: flex;
      flex-direction: column;
      gap: 30px;

      .product-desc {
        color: #808080;
        font-weight: 500;
        line-height: 200%;
      }

      .product-title {
        font-size: 1.875rem;
        font-weight: 400;
      }

      .product-features {
        display: flex;
        justify-content: space-between;
        padding: 50px 0;

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 15px;

          li {
            display: flex;
            align-items: center;
            gap: 10px;
          }
        }
      }
    }
    .product-pricing {
      padding: 40px;
      width: 30%;
      background: #f2f2f2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 15px;

      .price {
        font-size: 5rem;
        color: var(--primary-color);

        span {
          font-size: 3rem;
        }
      }

      p {
        color: var(--text-color);
        font-size: 1rem;
      }
      button {
        align-self: center;
      }

      .avatar {
        width: 147px;
        height: 147px;
        object-fit: cover;
        border-radius: 50%;
      }
    }
  }
}

@media (max-width: 870px) {
  .product-card {
    flex-direction: column;

    .product-about,
    .product-pricing {
      width: 100% !important;
    }
  }
}

@media (max-width: 440px) {
  .product-features {
    flex-direction: column;
    gap: 40px;
    justify-content: unset;
  }
}
</style>
