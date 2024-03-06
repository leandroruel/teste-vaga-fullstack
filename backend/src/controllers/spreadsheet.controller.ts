import { Request, Response } from "express";
import * as spreadsheetService from "../services/spreadsheet.service";

/**
 * Get a spreadsheet
 * @param req
 * @param res
 */
async function get(req: Request, res: Response) {
  const file = "myfile";
  spreadsheetService.upload(file);
}

/**
 * Update a spreadsheet
 * @param req
 * @param res
 */
async function update(req: Request, res: Response) {}

export { get, update };
