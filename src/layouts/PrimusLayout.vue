<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar :class="toolbarClass">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title>
          {{ PageTitle }}
        </q-toolbar-title>

        <div>
          <q-img
            src="primuslabs.svg"
            :basic="true"
            width="73px"
            height="35px"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item>
          <q-item-section side>
            <q-avatar rounded size="48px">
              <img src="johndoe.svg" />
              <!-- <q-badge floating color="teal">new</q-badge> -->
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>John Doe</q-item-label>
            <q-item-label caption>Primuslabs Sampler</q-item-label>
          </q-item-section>
        </q-item>

        <q-item-label header>Menu</q-item-label>

        <EssentialLink
          v-for="link in menuItems"
          :key="link.title"
          v-bind="link"
        />


        <q-item-label header class="poweredby" v-for="ix in 3" :key="ix"></q-item-label>
        <q-item>
          <q-btn label="Logout" class="full-width" color="negative"/>
        </q-item>
        <q-separator></q-separator>
        <q-item-label header class="poweredby"> 
          <img src="../../public/azzule-logo-black.svg" height="20px"/> 
          Powered by Azzule Systems
        </q-item-label>

      </q-list>
    </q-drawer>

    <q-page-container class="contenedor">
      <router-view :key="$router.path" />
    </q-page-container>
  </q-layout>
</template>

<script>
import Vue from "vue";
import EssentialLink from '../components/EssentialLink';

const getPrimus = (option) => option.path == "/primuslabs"

export default Vue.extend({
  data() {
    return {
      leftDrawerOpen: false,
      
      menuItems : []
    };
  },
  created(){
    let root = this.$router.options.routes.find(getPrimus);
    let startPath = root.path;
    root.children.forEach(item => {
      this.menuItems.push({
        //link : startPath + item.path,
        link : item.path,
        title : item.name,
        caption : "",
        icon : item.icon || ""
      })
    })
  },
  components : {
    EssentialLink
  },
  computed : {
    //Determina la clase que tendra la barra de herramientas dependiendo si esta activo el modo Jean
    toolbarClass(){
      return {
        "Primuslabs" : this.$q.dark.isActive == false,
        "Primuslabs-dark" : this.$q.dark.isActive == true
      }
    },
    //Determina el titulo de la pagina actual
    PageTitle(){
      return this.$route.name || "";
    }
  }
});
</script>

<style lang="sass">
.contenedor
  border-top-left-radius: 16px
  border-top-right-radius: 16px
.q-router-link--active
  background: #bfccd9
.poweredby
  text-align: center;
  font-size: 1.3em;
.poweredby img
  position: relative;
  top: 3px;
</style>