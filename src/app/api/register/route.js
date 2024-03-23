import { User } from "../../../models/User";
import connectDB from "../../../lib/db";
import bcrypt from "bcrypt";

export async function POST(req, res) {
  try {
    await connectDB();
    const { firstName, lastName, email, password } = await req.json();
    console.log("1");
    const exist = await User.findOne({ email });
    if (exist) {
      return Response.json(
        { message: "user already exist !" },
        { status: 500 }
      );
    }
    console.log("2");
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("3");
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    console.log("4");
    return Response.json(
      { message: "user registered" },
      { data: user },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { message: "Error occured while registering the user" },
      { status: 500 }
    );
  }
}
