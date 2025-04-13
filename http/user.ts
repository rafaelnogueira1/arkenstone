import { create, findById, update } from '@/repository/user';
import { findByEmail } from '@/repository/user';

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

const register = (user: Omit<User, 'id'>) => {
  const userAlreadyExists = findByEmail(user.email);

  if (userAlreadyExists) {
    throw new Error('Usuário já cadastrado');
  }

  const newUser = {
    id: crypto.randomUUID(),
    name: user.name,
    email: user.email,
    password: user.password,
  };

  create(newUser);
};

export const registerUser = (user: Omit<User, 'id'>) => {
  try {
    register(user);
    return { success: true, message: 'Usuário criado com sucesso' };
  } catch (error) {
    return { success: false, message: 'Erro ao criar usuário' };
  }
};

export const getUserById = async (id: string) => {
  try {
    return findById(id);
  } catch (error) {
    return { success: false, message: 'Erro ao buscar usuário' };
  }
};

export const updateUser = (user: User) => {
  try {
    update(user);
    return { success: true, message: 'Usuário atualizado com sucesso' };
  } catch (error) {
    return { success: false, message: 'Erro ao atualizar usuário' };
  }
};
