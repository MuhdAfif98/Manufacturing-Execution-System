<template>
  <div
    class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"
  >
    <div class="px-4 py-3 mb-0 border-0 rounded-t">
      <div class="flex flex-wrap items-center">
        <div class="relative flex-1 flex-grow w-full max-w-full px-4">
          <h3 class="text-lg font-semibold text-blueGray-700">
            Add Raw Material
          </h3>
        </div>
      </div>
    </div>

    <div class="p-8 mb-4 rounded">
      <form @submit.prevent="submitForm">
        <!-- PO Number and Product Name -->
        <div class="flex space-x-4">
          <div class="mb-4">
            <label
              for="production_order_number"
              class="block mb-2 text-sm font-bold text-gray-700"
            >
              PO Number:
            </label>
            <input
              type="text"
              v-model="newRecord.production_order_number"
              id="production_order_number"
              class="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            />
          </div>
          <div class="mb-4">
            <label
              for="product_name"
              class="block mb-2 text-sm font-bold text-gray-700"
            >
              Product Name:
            </label>
            <input
              type="text"
              v-model="newRecord.product_name"
              id="product_name"
              class="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            />
          </div>
        </div>
        <!-- Customer -->
        <div class="mb-4">
          <label
            for="customer"
            class="block mb-2 text-sm font-bold text-gray-700"
          >
            Customer:
          </label>
          <input
            type="text"
            v-model="newRecord.customer"
            id="customer"
            class="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          />
        </div>
        <!-- Quantity and Total Amount -->
        <div class="flex space-x-4">
          <div class="mb-4">
            <label
              for="quantity"
              class="block mb-2 text-sm font-bold text-gray-700"
            >
              Quantity:
            </label>
            <input
              type="number"
              v-model.number="newRecord.quantity"
              id="quantity"
              class="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            />
          </div>
          <div class="mb-4">
            <label
              for="total_amount"
              class="block mb-2 text-sm font-bold text-gray-700"
            >
              Total Amount:
            </label>
            <input
              type="number"
              v-model.number="newRecord.total_amount"
              id="total_amount"
              class="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            />
          </div>
        </div>
        <!-- Delivery Date -->
        <div class="mb-4">
          <label
            for="delivery_date"
            class="block mb-2 text-sm font-bold text-gray-700"
          >
            Delivery Date:
          </label>
          <input
            type="date"
            v-model="newRecord.delivery_date"
            id="delivery_date"
            class="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          />
        </div>
        <label>Production status</label>
        <!-- Stock, Production and Delivery -->
        <div class="flex space-x-4">
          <div class="mb-4">
            <label
              for="stock"
              class="block mb-2 text-sm font-bold text-gray-700"
            >
              Stock:
            </label>
            <select
              v-model="newRecord.stock"
              id="stock"
              class="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              <option value="" disabled selected>Select stock status</option>
              <option value="Not available">Not available</option>
              <option value="In stock">In stock</option>
              <option value="Picked">Picked</option>
            </select>
          </div>
          <div class="mb-4">
            <label
              for="production"
              class="block mb-2 text-sm font-bold text-gray-700"
            >
              Production:
            </label>
            <select
              v-model="newRecord.production"
              id="production"
              class="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              <option value="" disabled selected>
                Select production status
              </option>
              <option value="Not started">Not started</option>
              <option value="In progress">In progress</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <div class="mb-4">
            <label
              for="delivery"
              class="block mb-2 text-sm font-bold text-gray-700"
            >
              Delivery:
            </label>
            <select
              v-model="newRecord.delivery"
              id="delivery"
              class="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              <option value="" disabled selected>Select delivery status</option>
              <option value="Not applicable">Not applicable</option>
              <option value="Not shipped">Not shipped</option>
              <option value="Packed">Packed</option>
              <option value="Shipped">Shipped</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          class="inline-flex items-center px-4 py-2 text-xs font-medium text-gray-700 rounded shadow-sm bg-emerald-300 bg- hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add Record
        </button>
      </form>
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
  methods: {
    async submitForm() {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/production-records",
          this.newRecord
        );
        this.productionRecords.push(response.data);
        this.showForm = false;
        this.newRecord = {
          production_order_number: "",
          product_name: "",
          customer: "",
          quantity: 0,
          total_amount: 0,
          delivery_date: "",
          stock: "",
          production: "",
          delivery: "",
        };
      } catch (error) {
        console.error("Error adding record:", error);
        this.error = "An error occurred while adding the record.";
      }
      emitter.emit("record-created");
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
        this.loading = false;
      }
    },
  },
};
</script>
