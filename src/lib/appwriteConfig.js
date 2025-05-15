// src/appwriteConfig.js
import { Client, Account, Databases } from 'appwrite';


const client = new Client()
  .setEndpoint(import.meta.env.VITE_ZAFIQUE_APPWRITE_AUTH_ENDPOINT).setProject(import.meta.env.VITE_ZAFIQUE_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);