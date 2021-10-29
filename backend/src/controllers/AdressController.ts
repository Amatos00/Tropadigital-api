import { Request, Response } from "express";
import { AdressModel } from "../database/models/AdressModel";

class AdressController {
  async findAll(req: Request, res: Response) {
    const adress = await AdressModel.findAll();
    return adress.length > 0
      ? res.status(200).json(adress)
      : res.status(204).send();
  }

  async findOne(req: Request, res: Response) {
    const { adressId } = req.params;
    const adress = await AdressModel.findOne({
      where: {
        id: adressId,
      },
    });
    return adress ? res.status(200).json(adress) : res.status(204).send();
  }

  async create(req: Request, res: Response) {
    const { street, number, city, uf, zipcode, district, complement } =
      req.body;
    const adress = await AdressModel.create({
      street,
      number,
      city,
      uf,
      zipcode,
      district,
      complement,
    });

    return res.status(201).json(adress);
  }

  async update(req: Request, res: Response) {
    const { adressId } = req.params;
    await AdressModel.update(req.body, { where: { id: adressId } });

    return res.status(204).send();
  }

  async destroy(req: Request, res: Response) {
    const { adressId } = req.params;
    await AdressModel.destroy({ where: { id: adressId } });

    return res.status(204).send();
  }
}

export default new AdressController();
