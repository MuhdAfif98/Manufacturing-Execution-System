<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-blueGray-100">
      <header-stats />
      <div class="w-full px-4 mx-auto -m-24 md:px-10">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import HeaderStats from "@/components/Headers/HeaderStats.vue";

export default {
  name: "admin-layout",
  components: {
    Sidebar,
    HeaderStats,
  },
};
</script>
