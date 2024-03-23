import { User } from "../../../models/User";
import connectDB from "../../../lib/db";
import bcrypt from "bcrypt";

export default async function POST(req, res) {
  try {
    await connectDB();
    const { email, password } = await req.json();
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Invalid email or password", status: 401 });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Invalid email or password", status: 401 });
    }

    // You may generate and return a token for authentication here if needed

    return res
      .status(200)
      .json({ message: "Login successful", data: user, status: 200 });
  } catch (error) {
    console.error("Error during login:", error);
    return res
      .status(500)
      .json({ message: "Error occurred during login", status: 500 });
  }
}
