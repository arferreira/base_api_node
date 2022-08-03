import mongoose from 'mongoose';

const db = 'database_test';
const databaseUri = `mongodb://localhost/${db}`

beforeAll(async () => {
  await mongoose.connect(databaseUri);
})


describe('Connection database MongoDB', () => {

  test('Connection database MongoDB', () => {
    // TODO: test
  });

});