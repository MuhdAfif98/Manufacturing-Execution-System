<template>
  <div
    class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"
  >
    <div class="px-4 py-3 mb-0 border-0 rounded-t">
      <div class="flex flex-wrap items-center">
        <div class="relative flex-1 flex-grow w-full max-w-full px-4">
          <h3 class="text-lg font-semi bold text-blueGray-700">Raw Material</h3>
        </div>
      </div>
    </div>

    <div class="block w-full overflow-x-auto">
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th
              class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100"
            >
              PO Number
            </th>
            <th
              class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100"
            >
              Product Name
            </th>
            <th
              class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100"
            >
              Customer
            </th>
            <th
              class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100"
            >
              Quantity
            </th>
            <th
              class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100"
            >
              Total Amount
            </th>
            <th
              class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100"
            >
              Delivery Date
            </th>

            <th
              class="px-12 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-emerald-300 text-blueGray-500 border-blueGray-100"
            >
              Stock
            </th>
            <th
              class="px-12 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-emerald-300 text-blueGray-500 border-blueGray-100"
            >
              Production
            </th>
            <th
              class="px-12 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-emerald-300 text-blueGray-500 border-blueGray-100"
            >
              Delivery
            </th>
            <th
              class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="record in productionRecords" :key="record.id">
            <td
              class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
            >
              {{ record.production_order_number }}
            </td>
            <td
              class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
            >
              {{ record.product_name }}
            </td>
            <td
              class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
            >
              {{ record.customer }}
            </td>
            <td
              class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
            >
              {{ record.quantity }}
            </td>
            <td
              class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
            >
              ${{ record.total_amount }}
            </td>
            <td
              class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
            >
              {{
                new Date(record.delivery_date).toLocaleDateString("en-MY", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
              }}
            </td>
            <td
              class="w-full p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0"
            >
              <select
                v-model="record.stock"
                :class="{
                  'bg-red-500': record.stock === 'Not available',
                  'bg-emerald-500': record.stock === 'In stock',
                  'bg-yellow-500': record.stock === 'Picked',
                }"
                class="w-full px-3 py-2 border rounded shadow appearance-none text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                @change="updateRecordStatus(record)"
              >
                <option value="Not available">Not available</option>
                <option value="In stock">In stock</option>
                <option value="Picked">Picked</option>
              </select>
            </td>
            <td
              class="w-full p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0"
            >
              <select
                v-model="record.production"
                :class="{
                  'bg-red-500': record.production === 'Not started',
                  'bg-yellow-500': record.production === 'In progress',
                  'bg-emerald-500': record.production === 'Done',
                }"
                class="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                @change="updateRecordStatus(record)"
              >
                <option value="Not started">Not started</option>
                <option value="In progress">In progress</option>
                <option value="Done">Done</option>
              </select>
            </td>
            <td
              class="w-full p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0"
            >
              <select
                v-model="record.delivery"
                :class="{
                  'bg-blueGray-500': record.delivery === 'Not applicable',
                  'bg-yellow-500': record.delivery === 'Not shipped',
                  'bg-teal-500': record.delivery === 'Packed',
                  'bg-emerald-500': record.delivery === 'Shipped',
                }"
                class="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                @change="updateRecordStatus(record)"
              >
                <option value="Not applicable">Not applicable</option>
                <option value="Not shipped">Not shipped</option>
                <option value="Packed">Packed</option>
                <option value="Shipped">Shipped</option>
              </select>
            </td>
            <td
              class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
            >
              <button
                class="px-3 py-1 text-sm font-semibold text-white bg-red-500 rounded-md hover:bg-red-600"
                @click="deleteRecord(record._id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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
      showForm: false,
      newRecord: {
        production_order_number: "",
          product_name: "",
          customer: "",
          quantity: 0,
          total_amount: 0,
          delivery_date: new Date(),
          stock: "",
          production: "",
          delivery: "",
      },
    };
  },
  created() {
    this.fetchProductionRecords();
    emitter.on("record-created", this.handleCreate);
  },
  beforeUnmount() {
    emitter.off("record-created", this.handleCreate);
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
    async updateRecordStatus(record) {
      try {
        this.loading = true;
        await axios.put(
          `http://localhost:3000/api/production-records/${record._id}`,
          {
            stock: record.stock,
            production: record.production,
            delivery: record.delivery,
          }
        );
      } catch (error) {
        console.error("Error updating record:", error);
      } finally {
        this.fetchProductionRecords();
        this.loading = false;
      }
    },
    async deleteRecord(id) {
      try {
        this.loading = true;
        await axios.delete(
          `http://localhost:3000/api/production-records/${id}`
        );
      } catch (error) {
        this.error = "Error deleting record";
        console.error("Error deleting record:", error);
      } finally {
        this.fetchProductionRecords();
        this.loading = false;
      }
    },
  },
};
</script>
