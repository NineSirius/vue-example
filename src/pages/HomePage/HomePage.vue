<template>
  <section class="container">
    <InfoWrap style="align-items: center">
      <template #first-content>
        <img src="/img/contacts-page-header.png" alt="picture" style="width: 90% !important" />
      </template>
      <template #second-content>
        <MainHeaderForm color="#000 "></MainHeaderForm>
      </template>
    </InfoWrap>
  </section>

  <MainSponsors></MainSponsors>
  <InfoWrapItem
    title="Make your marketing more effective"
    desc="Nec feugiat nisl pretium fusce id. Justo laoreet sit amet cursus sit amet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero."
    picture="/img/info-wrap-item.png"
    bg="url('/img/main-header.jpg')"
    color="#000"
    reverse
  ></InfoWrapItem>

  <StartCard
    title="Convert more customers and grow more revenue now"
    bg="var(--additional-color)"
  ></StartCard>

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

  <!-- <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div> -->

  <DigitalMarketing></DigitalMarketing>

  <NumberContact color="var(--secondary-color)"></NumberContact>

  <ReviewList></ReviewList>

  <!-- <MainHeaderForm></MainHeaderForm> -->
</template>

<script setup>
import DigitalMarketing from '../../components/DigitalMarketing.vue'
import MainSponsors from '../../components/MainContent/MainSponsors.vue'
import MainHeaderForm from '../../components/MainHeaderForm.vue'
import InfoWrap from '../../components/shared/InfoWrap.vue'
import InfoWrapItem from '../../components/InfoWrapItem.vue'
import NumberContact from '../../components/shared/NumberContact.vue'
import ReviewList from '../../components/shared/ReviewList/ReviewList.vue'
import StartCard from '../../components/StartCard.vue'
</script>

<style lang="scss" scoped>
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-zoom.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-video.css');
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
</style>
