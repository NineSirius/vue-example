<template>
  <PageHeader>
    <img src="/img/team-page-header.png" alt="image" />
    <h1 class="title">Our Team</h1>
    <p>
      Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor.
      A lacus vestibulum sed arcu non. Dolor magna eget est lorem ipsum dolor
      sit amet consectetur. Mauris pellentesque pulvinar pellentesque habitant
      morbi tristique senectus.
    </p>
    <p>
      Nec feugiat nisl pretium fusce id. Justo laoreet sit amet cursus sit amet.
      Porta non pulvinar neque laoreet suspendisse interdum consectetur libero.
    </p>

    <v-button>Read More</v-button>
  </PageHeader>
  <NumberContact
    style="background-color: var(--additional-color)"
  ></NumberContact>
</template>

<script setup>
import PageHeader from '@/components/shared/PageHeader.vue'
import NumberContact from '@/components/shared/NumberContact.vue'
</script>

<style lang="scss" scoped></style>
