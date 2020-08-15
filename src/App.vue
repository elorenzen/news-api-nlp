<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          newsRate
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/publications" label="Publications" />
        <q-route-tab to="/authors" label="Authors" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          newsRate
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<!--
<template>
    <div id="app">
        <div class="col q-pa-md q-mx-xl" align="center">
            <div class="row">
                <div class="col-6">
                    <q-btn to="/authors" label="AuthorList" />
                </div>
                
                <div class="col-6">
                    <q-btn to="/publications" label="PublicationList" />
                </div>
            </div>
            <router-view />
        </div>
    </div>
</template>
-->

<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.link:hover {
  color: red
}
</style>
