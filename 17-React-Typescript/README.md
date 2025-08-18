# 🚀 Getting Started with React + TypeScript using Vite

Follow these steps to set up a React + TypeScript project using Vite:

**✅ Prerequisites**
Make sure you have the following installed:
- Node.js (v16 or higher recommended)
- npm (comes with Node.js)

## 🛠️ Steps to Set Up the Project

### Step 1: Open Terminal and Navigate to Desired Directory  
Open a Terminal or Command Prompt and navigate to the folder where you want to set up your React-Typescript project. 

### Step 2: Create a New Vite Project
You can use either of the following methods:  

**Method A: Step-by-step Setup**  
```sh
npm create vite@latest react-app
```  
<h4 align="center">OR</h4>  

**Method B: Skip prompts (Recommended)**
You can write the below command to skip the Steps aand directly jump into Step 5
```sh
npm create vite@latest react-app -- --template react-ts  
```    
**✅ Explanation:**  

The `--` before `--template` is important:
- It tells `npm` to stop parsing arguments for itself.
- Everything after `--` is passed directly to the `create-vite` CLI tool.  

**What this does:**
- Creates a new Vite project in a folder called `react-app`
- Uses the `react-ts` (React + TypeScript) template.   

### Step 3. Since Vite isn't installed initially, type y to continue with the setup. Next, you'll be prompted to choose a framework. Use the down arrow key to select React.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/react_typescript_1.png)](#react_typescript)    

### Step 4. When prompted to choose a variant, select TypeScript.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/react_typescript_2.png)](#react_typescript)   

### Step 5. Then wait for the installation to finish, this will take a few minutes. Change directory to the new app that you built.

```sh
cd react-app
```  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/react_typescript_3.png)](#react_typescript)     

### Step 6. Install Dependencies  

```sh
npm install
```  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/react_typescript_4.png)](#react_typescript)     



Once npm has finished installing all the required packages, open your project directory in VS Code. You should find a node_modules folder inside.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/react_typescript_5.png)](#react_typescript)       

### Step 7. Start the development server:  

```sh
npm run dev
```    

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/react_typescript_6.png)](#react_typescript)   

Vite automatically recompiles your code whenever you make changes, and the output will display the address of your development server.  

### Step 8. Launch the app in your browser by navigating to the local address provided. This is typically http://localhost:5173/.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/react_typescript_7.png)](#react_typescript)    

You can now work on this local version, and Vite will automatically recompile your code whenever you make updates.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/react_typescript_8.png)](#react_typescript)      


## 📁 Project Structure (Optional Overview)

Here's a brief overview of the initial project structure:  

```sh
react-app/
├── node_modules/              # Installed dependencies
├── public/                    # Static assets
│   └── vite.svg
├── src/                       # Main source code
│   ├── assets/                # Default Vite asset folder
│   │   └── react.svg
│   ├── App.css                # App-level styles
│   ├── App.tsx                # Main app component
│   ├── index.css              # Global styles
│   ├── main.tsx               # App entry point
│   └── vite-env.d.ts          # Vite TS declarations
├── .gitignore
├── index.html                 # HTML template
├── package.json
├── tsconfig.json              # TypeScript config
├── tsconfig.node.json         # Node-related TS config for tooling
├── vite.config.ts             # Vite configuration
└── README.md

```    
