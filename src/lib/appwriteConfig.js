// src/appwriteConfig.js
import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://nyc.cloud.appwrite.io/v1') // e.g. https://cloud.appwrite.io/v1
  .setProject('68239aa40006c0d6ceba'); // Found in Appwrite console

export const account = new Account(client);
export const databases = new Databases(client);