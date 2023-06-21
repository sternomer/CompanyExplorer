import userModel from '../models/user.model';

export const getUserByUserNameAndPassword = async (userName: string, password: string) => {
  const user = await userModel.findOne({ userName, password });

  return user;
};

export const useCredit = async (userId: string, num: number) => {
  const credit = await userModel.findByIdAndUpdate(userId, { $inc: { credits: num } });

  return credit;
};

export const getUserById = async (userId: string) => {
  const user = await userModel.findById(userId);

  return user;
};

export const getUserCredits = async (userId: string) => {
  const user = await userModel.findById(userId);

  return user?.credits;
};
