<template>
  <PageHeader v-if="TeamPageStore.TeamPage">
    <img src="/img/team-page-header.png" alt="image" />
    <h1 class="title">{{ TeamPageStore.TeamPage.title }}</h1>
    <p>
      {{ TeamPageStore.TeamPage.description }}
    </p>
    <p>
      {{ TeamPageStore.TeamPage.description2 }}
    </p>

    <v-button @click="startedModal = true">{{ TeamPageStore.TeamPage.btn_text }}</v-button>
  </PageHeader>
  <TeamList />
  <NumberContact style="background-color: var(--additional-color)"></NumberContact>

  <v-modal :isActive="startedModal" @closeModal="startedModal = false">
    <MessageForm bg="#f2f2f2"></MessageForm>
  </v-modal>
</template>

<script setup>
import PageHeader from '@/components/shared/PageHeader.vue'
import NumberContact from '@/components/shared/NumberContact.vue'
import TeamList from '../../components/TeamList/TeamList.vue'
import MessageForm from '../../components/Forms/MessageForm/MessageForm.vue'
import { ref } from 'vue'
import { usePageStore } from '../../store/pageStore'
import { getPageInfo } from '../../api/requests'

const startedModal = ref(false)

const TeamPageStore = usePageStore()

getPageInfo('team-page').then((resp) => {
  TeamPageStore.changeState('TeamPage', resp.data.attributes)
})
</script>

<style lang="scss" scoped></style>
