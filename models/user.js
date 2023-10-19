const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: Buffer, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);
