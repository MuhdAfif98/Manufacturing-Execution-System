<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full px-4 mb-12">
      <card-table />
    </div>
    <div class="w-full px-4 mb-12">
      <quality-control color="dark" />
    </div>
  </div>
</template>
<script>
import CardTable from "@/components/Cards/CardTable.vue";
import QualityControl from "@/components/Forms/QualityControl.vue";

export default {
  components: {
    CardTable,
    QualityControl,
  },
};
</script>
