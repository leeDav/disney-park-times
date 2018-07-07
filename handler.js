'use strict';

const Themeparks = require("themeparks");
const save = require('./functions/save');

module.exports.magicKingdom = async (event, context, callback) => {
  const disneyMagicKingdom = new Themeparks.Parks.WaltDisneyWorldMagicKingdom();
  
  try {
    const rides = await disneyMagicKingdom.GetWaitTimes();
    save.data('magic-kingdom', rides);
    callback(null, { message: 'magicKingdom function executed successfully!', event });
  } catch (err) {
    console.log('There was an error in magicKingdom');
    console.error(err);
  }
};

module.exports.epcot = async (event, context, callback) => {
  const EPCOT = new Themeparks.Parks.WaltDisneyWorldEpcot();

  try {
    const rides = await EPCOT.GetWaitTimes();
    save.data('epcot', rides);
    callback(null, { message: 'Epcot function executed successfully!', event });
  } catch (err) {
    console.log('There was an error in Epcot');
    console.error(err);
  }
};

module.exports.hollywoodStudios = async (event, context, callback) => {
  const hollywoodStudios = new Themeparks.Parks.WaltDisneyWorldHollywoodStudios();

  try {
    const rides = await hollywoodStudios.GetWaitTimes();
    save.data('hollywood-studios', rides);
    callback(null, { message: 'hollywoodStudios function executed successfully!', event });
  } catch (err) {
    console.log('There was an error in hollywoodStudios');
    console.error(err);
  }
};

module.exports.animalKingdom = async (event, context, callback) => {
  const animalKingdom = new Themeparks.Parks.WaltDisneyWorldAnimalKingdom();

  try {
    const rides = await animalKingdom.GetWaitTimes();
    save.data('animal-kingdom', rides);
    callback(null, { message: 'animalKingdom function executed successfully!', event });
  } catch (err) {
    console.log('There was an error in animalKingdom');
    console.error(err);
  }
};

module.exports.universalStudios = async (event, context, callback) => {
  const universalStudios = new Themeparks.Parks.UniversalStudiosFlorida();

  try {
    const rides = await universalStudios.GetWaitTimes();
    save.data('universal-studios', rides);
    callback(null, { message: 'universalStudios function executed successfully!', event });
  } catch (err) {
    console.log('There was an error in universalStudios');
    console.error(err);
  }
};

module.exports.islandsOfAdventure = async (event, context, callback) => {
  const islandsOfAdventure = new Themeparks.Parks.UniversalIslandsOfAdventure();

  try {
    const rides = await islandsOfAdventure.GetWaitTimes();
    save.data('islands-of-adventure', rides);
    callback(null, { message: 'islandsOfAdventure function executed successfully!', event });
  } catch (err) {
    console.log('There was an error in islandsOfAdventure');
    console.error(err);
  }
};
