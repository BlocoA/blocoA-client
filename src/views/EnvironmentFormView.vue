<template>
  <div class="row flex-grow-1">
    <div class="col d-flex flex-column align-items-center justify-content-center p-10">
      <h2 class="mb-13">Condomínio de {{ $route.params.environment }}</h2>
      <form class="environment-form" method="post" action="">
        <div class="mb-7">
          <label class="form-label">Nome do condomínio</label>
          <input class="form-control form-control-lg" type="text" />
        </div>
        <div class="mb-7">
          <label class="form-label">Quantidade de {{ $route.params.environment }}</label>
          <input class="form-control form-control-lg" type="number" />
        </div>
        <div class="mb-13">
          <label class="form-label">Possui área de lazer?</label>
          <select class="form-select form-select-lg">
            <option>Sim</option>
            <option>Não</option>
          </select>
        </div>
        <RouterLink to="/admin" class="btn btn-lg btn-primary w-100" type="button">
          Registrar condomínio
        </RouterLink>
      </form>
    </div>
    <div class="col bg-cover rounded-1"></div>
  </div>
</template>

<style scoped lang="scss">
.environment-form {
  width: 100%;
  max-width: 400px;
  font-size: $h5-font-size;
}

.bg-cover {
  --bg-cover-position: center bottom;
  --bg-cover-image: url(../assets/img/covers/cover-01.jpg);
}
</style>