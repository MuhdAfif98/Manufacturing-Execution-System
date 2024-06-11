<template>
  <div class="flex flex-wrap">
    <div class="w-full px-4 lg:w-8/12">
      <ProductionRecord />
    </div>
    <div class="w-full px-4 lg:w-4/12">
      <ProductionForm />
    </div>
  </div>
</template>
<script>
import ProductionRecord from "@/components/Cards/ProductionRecord.vue";
import ProductionForm from "@/components/Forms/ProductionForm.vue";

export default {
  components: {
    ProductionRecord,
    ProductionForm,
  },
};
</script>
