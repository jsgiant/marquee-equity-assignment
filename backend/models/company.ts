import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
   {
      name: { type: String, maxlength: 250, trim: true, required: true },
      CIN: { type: String, trim: true, required: true },
   },
   { timestamps: true }
);

const Company = mongoose.model("Company", companySchema);

export { Company };
