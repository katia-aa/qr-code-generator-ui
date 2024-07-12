# QR Code Generator

Welcome to the QR Code Generator project! This guide will help you set up, install dependencies, and run the project on your local machine.

## Table of Contents
1. [Getting Started](#getting-started)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Running the Project](#running-the-project)
5. [Directory Structure](#directory-structure)
6. [Contributing](#contributing)

## Getting Started

Clone the repository to your local machine:

```sh
git clone https://github.com/katia-aa/qr-code-generator.git
cd qr-code-generator
```

## Prerequisites

Make sure you have the following installed:

- **Node.js** (version 14 or above)
- **Go** (1.16 or above)
- **Git**

If you don't have these installed, you can download them from their respective websites or use Homebrew:

### Installing with Homebrew

#### Node.js
```sh
brew install node
```

#### Go
```sh
brew install go
```

#### Git
```sh
brew install git
```

If you don't have Homebrew installed, you can install it by running the following command in your terminal:

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Installation

### Frontend Setup

Navigate to the root directory and install the dependencies using npm (or yarn, if you prefer):

```sh
npm install
# or if you're using yarn
yarn install
```

### Backend Setup

Navigate to the backend directory and set up the Go backend:

```sh
cd backend
go mod tidy
```

## Running the Project

### Start the Backend

First, start the Go server:

```sh
cd backend
go run main.go
```

The backend should now be running on `http://localhost:8080`.

### Start the Frontend

Open another terminal window, navigate to the root directory, and start the development server:

```sh
cd ..
npm run dev
# or if you're using yarn
yarn dev
```

The frontend should now be running on `http://localhost:5173`.

## Directory Structure

Here's an overview of the project structure:

```
qr-code-generator/
├── backend/            # Go server code
│   ├── main.go         # Main server file
│   └── ...             # Other Go files and directories
├── node_modules/       # Node.js dependencies
├── public/             # Static files
├── src/                # React source files
│   ├── App.tsx         # Main React component
│   └── ...             # Other React components
├── .eslintrc.js        # ESLint configuration
├── .gitignore          # Git ignore file
├── .prettierrc         # Prettier configuration
├── index.html          # Main HTML file
├── package-lock.json   # npm lock file
├── package.json        # npm dependencies and scripts
├── README.md           # Project README file
├── tsconfig.app.json   # TypeScript configuration for the app
├── tsconfig.json       # Root TypeScript configuration
├── tsconfig.node.json  # TypeScript configuration for Node.js
└── vite.config.ts      # Vite configuration
```

## Contributing

Feel free to contribute! Open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch: `git checkout -b new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin new-feature`
5. Submit a pull request

---

If you have any questions or run into any issues, just let me know! Happy coding! 🚀

