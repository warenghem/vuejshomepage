<template>
  <v-app>
         <MainToolbar></MainToolbar>
         <router-view/>
  </v-app>
</template>

<script>

    import MainToolbar from './components/main-toolbar';

export default {
  name: 'App',
    components:{MainToolbar},

  data: () => ({
    //
  }),
};
</script>
