<template>
  <div
    class="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg xl:mb-0"
  >
    <div class="flex-auto p-4">
      <div class="flex flex-wrap">
        <div class="relative flex-1 flex-grow w-full max-w-full pr-4">
          <h5 class="text-xs font-bold uppercase text-blueGray-400">
            {{ statSubtitle }}
          </h5>
          <span class="text-xl font-semibold text-blueGray-700">
            {{ statTitle }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "card-stats",
  props: {
    statSubtitle: {
      type: String,
      default: "Traffic",
    },
    statTitle: {
      type: Number,
      default: 350,
    },
  },
};
</script>
