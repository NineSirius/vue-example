<template>
  <PageHeader>
    <img src="/img/contacts-page-header.png" alt="image" />
    <h1 class="title">Our Contacts</h1>
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
  <NumberContact style="background-color: var(--secondary-color)"></NumberContact>

  <MessageFormWrap picture="/img/about-page-header.png" color="#111"></MessageFormWrap>

  <section class="contacts">
    <div class="container">
      <h2 class="title">Get in Touch</h2>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.​
      </p>

      <div class="contact-data">
        <div class="card">
          <span class="icon">
            <i class="icon-envelope"></i>
          </span>
          <h4>Chart to us</h4>
          <p>Our friendly team is here to help.</p>
          <a href="mailto:hi@ourcompany.com" class="link">hi@ourcompany.com</a>
        </div>
        <div class="card">
          <span class="icon">
            <i class="icon-map-pin"></i>
          </span>
          <h4>Office</h4>
          <p>Come say hello at our office HQ .</p>
          <a href="https://go.2gis.com/nfl9i" class="link">121 Rock Street, 21 avenue</a>
          <a href="https://go.2gis.com/nfl9i" class="link">New York, NY 92103-9000</a>
        </div>
        <div class="card">
          <span class="icon">
            <i class="icon-phone"></i>
          </span>
          <h4>Phone</h4>
          <p>Mon-Fri from 8am to 5am.</p>
          <a href="tel:+1(555) 000-000" class="link">+1(555) 000-000</a>
        </div>
      </div>
    </div>
  </section>

  <v-modal :isActive="startedModal" @closeModal="startedModal = false">
    <MessageForm bg="#f2f2f2"></MessageForm>
  </v-modal>
</template>

<script setup>
import PageHeader from '@/components/shared/PageHeader.vue'
import NumberContact from '@/components/shared/NumberContact.vue'
import MessageFormWrap from '../../components/Forms/MessageForm/MessageFormWrap.vue'

import { ref } from 'vue'
import MessageForm from '../../components/Forms/MessageForm/MessageForm.vue'

const startedModal = ref(false)
</script>

<style lang="scss" scoped>
.contacts {
  background: #f2f2f2;
  padding: 50px 0;
  text-align: center;

  .container {
    display: flex;
    flex-direction: column;
    gap: 40px;

    p {
      max-width: 700px;
      margin: 0 auto;
      color: var(--text-color);
    }
  }

  .contact-data {
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }
  .card {
    flex-grow: 1;
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
      font-weight: 700;
    }

    p {
      color: var(--primary-color);
      font-weight: 600;
    }

    .link {
      font-weight: 700;
      font-size: 1.125rem;
      text-decoration: none;

      &:hover {
        color: var(--secondary-color);
      }
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

  .card:nth-child(1) {
    .icon {
      background: var(--primary-color);
    }
  }
  .card:nth-child(2) {
    .icon {
      background: var(--secondary-color);
    }
  }
  .card:nth-child(3) {
    .icon {
      background: var(--additional-color);
    }
  }
}

@media screen and (max-width: 768px) {
  .contact-data {
    flex-wrap: wrap;
  }
  .card {
    flex-grow: 2;
  }
}
</style>
