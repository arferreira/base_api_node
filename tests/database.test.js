require('dotenv').config();
const mongoose = require('mongoose');
const database = require('../config/database');
// const {MongoClient} = require('mongodb');




describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await mongoose.connect('mongodb://localhost/bancodedados', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  // afterEach(async () => await mongoose.dropDatabase());

  afterAll(async () => {
    mongoose.connection.close();
  });

  

  it('should insert a doc into collection', async () => {
    const users = mongoose.collection('users');
    const mockUser = {
      _id: '12345',
      name: 'Antonio',
      email: 'email@gmail.com',
      password: 'password',
    };
    await db.insertOne(mockUser);
    const insertedUser = await users.findOne({_id: '12345'});
    expect(insertedUser).toEqual(mockUser);
  });

});