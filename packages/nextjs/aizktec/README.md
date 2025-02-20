# Aizktec

Welcome to **Aizktec!** This repository is the heart of our innovative project that aims to blend cutting-edge **blockchain technologies** with an intuitive **web app** experience.  

Our vision is to create a **decentralized platform** that leverages:
- **Smart contracts** for secure and automated transactions.  
- **Advanced UTXO models** to enhance scalability and privacy.  
- **Zero-knowledge proofs** for maintaining security and user confidentiality.  

All of this is seamlessly integrated into a user-friendly **Next.js web interface**.

---

## **The Web Interface**

The **Aizktec** web app is built using:  

- **Next.js** – A powerful React framework for server-side rendering and static site generation.  
- **Bun** – A modern, fast package manager and JavaScript runtime.  
- **ShadCN Components** – A collection of beautifully designed UI elements for a seamless user experience.  

This is where the **graphical side** of our blockchain-powered platform comes to life.

---

## **Getting Started**

To run the project locally, follow these steps:

### **1. Clone the Repository**
First, open your terminal and clone the repository:

```sh
git clone https://github.com/aizktec/aizktec.git
```

Navigate into the project directory:

```sh
cd packages/nextjs/aizktec
```

### **2. Install Bun**
Ensure you have **Bun** installed. If not, install it with:

```sh
curl -fsSL https://bun.sh/install | bash
```

After installation, restart your terminal and check if Bun is installed correctly:

```sh
bun --version
```

### **3. Install Dependencies**
Inside the `aizktec` directory, install the project dependencies using Bun:

```sh
bun install
```

### **4. Set Up Environment Variables**
Create a `.env` file in the root of the `aizktec` directory and configure your environment variables:

```sh
cp .env.example .env
```

Update the `.env` file with the required values.

### **5. Run the Development Server**
Start the project locally with:

```sh
bun dev
```

The app will be available at:

```
http://localhost:3000/
```

---

## **Project Structure**

```
packages/
  nextjs/
    aizktec/
      README.md  # This file
      src/       # Source code
      public/    # Static assets
      .env       # Environment variables
      package.json
      tsconfig.json
      next.config.js
```

As the project evolves, each folder will include its own detailed **README** with specific instructions and documentation.

---

## **Contributing**
We welcome contributions! Please ensure your changes align with our project goals and follow best coding practices.

🚀 **Let's build the future of decentralized web apps!**

