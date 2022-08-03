import mongoose from "mongoose";


interface IUser {
  name: string,
  email: string,
  password: string,
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});


const User = mongoose.model('User', userSchema);


export { User };