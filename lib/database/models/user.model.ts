import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, unique: true }, // Adjusted based on the request JSON
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  photo: { type: String, required: true },
  birthday: { type: String, default: '' }, // Added based on the request JSON
  createdAt: { type: Date, default: Date.now }, // Added based on the request JSON
  imageUrl: { type: String }, // Adjusted based on the request JSON
  gender: { type: String, default: '' }, // Added based on the request JSON
  lastSignInAt: { type: Date }, // Adjusted based on the request JSON
  passwordEnabled: { type: Boolean, default: true }, // Added based on the request JSON
  twoFactorEnabled: { type: Boolean, default: false }, // Added based on the request JSON
  // Other fields can be added based on your application requirements
})


const User = models.User || model('User', UserSchema);

export default User;