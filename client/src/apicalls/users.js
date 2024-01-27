const {axiosInstance} = require('.');

// Register a new User

// const RegisterUser = async (name, email, password) => {
//     try {
//         const response = await axiosInstance.post('/register', {
//             name,
//             email,
//             password
//         })
//         return response.data
//     } catch (err) {
//         console.log(err)
//     }
// }

export const RegisterUser = async (payload) => {
  try {
    const response = await axiosInstance.post("api/users/register", payload);
    return response.data;
  } catch (err) {
    return err;
  }
};

// Login a User
export const LoginUser = async (payload) => {
  try {
    const response = await axiosInstance.post("api/users/login", payload);
    return response.data;
  } catch (error) {
    return error;
  }
};
