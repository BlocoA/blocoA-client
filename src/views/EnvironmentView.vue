<script setup>
import router from "../router";
import { onMounted, ref } from "vue";
import { RouterView } from "vue-router";
import { Modal } from "bootstrap";

const environmentModal = ref(null);

function hideModal(e) {
  let modal = Modal.getInstance(environmentModal.value);
  modal._element.dataset.params = e.target.dataset.params;
  modal.hide();
}

onMounted(() => {
  environmentModal.value.addEventListener("hidden.bs.modal", (e) => {
    let params = e.target.dataset.params ? JSON.parse(e.target.dataset.params) : null;

    if (!params) {
      return;
    }

    router.push({ name: "environment-create", params });
    e.target.dataset.params = "";
  });
});
</script>

<template>
  <!-- Begin::Modal -->
  <div ref="environmentModal" class="modal fade" id="environment-modal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-body p-13">
          <div class="d-flex align-items-center justify-content-between mb-14">
            <h2 class="mb-0">Selecione o tipo do condomínio</h2>
            <button class="btn-close" type="button" data-bs-dismiss="modal"></button>
          </div>
          <button @click="hideModal" class="environment-modal-link btn btn-lg btn-outline-primary mb-13" type="button" data-params='{"environment": "casas"}'>
            Casas
            <svg class="svg-inline--icon icon-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor" d="M443.7 266.8l-165.9 176C274.5 446.3 269.1 448 265.5 448c-3.986 0-7.988-1.375-11.16-4.156c-6.773-5.938-7.275-16.06-1.118-22.59L393.9 272H16.59c-9.171 0-16.59-7.155-16.59-15.1S7.421 240 16.59 240h377.3l-140.7-149.3c-6.157-6.531-5.655-16.66 1.118-22.59c6.789-5.906 17.27-5.469 23.45 1.094l165.9 176C449.4 251.3 449.4 260.7 443.7 266.8z" />
            </svg>
          </button>
          <button @click="hideModal" class="environment-modal-link btn btn-lg btn-outline-primary" type="button" data-params='{"environment": "apartamentos"}'>
            Apartamentos
            <svg class="svg-inline--icon icon-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor" d="M443.7 266.8l-165.9 176C274.5 446.3 269.1 448 265.5 448c-3.986 0-7.988-1.375-11.16-4.156c-6.773-5.938-7.275-16.06-1.118-22.59L393.9 272H16.59c-9.171 0-16.59-7.155-16.59-15.1S7.421 240 16.59 240h377.3l-140.7-149.3c-6.157-6.531-5.655-16.66 1.118-22.59c6.789-5.906 17.27-5.469 23.45 1.094l165.9 176C449.4 251.3 449.4 260.7 443.7 266.8z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End::Modal -->

  <div class="d-flex flex-column flex-grow-1 p-11">
    <div class="mb-10">
      <RouterLink to="/ambiente">
        <img src="@/assets/img/logos/easycond.svg" alt="easycond" height="40" />
      </RouterLink>
    </div>
    <div class="card flex-grow-1">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.environment-modal-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 490px;
  height: 128px;
  padding: 0 32px;
  font-size: $h2-font-size;
}
</style>