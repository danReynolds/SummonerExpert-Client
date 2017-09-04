'use strict';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');

const fs = require('fs');
const fetch = require('node-fetch');

const API_VERSION = '7.5.2';
const FILE_BASE_PATH = '/app/src/static';
const DATA_BASE_URL = `https://ddragon.leagueoflegends.com/cdn/${API_VERSION}/data/en_US`;
const IMAGE_BASE_URL = `https://ddragon.leagueoflegends.com/cdn/${API_VERSION}/img`;

// Fetch Avatars
const fetchAvatars = async () => {
  console.log('Fetching profile icons...');
  try {
    console.log('Fetched profile icons...');
    const avatarResponse = await fetch(`${DATA_BASE_URL}/profileicon.json`);
    let avatars = await avatarResponse.json();
    avatars = {
      data: Object.keys(avatars.data),
      url: `${IMAGE_BASE_URL}/profileicon`,
    };
    fs.writeFile(`${FILE_BASE_PATH}/avatars.json`, JSON.stringify(avatars), (err) => {
      if (err) {
        throw err;
      }
      console.log('Saved profile icons...');
    });
  } catch (error) {
    throw error;
  }
};

// Fetch Champions
const fetchChampions = async () => {
  console.log('Fetching champion icons...');
  try {
    console.log('Fetched champion icons...');
    const championResponse = await fetch(`${DATA_BASE_URL}/champion.json`);
    let champions = await championResponse.json();
    champions = {
      data: Object.values(champions.data).reduce((acc, champion) => {
        acc[champion.name] = champion.image.full;
        return acc;
      }, {}),
      url: `${IMAGE_BASE_URL}/champion`,
    }
    fs.writeFile(`${FILE_BASE_PATH}/champions.json`, JSON.stringify(champions), (err) => {
      if (err) {
        throw err;
      }
      console.log('Saved champion icons...');
    });
  } catch (error) {
    throw error;
  }
};

// Fetch Items
const fetchItems = async () => {
  console.log('Fetching item icons...');
  try {
    console.log('Fetched item icons...');
    const itemResponse = await fetch(`${DATA_BASE_URL}/item.json`);
    let items = await itemResponse.json();
    items = {
      data: Object.values(items.data).reduce((acc, item) => {
        acc[item.name] = item.image.full;
        return acc;
      }, {}),
      url: `${IMAGE_BASE_URL}/item`,
    }
    fs.writeFile(`${FILE_BASE_PATH}/items.json`, JSON.stringify(items), (err) => {
      if (err) {
        throw err;
      }
      console.log('Saved item icons...');
    });
  } catch (error) {
    throw error;
  }
};

fetchAvatars();
fetchChampions();
fetchItems();
