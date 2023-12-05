import { getAllSports } from './utils/sports.js';

async function testGetAllSports() {
  try {
    const sports = await getAllSports();
    console.log('All sports:', sports);
  } catch (error) {
    console.error('Error:', error);
  }
}

testGetAllSports();
