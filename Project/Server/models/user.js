import mongoose from "mongoose";
const { Schema } = mongoose;

// Define User Schema with basic field definitions
const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    secret: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      trim: true,
    },
    photo: {
      type: String,
      default: "",
    },
    Student: [
      {
        type: Schema.ObjectId,
        ref: "User",
      },
    ],
    bookmarks: [
      {
        universityId: { type: mongoose.Schema.Types.ObjectId, ref: "University" },
        programId: String,
      },
    ],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
    versionKey: false, // Removes the `__v` versioning field
  }
);

// Export the User model for use in other parts of the application
export default mongoose.model("User", userSchema);
