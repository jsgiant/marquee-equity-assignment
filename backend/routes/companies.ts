import { Router } from "express";
import { check } from "express-validator";

import { addCompany, getCompanies } from "../controllers/companies";

const router = Router();

router.post(
   "/add-company",
   [
      check("name", "Name is required").isLength({ min: 1 }),
      check("CIN", "CIN (Company Identification Number) is required").isLength({
         min: 1,
      }),
   ],
   addCompany
);

router.get("/companies", getCompanies);

export { router };
