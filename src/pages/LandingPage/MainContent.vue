<template>
  <main class="main">
    <MainSponsors></MainSponsors>

    <div class="info-about">
      <div class="container">
        <InfoWrap>
          <template v-slot:first-content>
            <div class="info-img-wrap">
              <img
                src="/img/info-img.png"
                alt="landing info image"
                class="info-items-img"
                style="width: 80%"
              />
            </div>
          </template>

          <template v-slot:second-content>
            <div class="info-items-wrap">
              <article class="info-item">
                <span class="icon">
                  <i class="icon-web"></i>
                </span>
                <h4>Discover, Explore the product.</h4>
              </article>
              <article class="info-item">
                <span class="icon">
                  <i class="icon-tip"></i>
                </span>
                <h4>Art direction & brand stategy.</h4>
              </article>
              <article class="info-item">
                <span class="icon">
                  <i class="icon-cog"></i>
                </span>
                <h4>Product ux, Design & development</h4>
              </article>
            </div>
          </template>
        </InfoWrap>
      </div>
    </div>

    <div class="info-about-2">
      <div class="container">
        <InfoWrap>
          <template v-slot:first-content>
            <div class="info-content">
              <h2 class="info-title">Make your marketing more effective</h2>
              <p class="info-description">
                Nec feugiat nisl pretium fusce id. Justo laoreet sit amet cursus
                sit amet. Porta non pulvinar neque laoreet suspendisse interdum
                consectetur libero.
              </p>
              <v-button color="secondary">Подтвердить</v-button>
            </div>
          </template>
          <template v-slot:second-content>
            <div class="info-img-wrap">
              <img
                src="/img/info-img2.png"
                alt="landing info image"
                class="info-items-img"
              />
            </div>
          </template>
        </InfoWrap>

        <NumberContact></NumberContact>
      </div>
    </div>

    <ReviewList></ReviewList>
  </main>
</template>

<style lang="scss" scoped>
.info-about {
  padding: 100px 0;
}

.info-about-2 {
  background: var(--additional-color);
  padding: 100px 0;
}

.info-img-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.info-items-img {
  width: 70% !important;
  align-self: center;
}
.info-items-wrap {
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  .info-item {
    width: 100%;
    align-self: center;
    display: flex;
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
  }
}

.info-wrap {
  &:nth-child(2) {
    background: var(--secondary-color);
  }
}

.info-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  align-self: center;
  height: 100%;

  .info-title {
    font-size: 3rem;
    color: var(--light-color);
    font-weight: 500;
  }
}

.icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  color: #fff;

  i {
    font-size: 32px;
  }
}

.info-item:nth-child(1) {
  .icon {
    background: var(--primary-color);
  }
}
.info-item:nth-child(2) {
  .icon {
    background: var(--secondary-color);
  }
}
.info-item:nth-child(3) {
  .icon {
    background: var(--additional-color);
  }
}
</style>

<script setup>
import NumberContact from '@/components/shared/NumberContact.vue'
import InfoWrap from '../../components/shared/InfoWrap.vue'
import MainSponsors from '../../components/MainContent/MainSponsors.vue'
import ReviewList from '../../components/shared/ReviewList/ReviewList.vue'
</script>
