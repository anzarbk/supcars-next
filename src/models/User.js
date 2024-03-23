import { model, models, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    firstName: { type: String, required: true },
    LastName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String },
  },
  { timestamps: true }
);

export const User = models?.User || model("User", UserSchema);
