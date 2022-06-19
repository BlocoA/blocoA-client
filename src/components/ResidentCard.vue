<script>
export default {
  props: ["resident"],
};
</script>

<template>
  <div v-if="resident.have_resident" class="have-resident">
    <div class="unit-info">
      <h3 class="identifier">{{ resident.identifier }}</h3>
      <span class="unit-contract-type">Própria</span>
    </div>
    <div class="resident-info">
      <span>{{ resident.info.name }}</span>
      <span>{{ resident.info.contact }}</span>
    </div>
  </div>

  <div v-else class="no-resident">
    <h3 class="identifier">{{ resident.identifier }}</h3>
    <span class="unit-contract-type">inativo</span>
  </div>
</template>

<style scoped lang="scss">
.have-resident,
.no-resident {
  width: 310px;
  height: 270px;

  background-color: $white;
  padding: 24px;
}

.have-resident,
.no-resident,
.unit-info,
.resident-info {
  display: flex;
  justify-content: space-between;
}

.identifier {
  width: 56px;
  height: 52px;

  font-size: 20px;
  color: $white;

  display: flex;
  align-items: center;
  justify-content: center;
}

.unit-contract-type {
  width: 83px;
  height: 32px;

  background-color: #dedce5;
  border-radius: 999px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.have-resident {
  flex-direction: column;

  .unit-info {
    align-items: center;

    .identifier {
      background-color: #795cef;
    }
  }

  .resident-info {
    flex-direction: column;
    gap: 5px;

    color: #211c37;
  }
}

.no-resident {
  align-items: center;

  .identifier {
    background-color: #494655;
  }

  .unit-contract-type {
    background-color: #dedce5;
  }
}
</style>
