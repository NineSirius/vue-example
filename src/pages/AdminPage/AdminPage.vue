<template>
  <div class="container" v-if="authData.data && authData.data.role.name === 'Admin'">
    <h2 class="title">Админка</h2>

    <div class="admin-panel">
      <nav class="admin-nav">
        <h2>Страницы</h2>
        <ul class="nav-list">
          <li class="nav-list-item">
            <button @click="activeTab = { store: 'HomePage', api: 'home' }" class="admin-nav-item">
              Главная
            </button>
          </li>
          <li class="nav-list-item">
            <button
              @click="activeTab = { store: 'AboutPage', api: 'about' }"
              class="admin-nav-item"
            >
              О нас
            </button>
          </li>
          <li class="nav-list-item">
            <button
              @click="activeTab = { store: 'LandingPage', api: 'landing' }"
              class="admin-nav-item"
            >
              Лендинг
            </button>
          </li>
          <li class="nav-list-item">
            <button @click="activeTab = { store: 'TeamPage', api: 'team' }" class="admin-nav-item">
              Команда
            </button>
          </li>
          <li class="nav-list-item">
            <button
              @click="activeTab = { store: 'GalleryPage', api: 'gallery' }"
              class="admin-nav-item"
            >
              Галерея
            </button>
          </li>
          <li class="nav-list-item">
            <button
              @click="activeTab = { store: 'ContactsPage', api: 'contacts' }"
              class="admin-nav-item"
            >
              Контакты
            </button>
          </li>
        </ul>
        <h2>Компоненты</h2>
        <ul class="nav-list">
          <li class="nav-list-item">
            <button
              @click="activeTab = { store: 'Sponsors', api: 'sponsor' }"
              class="admin-nav-item"
            >
              Спонсоры
            </button>
          </li>
          <li class="nav-list-item">
            <button
              class="admin-nav-item"
              @click="activeTab = { store: 'DigitalMarketing', api: 'digital-marketing' }"
            >
              Digital Marketing
            </button>
          </li>
        </ul>
      </nav>

      <AboutPageEditForm v-if="activeTab.store === 'AboutPage'" />
      <SponsorsEditForm v-else-if="activeTab.store === 'Sponsors'" />
      <DigitalMarketingForm v-else-if="activeTab.store === 'DigitalMarketing'" />
      <TeamPageEditForm v-else-if="activeTab.store === 'TeamPage'" />
      <GalleryPageEdit v-else-if="activeTab.store === 'GalleryPage'" />

      <div class="loader" v-else>
        <h2>Пока что нету</h2>
      </div>
    </div>
  </div>
  <div v-else>
    <center><h2 class="title">Доступ запрещен</h2></center>
  </div>
</template>
<style lang="scss">
.admin-panel {
  display: flex;
  padding: 50px 0;
  gap: 40px;

  .admin-nav {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 15px;

    .nav-list {
      display: flex;
      flex-direction: column;

      &-item button {
        padding: 12px 0;
        font-family: inherit;
        font-size: 16px;
        width: 100%;
        text-align: left;
        border: unset;
        background: unset;
        transition: 0.2s;

        &:hover {
          cursor: pointer;
          color: #777777;
        }
      }
    }
  }
  form {
    width: 100%;
  }
  .admin-content {
    padding: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

.admin-content-row-wrap {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.admin-content-row {
  background: #f7f7f7;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 15px;

  label {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  input,
  textarea {
    background: none;
    border: none;
    outline: none;
    color: #222;
    font-family: inherit;
    font-size: 1rem;
    border: 1px solid #acacac;
    padding: 10px;
    border-radius: 5px;
    resize: vertical;
  }
}

.caption {
  color: #333;
}

.loader {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script setup>
import { reactive, ref, watch } from 'vue'
import router from '../../router'
import { authDataStore } from '../../store/authStore'
import { usePageStore } from '../../store/pageStore'
import { getPageInfo } from '../../api/requests'
import AboutPageEditForm from '../AdminPage/AboutPageEditForm.vue'
import SponsorsEditForm from './SponsorsEditForm.vue'
import DigitalMarketingForm from './DigitalMarketingForm.vue'
import TeamPageEditForm from './TeamPageEditForm.vue'
import GalleryPageEdit from './GalleryPageEdit.vue'

const store = usePageStore()

const authData = authDataStore()

const editableData = reactive({})

let activeTab = ref({ store: 'AboutPage', api: 'about' })
</script>
