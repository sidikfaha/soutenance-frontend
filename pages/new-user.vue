<template>
  <b-container fluid="">
    <b-row class="justify-content-center py-5">
      <b-col md="6" class="bg-white shadow p-5 rounded-2rem">
        <b-form>
          <h4 class="text-center">Ajoutez un nouvel utilisateur</h4>
          <div class="w-100">
            <b-form-group>
              <b-input class="mt-3" type="text" placeholder="Identifiant..." />
            </b-form-group>
            <b-form-group>
              <b-input class="mt-3" type="text" placeholder="Nom..." />
            </b-form-group>
            <b-form-group>
              <b-input class="mt-3" type="text" placeholder="Prenom..." />
            </b-form-group>
            <b-form-group>
              <b-input class="mt-3" type="password" placeholder="Mot de passe..." />
            </b-form-group>
            <b-form-group>
              <b-input class="mt-3" type="password" placeholder="Confirmer le mot de passe..." />
            </b-form-group>
            <b-form-group>
              <b-form-checkbox size="lg" unchecked-value="Non" value="Oui" :checked="false" inline /> <span class="fz-18">Admin</span>
            </b-form-group>
            <b-form-group>
              <b-btn size="lg" pill variant="primary" class="float-right">Enregistrer</b-btn>
            </b-form-group>
          </div>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "new-user"
}
</script>

<style scoped>

</style>
