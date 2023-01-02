import { Client, Account } from 'appwrite';

/**
 * Initialization (Configuring) of appwrite SDK by providing endpoint and project id.
 */
const client = new Client()
    .setEndpoint('http://localhost/v1') // Your API Endpoint
    .setProject('63b31391579b40aab7f6');// Your project ID

/**
 * Account initialization using SDK configuration to access appwrite services.
 */
const account = new Account(client)

export default account