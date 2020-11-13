<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <h3>Configuration</h3>
        <div class="q-pa-md">
          <q-list>
            <q-item tag="label">
              <q-item-section>
                <q-item-label>Dark Mode</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-toggle color="blue" v-model="darkMode" />
              </q-item-section>
            </q-item>
            <q-item tag="label">
              <q-item-section>
                <q-item-label>Pop up Notifications</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-toggle color="blue" v-model="showNotifications" />
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "Settings",
  data(){
    return {
      darkMode : false,
      showNotifications : false,
      autoSync : false,
      language : "en"
    }
  },
  mounted(){
    this.darkMode = this.$q.dark.isActive;
  },
  watch: {
    darkMode(){
      this.$q.dark.set(this.darkMode);
    },
    showNotifications(){
      // this.$q.notify({
      //   message: 'Hola!',
      //   color: 'gray'
      // })
      this.$q.dialog({
        title: 'Alert',
        message: 'Some message'
      }).onOk(() => {
        // console.log('OK')
      }).onCancel(() => {
        // console.log('Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }
  }
});
</script>

<style>
</style>