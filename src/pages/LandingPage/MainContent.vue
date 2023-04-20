<template>
  <main class="main">
    <MainSponsors></MainSponsors>

    <section class="info-about">
      <div class="container">
        <InfoWrap>
          <template v-slot:first-content>
            <div class="info-img-wrap">
              <img
                src="/img/info-img.png"
                alt="landing info image"
                class="info-item-img"
                style="width: 80%; align-self: center"
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
    </section>

    <InfoWrapItem
      title="Make your marketing more effective"
      desc="Nec feugiat nisl pretium fusce id. Justo laoreet sit amet cursus sit amet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero"
      picture="/img/info-img2.png"
      color="#fff"
      btnColor="secondary"
      bg="var(--additional-color)"
    >
    </InfoWrapItem>
    <StartCard
      title="Convert more customers and grow more revenue now"
      bg="var(--additional-color)"
    ></StartCard>

    <!-- <div class="info-about-2">
      <div class="container">
        <InfoWrap>
          <template v-slot:first-content>
            <div class="info-content">
              <h2 class="info-title">Make your marketing more effective</h2>

              <p class="info-description">
                Nec feugiat nisl pretium fusce id. Justo laoreet sit amet cursus sit amet. Porta non
                pulvinar neque laoreet suspendisse interdum consectetur libero.
              </p>
              <v-button color="secondary">Подтвердить</v-button>
            </div>
          </template>
          <template v-slot:second-content>
            <div class="info-img-wrap">
              <img src="/img/info-img2.png" alt="landing info image" class="info-item-img" />
            </div>
          </template>
        </InfoWrap>

        <NumberContact></NumberContact>
      </div>
    </div> -->

    <section class="company-stats container">
      <article class="card">
        <h2 class="card-title">560k</h2>
        <p>Digital global audience reach</p>
      </article>
      <article class="card">
        <h2 class="card-title">79%</h2>
        <p>OF THE AUDIENCE IS UNDER 34 YEARS OLD</p>
      </article>
      <article class="card">
        <h2 class="card-title">80%</h2>
        <p>CONTENT PIECES PRODUCED EVERYDAY</p>
      </article>
      <article class="card">
        <h2 class="card-title">1340</h2>
        <p>MARKETING STRATEGY & SEO CAMPAIGNS</p>
      </article>
    </section>

    <DigitalMarketing />

    <MessageFormWrap
      picture="/img/message-form-item.png"
      bg="var(--secondary-color)"
      color="#fff"
    />

    <NumberContact color="var(--secondary-color)"></NumberContact>

    <ReviewList></ReviewList>
  </main>
</template>

<style lang="scss" scoped>
.info-about {
  padding: 100px 0;
}

.info-about-2 {
  background: var(--additional-color);
  padding: 100px 0 0 0;
}

.info-img-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  align-items: center;
}
.info-item-img {
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

.company-stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 370px));
  justify-content: center;
  padding: 60px 20px !important;
  color: var(--light-color);
  gap: 20px;

  .card {
    text-align: center;
    font-size: 2.5rem;
    box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.15);
    border-radius: 50px;

    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    width: 100%;
    height: 370px;

    &:first-child {
      background: var(--primary-color);
    }
    &:nth-child(2) {
      background: var(--secondary-color);
    }
    &:nth-child(3) {
      background: var(--success-color);
    }
    &:nth-child(4) {
      background: var(--additional-color);
    }

    .card-title {
      color: var(--light-color);
    }
    p {
      text-transform: uppercase;
    }
  }
}

@media (max-width: 768px) {
  .company-stats {
    grid-template-columns: repeat(1, minmax(0, 300px));
    padding: 60px 0;

    .card {
      height: auto;
    }
  }
}
</style>

<script setup>
import NumberContact from '@/components/shared/NumberContact.vue'
import InfoWrap from '../../components/shared/InfoWrap.vue'
import MainSponsors from '../../components/MainContent/MainSponsors.vue'
import ReviewList from '../../components/shared/ReviewList/ReviewList.vue'
import DigitalMarketing from '../../components/DigitalMarketing.vue'
// import MessageForm from '../../components/Forms/MessageForm/MessageForm.vue'
import MessageFormWrap from '../../components/Forms/MessageForm/MessageFormWrap.vue'
import InfoWrapItem from '../../components/InfoWrapItem.vue'
import StartCard from '../../components/StartCard.vue'
</script>
