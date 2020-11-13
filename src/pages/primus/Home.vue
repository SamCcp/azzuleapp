<template>
  <q-page>
    <q-list bordered separator>
      <template v-for="ix in 3">
        <q-item :key="ix" clickable v-ripple>
          <q-item-section>
            <q-item-label>Single line item</q-item-label>
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>2 min ago</q-item-label>
            <div class="text-orange">
              <q-icon name="star" />
              <q-icon name="star" />
              <q-icon name="star" />
            </div>
          </q-item-section>
        </q-item>
      </template>

    </q-list>

    <q-expansion-item
      icon="perm_identity"
      label="Account settings"
      caption="John Doe"
    >
      <q-card>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
          commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
          eveniet doloribus ullam aliquid.
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-page>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name : "PrimusHome",
  created(){
    //this.$q.dark.set(true);
  },
  data(){
    return {}
  }
})
</script>

<style>

</style>