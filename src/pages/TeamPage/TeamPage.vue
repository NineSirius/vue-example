<template>
  <PageHeader>
    <img src="/img/team-page-header.png" alt="image" />
    <h1 class="title">Our Team</h1>
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
  <NumberContact style="background-color: var(--additional-color)"></NumberContact>
  <TeamList />

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

const startedModal = ref(false)
</script>

<style lang="scss" scoped></style>
