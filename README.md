# Sapi
This project uses [Sapi](https://usesapi.com) to allow using the replicate API without developing a backend. To learn more, visit the full tutorial at: https://sapi.gitbook.io/replicate.com-apps-tutorials/react-app-create-your-own-pokemon

# How To Use

## Prerequisites

1. Node.js and npm (comes with Node) installed on your machine. We recomment to use [NVM](https://github.com/nvm-sh/nvm).
2. Create-React-App (CRA) installed on your machine. You can install it by running `npm install -g create-react-app`

## Cloning the app

Open a terminal and navigate to the directory where you want to clone the app.\
Run the command `git clone git@github.com:usesapi/replicate-react-native-demo.git`

## Get Replicate API Token
Sign in to your replicate account, open the [Account](https://replicate.com/account) page and copy your API Token.

## Configure your Sapi Proxy

Sign in to [Sapi](https://console.usesapi.com), create a new Replicate Sapi and configure it with the Replicate API Token.\
Configure your Replicate Sapi ID in the `.env` file

```
REACT_APP_SAPI_ID=api-replicate-com-....
```

## Running the app

Run the command `npm install` to install all the necessary dependencies.\
Use the `npm start` command to run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
