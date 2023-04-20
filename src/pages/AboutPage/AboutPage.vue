<template>
  <PageHeader>
    <img src="/img/about-page-header.png" alt="image" />
    <h1 class="title">About Us</h1>
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
  <MainSponsors></MainSponsors>

  <DigitalMarketing></DigitalMarketing>

  <section class="product">
    <div class="container" style="color: #fff">
      <h2 class="title" style="color: inherit">Discover, Explore the Product</h2>
      <p>We do not charge a percentage of the purchase price, but a fixed rate.</p>

      <div class="product-card">
        <div class="product-about">
          <p class="product-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip.
          </p>

          <h4 class="product-title">What's included? Absolutely everything.</h4>

          <div class="product-features">
            <ul class="features-list">
              <li>We arrange the valuation report</li>
              <li>Duis aute irure dolor in reprehenderit</li>
              <li>In voluptate velit esse cillum</li>
              <li>Excepteur sint occaecat cupidatat</li>
              <li>Sunt in culpa qui officia deserunt</li>
            </ul>
            <ul class="features-list">
              <li>We arrange the valuation report</li>
              <li>Duis aute irure dolor in reprehenderit</li>
              <li>In voluptate velit esse cillum</li>
              <li>Excepteur sint occaecat cupidatat</li>
              <li>Sunt in culpa qui officia deserunt</li>
            </ul>
          </div>
        </div>
        <div class="product-pricing"></div>
      </div>
    </div>
  </section>

  <section
    :style="{
      backgroundColor: '#f2f2f2'
    }"
  >
    <div class="container">
      <InfoWrap>
        <template #first-content>
          <div class="card-wrapper">
            <div class="card">
              <h4
                :style="{ fontSize: '3.75rem', color: 'var(--secondary-color)', fontWeight: '700' }"
              >
                560k
              </h4>
              <p>Sample text. Click to select the Text Element.</p>
            </div>
            <div class="card">
              <h4
                :style="{ fontSize: '3.75rem', color: 'var(--secondary-color)', fontWeight: '700' }"
              >
                79%
              </h4>
              <p>Sample text. Click to select the Text Element.</p>
            </div>
            <div class="card">
              <h4
                :style="{ fontSize: '3.75rem', color: 'var(--secondary-color)', fontWeight: '700' }"
              >
                80%
              </h4>
              <p>Sample text. Click to select the Text Element.</p>
            </div>
            <div class="card">
              <h4
                :style="{ fontSize: '3.75rem', color: 'var(--secondary-color)', fontWeight: '700' }"
              >
                1340
              </h4>
              <p>Sample text. Click to select the Text Element.</p>
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
</template>

<script setup>
import PageHeader from '@/components/shared/PageHeader.vue'
import MessageForm from '../../components/Forms/MessageForm/MessageForm.vue'
import { ref } from 'vue'
import InfoWrap from '../../components/shared/InfoWrap.vue'
import DigitalMarketing from '../../components/DigitalMarketing.vue'
import MainSponsors from '../../components/MainContent/MainSponsors.vue'

const startedModal = ref(false)
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

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
      }
    }
    .product-pricing {
      padding: 30px;
      width: 30%;
      background: #f2f2f2;
    }
  }
}
</style>
