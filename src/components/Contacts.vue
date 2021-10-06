<template>
  <div class="container" style="margin-top: 100px">
    <h2 class="text-center">
      Contact Me
    </h2>
    <br />
    <vs-row>
      <vs-col
        v-for="(contact, index) in contacts"
        :key="index"
        lg="4"
        sm="12"
        md="6"
        style="margin-bottom: 30px"
      >
        <a :href="contact.link" target="_blank">
          <vs-card
            type="3"
            style="max-width: 95%"
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
      </vs-col>
    </vs-row>
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
