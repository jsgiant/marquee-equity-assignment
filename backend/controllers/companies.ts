import { Request, Response } from "express";
import { validationResult } from "express-validator";

import { Company } from "../models/company";

export const addCompany = (req: Request, res: Response) => {
   const errors = validationResult(req);

   if (!errors.isEmpty()) {
      return res.status(422).json({ error: errors.array()[0].msg });
   }

   const {
      body: { name, CIN },
   } = req;

   Company.findOne({ CIN }).exec((err: Error, company: any) => {
      if (company) {
         return res
            .status(409)
            .json({ error: `Company with CIN ${CIN} is already present` });
      }
      const newCompany = new Company({ name, CIN });
      newCompany.save((addCompanyErr: Error, addedCompany: any) => {
         if (addCompanyErr) {
            return res.status(400).json({ error: "Unable to add company" });
         }
         return res.status(201).json({});
      });
   });
};

export const getCompanies = async (req: Request, res: Response) => {
   try {
      const companies = await Company.find({});
      const response = companies.map((company: any) => {
         const { name, CIN } = company;
         return { name, CIN };
      });
      return res.status(200).json(response);
   } catch (err) {
      res.status(400).json({ error: "Unable to get companies details" });
   }
};
