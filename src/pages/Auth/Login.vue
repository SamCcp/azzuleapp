<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card
          v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '30%' }"
          flat
        >
          <q-card-section>
            <div class="fit row wrap justify-center items-start content-start">
              <q-img 
                src="../../../public/primuslabs.svg"
                spinner-color="white"
              />
            </div>
          </q-card-section>
          <!-- <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">
                Log in
              </div>
            </div>
          </q-card-section> -->
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input 
                filled
                v-model="credentials.username" 
                label="Username" 
                lazy-rules
                type="email" 
              />

              <q-input
                type="password"
                filled
                v-model="credentials.password"
                label="Password"
                lazy-rules
              />

              <div>
                <q-btn label="Login" type="button" color="primary" class="full-width"  @click="doLogin"/>
                <br>
                <q-btn flat color="primary" label="Forgot my password" class="full-width" />

              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name : "Login",
  created(){
    //@ts-ignore
    window.app = this.$root;
  },
  data() {
    return {
      credentials: {
        username: "",
        password: ""
      },
      imageSrc: ''
    }
  },
  methods : {
    doLogin(){
      this.$router.push("/primuslabs")
    }
  }
})
</script>

<style>

</style>