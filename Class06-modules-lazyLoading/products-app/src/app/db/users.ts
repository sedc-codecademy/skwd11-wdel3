import { LoginUser } from "../features/auth/interfaces/loginUser";
import { UserData } from "../features/auth/interfaces/registerUser.interface";

// export const users: LoginUser[] = [
//   {
//     email: 'user1@example.com',
//     password: 'password123',
//   },
//   {
//     email: 'user2@example.com',
//     password: 'password456',
//   },
//   {
//     email: 'user3@example.com',
//     password: 'password789',
//   },
// ];

export const usersData: UserData[] = [
  {
    id: '4a7b8c1e2f0d3a9b8c1e2f0d',
    email: 'user1@example.com',
    password: 'password1',
    firstName: 'John',
    lastName: 'Doe',
    address: '123 Main St',
    termsAndConditions: true,
  },
  {
    id: '781a2b9c3d0e4f8a1b2c3d0e',
    email: 'user2@example.com',
    password: 'password2',
    firstName: 'Jane',
    lastName: 'Smith',
    address: '456 Elm St',
    termsAndConditions: true,
  },
  {
    id: 'f5e6d7c8b9a0f5e6d7c8b9a',
    email: 'user3@example.com',
    password: 'password3',
    firstName: 'Alice',
    lastName: 'Johnson',
    address: '789 Oak St',
    termsAndConditions: true,
  },
]