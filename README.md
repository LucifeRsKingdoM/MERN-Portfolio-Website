
---

# **MERN Portfolio** ✅  

## 🚀 Introduction  
Welcome to **MERN Portfolio**, a full-stack personal portfolio application built using the **MERN stack** but with **MySQL** instead of MongoDB! 🌟 This project showcases your skills, experience, projects, and more, all with a sleek and modern UI. 🚀  

![Screenshot 2025-03-03 195601](https://github.com/user-attachments/assets/d5d6c7ad-ba84-4dfd-aa49-e4ca04be95b3) , ![Screenshot 2025-03-03 195613](https://github.com/user-attachments/assets/ee5b356e-c705-40e8-9cc6-353922d856ea) , ![Screenshot 2025-03-03 195637](https://github.com/user-attachments/assets/d3226f69-0e95-4490-8b2e-70cfe5c4ce5a) , ![Screenshot 2025-03-03 195625](https://github.com/user-attachments/assets/6700f460-db02-41c8-9022-e8d578637781) , ![Screenshot 2025-03-03 195657](https://github.com/user-attachments/assets/8f6b3094-8d48-4e9f-be6e-9cb6972aaa76)

## 🛠️ Technologies Used  

### **Frontend (Client) 🎨**  
✅ **React.js** ⚛️  
✅ **Tailwind CSS** 🎨 (for beautiful UI)  
✅ **Framer Motion** ✨ (for smooth animations)  
✅ **Axios** 🔄 (for API calls)  
✅ **React Toastify** 🍞 (for notifications)  

### **Backend (Server) 🖥️**  
✅ **Node.js & Express.js** 🚀  
✅ **MySQL** 🛢️ (as the database instead of MongoDB)  
✅ **Sequelize ORM** 🗄️ (for database interactions)  
✅ **bcrypt.js** 🔐 (for password hashing)  
✅ **jsonwebtoken (JWT)** 🛡️ (for authentication)  
✅ **CORS & dotenv** 🌐 (for security & environment variables)  

### **Other Tools 🛠️**  
✅ **Concurrently** 🏃‍♂️ (to run frontend & backend in one command)  

## 🎯 Features  
✅ **Beautiful Portfolio UI** (Showcase your skills and projects)  
✅ **Contact Form with Database Storage** (Stores messages in MySQL)  
✅ **User Authentication** (Register & Login using JWT authentication)  
✅ **Smooth Animations** (Framer Motion for an elegant user experience)  
✅ **Fully Responsive Design** (Works on all screen sizes)  
✅ **SEO Optimized** (Fast and accessible)  

## 🚀 How It Works  

### 📩 **Contact Form Flow**  
- Visitors can send messages using the **contact form**.  
- Messages are **stored in MySQL** using Sequelize ORM.  

### 🏆 **Portfolio Sections**  
- **About Me** 🧑‍💻 (Showcasing your introduction)  
- **Projects** 🚀 (Highlighting your best work)  
- **Skills** ⚡ (Displaying technical expertise)  
- **Experience & Education** 🎓  
- **Contact** 📬 (With form submission to MySQL)  

## 🏁 Getting Started  

### 📦 **Installation**  
Ensure you have **Node.js** and **MySQL** installed.  

1️⃣ **Clone the repository:**  
```sh
git clone https://github.com/LucifeRsKingdoM/MERN-Portfolio.git
```  

2️⃣ **Navigate to the project folder:**  
```sh
cd MERN-Portfolio
```  

3️⃣ **Install dependencies for frontend and backend:**  
```sh
cd client && npm install
cd ../server && npm install
```  

### 🚀 **Running the Application**  

#### ✅ **Run Frontend & Backend Together (Recommended) 🏃‍♂️💨**  
With **concurrently**, you can run both with one command:  
```sh
npm run dev
```  

#### ✅ **Run Frontend & Backend Separately (Optional) 🎭**  
1️⃣ **Start the backend:**  
```sh
cd server
npm start
```  

2️⃣ **Start the frontend:**  
```sh
cd client
npm start
```  

## 🛠️ **Environment Variables**  
Create a `.env` file inside the **server** folder and configure your MySQL database:  
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=mern_portfolio_db
JWT_SECRET=your_jwt_secret_key
```  

## 🛠️ **API Endpoints**  

### 🔐 **Authentication Routes**  
- `POST /api/auth/register` → Register a new user  
- `POST /api/auth/login` → Login and receive JWT token  

### 📩 **Contact Form Routes**  
- `POST /api/contact` → Store contact form submission  

## 🤝 **Contributing**  
Want to contribute? Feel free to **fork** the repo, create a **new branch**, and submit a **pull request**! 🚀  

## 📜 **License**  
This project is licensed under the **MIT License** 📜.  

## 🚀 **Connect with Me**  
👨‍💻 **Portfolio:** [https://luciferskingdom.github.io/Portfolio/](https://luciferskingdom.github.io/Portfolio/)  
🔗 **LinkedIn:** [https://www.linkedin.com/in/yogesh490807/](https://www.linkedin.com/in/yogesh490807/)  
📧 **Email:** personalmail.lucifer@example.com  

Made with ❤️ by **LucifeR** 🎨🚀  





This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
