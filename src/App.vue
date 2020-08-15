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
