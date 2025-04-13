import { login } from '@/app/(auth)/(login)/actions';
import { repositoryUsers } from '@/repository/user';

type User = {
  email: string;
  password: string;
};

export const loginUser = (values: User) => {
  try {
    const user = repositoryUsers.findByEmail(values.email);

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    login(user.id);

    return { success: true, user };
  } catch (error) {
    return { success: false, message: (error as Error).message };
  }
};
