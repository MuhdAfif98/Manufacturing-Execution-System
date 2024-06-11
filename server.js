const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

const uri =
  "mongodb+srv://ceks:x4SUb7ySgvRn1auT@cluster0.elv0ohz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
    startServer();
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });

const productionRecordSchema = new mongoose.Schema({
  production_order_number: String,
  product_name: String,
  quantity: Number,
  status: String,
  customer: String,
  total_amount: Number,
  delivery_date: Date,
  stock: String,
  production: String,
  delivery: String,
});

const ProductionRecord = mongoose.model(
  "ProductionRecord",
  productionRecordSchema
);

function startServer() {
  // CRUD operations for production records

  // Create a new production record
  app.post("/api/production-records", async (req, res) => {
    try {
      const newRecord = new ProductionRecord(req.body);
      const result = await newRecord.save();
      res.status(201).json(result);
    } catch (error) {
      console.error("Error inserting record:", error);
      res
        .status(500)
        .json({ error: "An error occurred while inserting the record." });
    }
  });

  // Read all production records
  app.get("/api/production-records", async (req, res) => {
    try {
      const records = await ProductionRecord.find();
      res.json(records);
    } catch (error) {
      console.error("Error fetching records:", error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching the records." });
    }
  });

  // Read a single production record by ID
  app.get("/api/production-records/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const record = await ProductionRecord.findById(id);
      res.json(record);
    } catch (error) {
      console.error("Error fetching record:", error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching the record." });
    }
  });

  // Update a production record by ID
  app.put("/api/production-records/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const updatedRecord = req.body;
      const result = await ProductionRecord.findByIdAndUpdate(
        id,
        updatedRecord,
        { new: true }
      );
      res.json(result);
    } catch (error) {
      console.error("Error updating record:", error);
      res
        .status(500)
        .json({ error: "An error occurred while updating the record." });
    }
  });

  // Delete a production record by ID
  app.delete("/api/production-records/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await ProductionRecord.findByIdAndDelete(id);
      res.sendStatus(204);
    } catch (error) {
      console.error("Error deleting record:", error);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the record." });
    }
  });

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
