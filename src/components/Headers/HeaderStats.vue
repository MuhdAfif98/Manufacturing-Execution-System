<template>
  <!-- Header -->
  <div class="relative pt-6 pb-32 bg-emerald-600 md:pt-16">
    <div class="w-full px-4 mx-auto md:px-10">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
          <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
            <div
              class="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg xl:mb-0"
            >
              <div class="flex-auto p-4">
                <div class="flex flex-wrap">
                  <div class="relative flex-1 flex-grow w-full max-w-full pr-4">
                    <h5 class="text-xs font-bold uppercase text-blueGray-400">
                      Customer
                    </h5>
                    <span class="text-xl font-semibold text-blueGray-700">
                      {{ this.customerCount }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
            <div
              class="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg xl:mb-0"
            >
              <div class="flex-auto p-4">
                <div class="flex flex-wrap">
                  <div class="relative flex-1 flex-grow w-full max-w-full pr-4">
                    <h5 class="text-xs font-bold uppercase text-blueGray-400">
                      Material Amount
                    </h5>
                    <spƒan class="text-xl font-semibold text-blueGray-700">
                      {{ this.totalAmount }}
                    </spƒan>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
            <div
              class="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg xl:mb-0"
            >
              <div class="flex-auto p-4">
                <div class="flex flex-wrap">
                  <div class="relative flex-1 flex-grow w-full max-w-full pr-4">
                    <h5 class="text-xs font-bold uppercase text-blueGray-400">
                      Material Quantity
                    </h5>
                    <spƒan class="text-xl font-semibold text-blueGray-700">
                      {{ this.materialQuantity }}
                    </spƒan>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
            <div
              class="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg xl:mb-0"
            >
              <div class="flex-auto p-4">
                <div class="flex flex-wrap">
                  <div class="relative flex-1 flex-grow w-full max-w-full pr-4">
                    <h5 class="text-xs font-bold uppercase text-blueGray-400">
                      Total Shipped
                    </h5>
                    <spƒan class="text-xl font-semibold text-blueGray-700">
                      {{ this.totalShipped }}
                    </spƒan>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
var emitter = require("tiny-emitter/instance");

export default {
  data() {
    return {
      productionRecords: [],
      loading: true,
      error: null,
      totalAmount: 0,
      materialQuantity: 0,
      totalShipped: 0,
    };
  },
  computed: {
    recordCount() {
      return this.productionRecords.length;
    },
    customerCount() {
      return `${this.recordCount}`;
    },
    shippedRecordCount() {
      return this.productionRecords.filter(record => record.delivery === 'Shipped').length;
    },
  },
  methods: {
    handleCreate() {
      this.fetchProductionRecords(); // Refresh data after record creation
    },
    async fetchProductionRecords() {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/production-records"
        );
        this.productionRecords = response.data;
      } catch (error) {
        this.error = "Error fetching production records";
        console.error("Error fetching production records:", error);
      } finally {
        this.loading = false;
      }
    },
    calculateTotalAmount() {
      this.totalAmount = this.productionRecords.reduce(
        (sum, record) => sum + record.total_amount,
        0
      );
    },
    calculateMaterialQuantity() {
      this.materialQuantity = this.productionRecords.reduce(
        (sum, record) => sum + record.quantity,
        0
      );
    },
    countShippedRecords() {
      this.totalShipped = this.productionRecords.filter(record => record.delivery === 'Shipped').length;
    },
  },
  created() {
    emitter.on("record-created", this.handleCreate);
    this.fetchProductionRecords().then(() => {
      this.calculateTotalAmount();
      this.calculateMaterialQuantity();
      this.countShippedRecords();
    });
  },
};
</script>
