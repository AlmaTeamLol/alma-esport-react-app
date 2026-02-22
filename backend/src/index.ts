import cors from "cors";

import express, { Request, Response } from "express";
import { connect } from "mongoose";

import memberRoutes from "@backend/routes/member.js";
import teamRoutes from "@backend/routes/team.js";

const app = express();

const mongoUri = `${process.env.MONGO_URI_SERVER_NAME}://${process.env.MONGO_URI_HOST_IP}:${process.env.MONGO_URI_HOST_PORT}`;
const port = process.env.PORT || 4000;

if (!mongoUri) {
    throw new Error("Invalid MongoDB URI: " + mongoUri);
}

try {
    await connect(mongoUri);
    console.log("Connected to MongoDB");
} catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
}

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use("/members", memberRoutes);
app.use("/teams", teamRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});