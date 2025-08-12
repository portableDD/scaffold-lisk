🎉 Scaffold Lisk Birthday Party DApp 🎉
This repository contains a decentralized application (DApp) built using the Scaffold Lisk template. Instead of a simple guestbook, I've created a fun Birthday Party Guest List to demonstrate how to deploy and interact with a smart contract on the Lisk blockchain.

🎂 Project Overview
The main goal was to learn the fundamentals of Scaffold Lisk by building a complete DApp. This involved:

Forking the official Scaffold Lisk project.

Creating a development branch to manage my work.

Developing and deploying a custom "BirthdayPartyGuest" smart contract to the Lisk Sepolia testnet.

Building a user-friendly frontend that allows users to RSVP for the party and view the guest list.

Hosting the final project on Vercel for anyone to see and interact with.

🚀 My Solution
Smart Contract
I wrote a simple BirthdayPartyGuest smart contract in Solidity. It allows party-goers to add their name and a birthday message to the guest list. The contract securely stores each RSVP entry, including the guest's address and a timestamp.

Frontend Integration
I used the powerful Scaffold Lisk hooks (useScaffoldContractRead and useScaffoldContractWrite) to seamlessly connect the frontend to the blockchain.

The UI provides a simple form for users to RSVP and displays all current guests in a clean, real-time list.

The contract's ABI was automatically handled by Scaffold Lisk, making development incredibly fast.

Live Demo
The entire DApp is hosted live on Vercel!

Live App: [https://scaffold-lisk-nextjs-qmxk.vercel.app/](https://scaffold-lisk-nextjs-nine.vercel.app/)

🛠️ How to Run Locally
1. Fork & Clone
First, fork the repository on GitHub, and then clone your fork to your local machine.

# Clone your forked repository
git clone [https://github.com/portableDD/scaffold-lisk.git](https://github.com/portableDD/scaffold-lisk.git)
cd scaffold-lisk

# Create and switch to a new branch for your work
git checkout -b my-birthday-party-feature

2. Install Dependencies
yarn install

3. Configure Environment
Create a .env file in the root of your project and add your wallet's private key and the Lisk Sepolia RPC URL.

# Example for Hardhat deployment
PRIVATE_KEY="your-wallet-private-key"
RPC_URL="[https://rpc.sepolia-api.lisk.com](https://rpc.sepolia-api.lisk.com)"

4. Compile & Deploy
Compile and deploy the smart contract to the Lisk Sepolia testnet.

# Compile the contract
yarn hardhat compile

# Deploy the contract
yarn hardhat run scripts/deploy.ts --network sepolia

5. Run the Frontend
yarn dev

Visit http://localhost:3000 in your browser to see the app in action!

🧗‍♀️ Challenges Faced
Insufficient Funds: Ran into errors when sending transactions because my wallet didn't have enough testnet LSK to cover gas fees. A gift from a friend fix that!

Network Configuration: Ensuring the correct RPC endpoints and network settings were configured for the Lisk Sepolia testnet required some trial and error.

Async Operations: Debugging the flow between the frontend and the smart contract took some effort, especially managing loading states and handling asynchronous transaction confirmations.

Despite the challenges, it was a fantastic learning experience! 🥳

✍️ Author
GitHub: @PortableDD

LinkedIn: Emmanuel Dorcas

Farcaster: @portabledd

Thank you for checking out my project! Feel free to reach out with any questions.
