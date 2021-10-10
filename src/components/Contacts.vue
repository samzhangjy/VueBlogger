<template>
  <div class="container" style="margin-top: 100px">
    <h2 class="text-center">
      Contact Me
    </h2>
    <div class="grid-3_xs-1_sm-2_md-2">
      <div
        v-for="(contact, index) in contacts"
        :key="index"
        class="col"
      >
        <a :href="contact.link" target="_blank">
          <vs-card
            type="3"
            class="center"
          >
            <template #title>
              <h3>{{ contact.name }}</h3>
            </template>
            <template #text>
              <p>
                {{ contact.value }}
              </p>
            </template>
          </vs-card>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Contacts from '@/../posts/data/config.json'

export default {
  name: 'Contacts',
  data: function () {
    return {
      contacts: Contacts.contacts
    }
  }
}
</script>
