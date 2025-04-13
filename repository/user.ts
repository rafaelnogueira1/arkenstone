type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export const create = (user: User) => {
  const users = localStorage.getItem('users');

  if (users) {
    const usersArray = JSON.parse(users);
    usersArray.push(user);
    localStorage.setItem('users', JSON.stringify(usersArray));
  } else {
    localStorage.setItem('users', JSON.stringify([user]));
  }
};

export const update = (user: User) => {
  const users = localStorage.getItem('users');

  if (users) {
    const usersArray = JSON.parse(users);
    const userIndex = usersArray.findIndex((user: User) => user.id === user.id);
    usersArray[userIndex] = user;
    localStorage.setItem('users', JSON.stringify(usersArray));
  }
};

export const findById = (id: string) => {
  const users = localStorage.getItem('users');

  if (!users) {
    throw new Error('Usuário não encontrado');
  }

  const usersArray = JSON.parse(users);
  return usersArray.find((user: User) => user.id === id);
};

export const findByEmail = (email: string) => {
  const users = localStorage.getItem('users');

  if (!users) {
    throw new Error('Usuário não encontrado');
  }

  const usersArray = JSON.parse(users);
  return usersArray.find((user: User) => user.email === email);
};
