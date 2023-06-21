import { Request, Response } from 'express';
import * as mainService from '../../services/main.service';

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send('Invalid username or password');
  }

  try {
    const login = await mainService.login(username, password);

    return res.status(200).send(login);
  } catch (error) {
    return res.status(401).send({ message: 'unauthorized' });
  }
};

export const basicCompany = async (_req: Request, res: Response) => {
  const basicCompany = await mainService.basicCompany();
  return res.status(200).send(basicCompany);
};

export const getUserCredits = async (req: Request, res: Response) => {
  const user = req.body.userFromToken;

  const userCredits = await mainService.getUserCredits(user.id);
  const userCreditsString = userCredits.toString();

  return res.status(200).send(userCreditsString);
};

export const fullCompanyByName = async (req: Request, res: Response) => {
  const companyName = req.params.companyName;
  const user = req.body.userFromToken;

  const fullCompany = await mainService.fullCompanyByName(user.id, companyName);

  if (!fullCompany) return res.status(404).send('company not found');
  if (fullCompany.error) return res.status(400).send(fullCompany.error);

  return res.status(200).send(fullCompany);
};
