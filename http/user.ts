import { repositoryUsers } from '@/repository/user';

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

const register = (user: Omit<User, 'id'>) => {
  const userAlreadyExists = repositoryUsers.findByEmail(user.email);

  if (userAlreadyExists) {
    throw new Error('Usuário já cadastrado');
  }

  try {
    const newUser = {
      id: crypto.randomUUID(),
      name: user.name,
      email: user.email,
      password: user.password,
    };

    repositoryUsers.create(newUser);
  } catch (error) {
    return { success: false, message: (error as Error).message };
  }
};

export const registerUser = (user: Omit<User, 'id'>) => {
  try {
    register(user);
    return { success: true, message: 'Usuário criado com sucesso' };
  } catch (error) {
    return { success: false, message: (error as Error).message };
  }
};

export const getUserById = async (id: string) => {
  try {
    return repositoryUsers.findById(id);
  } catch (error) {
    return { success: false, message: (error as Error).message };
  }
};

export const updateUser = (user: User) => {
  try {
    repositoryUsers.update(user);
    return { success: true, message: 'Usuário atualizado com sucesso' };
  } catch (error) {
    return { success: false, message: (error as Error).message };
  }
};
