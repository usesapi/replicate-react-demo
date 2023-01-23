# Sapi
This project uses [Sapi](https://usesapi.com) to allow using the replicate API without developing a backend. To learn more, check out this tutorial:

# How To Use

## Prerequisites

- Node.js and npm (comes with Node) installed on your machine. You can download Node.js from [here](https://nodejs.org/en/download/).
- Create-React-App (CRA) installed on your machine. You can install it by running `npm install -g create-react-app`

## Cloning the app

Open a terminal and navigate to the directory where you want to clone the app.\
Run the command `git clone git@github.com:usesapi/replicate-react-native-demo.git`

## Replicate
Sign in to your replicate account, open the [Account](https://replicate.com/account) page and copy your API Token.

## Configure your Sapi Proxy

Sign in to [Sapi](https://console.usesapi.com), create a new Replicate Sapi and configure it with the Replicate API Token.\
Configure your Replicate Sapi ID in the `.env` file

## Running the app

Run the command `npm install` to install all the necessary dependencies.\
Use the `npm start` command to run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.