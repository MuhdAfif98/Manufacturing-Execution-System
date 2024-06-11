<template>
    <div class="p-6">
        <h1 class="mb-4 text-2xl font-bold">Production Tracking</h1>
        <div class="mb-4">
            <form @submit.prevent="addProductionRecord">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <input type="text" v-model="newRecord.production_order_number" placeholder="Production Order Number"
                        class="p-2 border rounded" />
                    <input type="text" v-model="newRecord.product_name" placeholder="Product Name"
                        class="p-2 border rounded" />
                    <input type="number" v-model="newRecord.quantity" placeholder="Quantity"
                        class="p-2 border rounded" />
                    <input type="text" v-model="newRecord.status" placeholder="Status" class="p-2 border rounded" />
                    <input type="datetime-local" v-model="newRecord.scheduled_start_date"
                        placeholder="Scheduled Start Date" class="p-2 border rounded" />
                    <input type="datetime-local" v-model="newRecord.scheduled_end_date" placeholder="Scheduled End Date"
                        class="p-2 border rounded" />
                    <input type="datetime-local" v-model="newRecord.actual_start_date" placeholder="Actual Start Date"
                        class="p-2 border rounded" />
                    <input type="datetime-local" v-model="newRecord.actual_end_date" placeholder="Actual End Date"
                        class="p-2 border rounded" />
                    <textarea v-model="newRecord.raw_materials_used" placeholder="Raw Materials Used (JSON format)"
                        class="p-2 border rounded"></textarea>
                </div>
                <button type="submit" class="p-2 mt-4 text-white bg-blue-500 rounded">Add Production Record</button>
            </form>
        </div>
        <div>
            <h2 class="text-xl font-semibold">Production Records</h2>
            <table class="w-full mt-4 border border-collapse">
                <thead>
                    <tr>
                        <th class="p-2 border">Order Number</th>
                        <th class="p-2 border">Product Name</th>
                        <th class="p-2 border">Quantity</th>
                        <th class="p-2 border">Status</th>
                        <th class="p-2 border">Scheduled Start</th>
                        <th class="p-2 border">Scheduled End</th>
                        <th class="p-2 border">Actual Start</th>
                        <th class="p-2 border">Actual End</th>
                        <th class="p-2 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="record in productionRecords" :key="record._id">
                        <td class="p-2 border">{{ record.production_order_number }}</td>
                        <td class="p-2 border">{{ record.product_name }}</td>
                        <td class="p-2 border">{{ record.quantity }}</td>
                        <td class="p-2 border">{{ record.status }}</td>
                        <td class="p-2 border">{{ record.scheduled_start_date }}</td>
                        <td class="p-2 border">{{ record.scheduled_end_date }}</td>
                        <td class="p-2 border">{{ record.actual_start_date }}</td>
                        <td class="p-2 border">{{ record.actual_end_date }}</td>
                        <td class="p-2 border">
                            <button @click="editProductionRecord(record)"
                                class="p-1 text-white bg-yellow-500 rounded">Edit</button>
                            <button @click="deleteProductionRecord(record._id)"
                                class="p-1 text-white bg-red-500 rounded">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
    name: 'ProductionTracking',
    setup() {
        const productionRecords = ref([]);
        const newRecord = ref({
            production_order_number: '',
            product_name: '',
            quantity: '',
            status: '',
            raw_materials_used: '',
            balance_material: '',
        });

        const fetchProductionRecords = async () => {
            const response = await axios.get('http://localhost:3000/api/production-records');
            productionRecords.value = response.data;
        };

        const addProductionRecord = async () => {
            await axios.post('http://localhost:3000/api/production-records', newRecord.value);
            fetchProductionRecords();
            newRecord.value = {
                production_order_number: '',
                product_name: '',
                quantity: '',
                status: '',
                raw_materials_used: '',
                balance_material: '',
            };
        };

        const editProductionRecord = async (record) => {
            newRecord.value = { ...record };
            // Implement logic to update the record (for simplicity, it's not included here)
        };

        const deleteProductionRecord = async (id) => {
            await axios.delete(`http://localhost:3000/api/production-records/${id}`);
            fetchProductionRecords();
        };

        onMounted(fetchProductionRecords);
        return {
            productionRecords,
            newRecord,
            addProductionRecord,
            editProductionRecord,
            deleteProductionRecord
        };
    }
};
</script>

<style scoped>
/* Add your styles here if needed */
</style>