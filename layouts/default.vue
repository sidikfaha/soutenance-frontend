<template>
  <div>
    <b-container fluid="">
      <b-row>
        <b-col md="4" lg="3" class="min-vh-100 px-0 py-5 bg-dark text-white">
          <h1 class="text-center">Application</h1>
          <b-list-group flush>
            <b-list-group-item :class="$route.name === 'index' ? 'list-group-item-primary' : 'bg-dark text-white'" class="fz-22 mt-5" action :to="{name: 'index'}">
              <b-icon-house font-scale="1.5" class="mr-3"/> Accueil
            </b-list-group-item>
            <b-list-group-item :class="$route.name === 'new-user' ? 'list-group-item-primary' : 'bg-dark text-white'" class="fz-22" action :to="{name: 'new-user'}">
              <b-icon-person font-scale="1.5" class="mr-3"/> Nouvel utilisateur
            </b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col class="bg-light">
          <transition name="slide-fade">
            <Nuxt />
          </transition>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      active: 0
    })
  }
</script>

<style lang="scss">
.list-group-item{
  transition: .3s;
}
</style>
