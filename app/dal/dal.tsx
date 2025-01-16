// import React from "react";
// import RNFS from 'react-native-fs';
// import { UserData } from '../types/userdata';  // Import the User type for TypeScript type checking

// export const getUsers = async ():Promise<UserData[]> => {
//     try {
//       const fileExists = await RNFS.exists(FILE_PATH);
//       if (!fileExists) {
//         throw new Error('User data file does not exist.');
//       }
  
//       const data = await RNFS.readFile(FILE_PATH);
//       return JSON.parse(data);
//     } 
//     catch (error) {
//       console.error('Error reading file:', error);
//       return [];
//     }
// }

// // export const saveUsers = async (users: UserData[]): Promise<void> => {
// //     try {
// //       const data = JSON.stringify(users, null, 2);
// //       await RNFS.writeFile(FILE_PATH, data, 'utf8');
// //     } catch (error) {
// //       console.error('Error writing to file:', error);
// //     }
// //   };
  
// //   // Example function to update a user
// //   export const updateUser = async (username: string, updatedUser: Partial<UserData>): Promise<void> => {
// //     const users = await getUsers();
// //     const userIndex = users.findIndex(user => user.userName === username);
// //     if (userIndex !== -1) {
// //       users[userIndex] = { ...users[userIndex], ...updatedUser };
// //       await saveUsers(users);  // Save the updated users list
// //     } else {
// //       console.error('User not found');
// //     }
// //   };