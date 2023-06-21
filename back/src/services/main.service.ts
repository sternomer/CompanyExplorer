import { createToken } from '../jwt/create';
import * as userRepo from '../mongo/repos/user.repo';
import * as basicCompanyRepo from '../mongo/repos/basicCompany.repo';
import * as fullCompanyRepo from '../mongo/repos/fullCompany.repo';

export const login = async (name: string, password: string) => {
  try {
    const user = await userRepo.getUserByUserNameAndPassword(name, password);

    if (!user) {
      throw new Error('unauthorized');
    }

    const token = createToken(user.userName, user._id.toString());

    return {
      id: user._id,
      userName: user.userName,
      credits: user.credits,
      token,
    };
  } catch (error) {
    console.log(error);

    return null;
  }
};

export const basicCompany = async () => {
  try {
    const basicCompany = await basicCompanyRepo.basicCompany();

    return basicCompany;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fullCompanyByName = async (userId: string, companyId: string) => {
  const user = await userRepo.getUserById(userId);

  if (!user || user.credits < 1) {
    return { error: 'Oops! You’re out of credits. Contact the administrators' };
  }

  try {
    const fullCompany = await fullCompanyRepo.fullCompanyByName(companyId);
    await userRepo.useCredit(userId, -1);

    return fullCompany;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export function getUserCredits(userId: string) {
  return userRepo.getUserCredits(userId);
}
