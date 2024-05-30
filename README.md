# MERN-REDUX-SOCKET-SocialMediaApp

Welcome to the MERN (MongoDB, Express.js, React.js, Node.js) stack project! This comprehensive guide will walk you through every aspect of this project, including its structure, setup instructions, usage, API endpoints, backend, frontend, contributing guidelines, license information, and how to get in touch for support or inquiries.

## Introduction

This project is a social media platform that allows users to create profiles, connect with friends, share posts, and engage in real-time messaging. It provides features commonly found in popular social media applications, such as posting updates, commenting, liking, and direct messaging.


**Features:**

1. **User Authentication:** Users can sign up, log in, and log out securely.
2. **Profile Management:** Users can create and update their profiles, including uploading profile pictures and updating personal information.
3. **Social Networking:** Users can connect with friends, follow/unfollow other users, and view their profiles.
4. **Post Sharing:** Users can create, edit, and delete posts, as well as like, comment on, and share posts created by others.
5. **Real-time Messaging:** Users can engage in real-time messaging with their connections, including sending text messages and multimedia files.

## Live Demo

You can try out the live demo of the app [here](https://effortless-malabi-edaf53.netlify.app/).

## Folder Structure

```
social-media-platform/
│
|
├── server/
│   ├── models/
│   │   ├── User.js
│   │   ├── Post.js
│   │   ├── Message.js
│   │   └── ...
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   ├── postRoutes.js
│   │   ├── messageRoutes.js
│   │   └── ...
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── postController.js
│   │   ├── messageController.js
│   │   └── ...
│   ├── middlewares/
│   │   ├── authMiddleware.js
│   │   ├── errorMiddleware.js
│   │   └── ...
│   ├── server.js
│  └── ...
│
|
|── socket-server/
│   ├── index.js
│   ├── sockets/
│   │   ├── chatSockets.js
│   │   ├── notificationSockets.js
│   │   └── ...
│   ├── utils/
│   │   ├── socketUtils.js
│   │   └── ...
│   └── ...
|
|
└── client/
    ├── components/
    │   ├── Navbar.js
    │   ├── ProfileCard.js
    │   ├── Post.js
    │   ├── ChatBox.js
    │   └── ...
    ├── pages/
    │   ├── Home.js
    │   ├── Profile.js
    │   ├── Auth.js
    │   ├── Chat.js
    │   └── ...
    ├── api/
    │   ├── userRequests.js
    │   ├── postRequests.js
    │   ├── messageRequests.js
    │   └── ...
    ├── slice/
    │   ├── authSlice.js
    │   ├── userSlice.js
    │   ├── postSlice.js
    │   ├── messageSlice.js
    │   └── ...
    ├── utils/
    │   ├── formatDate.js
    │   ├── validateEmail.js
    │   └── ...
    ├── App.js
    └── ...

```


## Screenshots

<!-- Include screenshots or GIFs of your app here to give users a visual representation of what your app looks like. -->
<img src="https://github.com/nishkarsh25/MERN-REDUX-SOCKET-SocialMediaApp/blob/main/Screenshots/ss1.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/MERN-REDUX-SOCKET-SocialMediaApp/blob/main/Screenshots/ss2.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/MERN-REDUX-SOCKET-SocialMediaApp/blob/main/Screenshots/ss3.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/MERN-REDUX-SOCKET-SocialMediaApp/blob/main/Screenshots/ss4.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/MERN-REDUX-SOCKET-SocialMediaApp/blob/main/Screenshots/ss5.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/MERN-REDUX-SOCKET-SocialMediaApp/blob/main/Screenshots/ss6.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/MERN-REDUX-SOCKET-SocialMediaApp/blob/main/Screenshots/ss7.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/MERN-REDUX-SOCKET-SocialMediaApp/blob/main/Screenshots/ss8.png" alt="Screenshot 1" width="1000"> 

## GIF's

<img src="https://github.com/nishkarsh25/MERN-REDUX-SOCKET-SocialMediaApp/blob/main/Screenshots/ss9.gif" alt="Screenshot 1" width="1000"> 

## Technologies Used:
- **Frontend:** 
  - React.js: A JavaScript library for building user interfaces.
  - Redux: A predictable state container for managing application state.
  - React Router: A routing library for React applications.
  - Axios: A promise-based HTTP client for making API requests.
  - CSS: Cascading Style Sheets for styling the user interface, with custom styling.
- **Backend:** 
  - Node.js: A JavaScript runtime environment for building server-side applications.
  - Express.js: A web application framework for Node.js used for building APIs.
  - MongoDB: A NoSQL database for storing data in JSON-like documents, used with Mongoose ORM for data modeling and interaction.
- **Authentication:** 
  - JSON Web Tokens (JWT): A compact, URL-safe means of representing claims to be transferred between two parties securely.
- **Real-time Communication:** 
  - Socket.IO: A JavaScript library for real-time web applications, enabling bidirectional communication between clients and servers.
- **Styling:** 
  - Custom CSS: Custom styling using CSS variables and standard CSS properties.
- **State Management:** 
  - Redux Toolkit: An opinionated, batteries-included toolset for efficient Redux development.
- **Form Handling:** 
  - React Hook Form: A library for managing form state and validation in React applications.
- **File Upload:** 
  - Multer: A middleware for handling multipart/form-data, primarily used for file uploads.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nishkarsh25/MERN-REDUX-SOCKET-SocialMediaApp.git
   ```
2. Navigate to the project branch:

   ```bash
   git checkout <branch-name>
   ```
   Replace `<branch-name>` with the name of the branch you want to checkout.
   
3. Start the Backend Server: Launch the backend Node.js server.

   ```bash
   cd server
   node server.js
   ```
4. Start the Frontend Development Server: Run the React development server for the frontend application.

   ```bash
   cd client
   npm start
   ```
5. Start the socket Server: Launch the backend Node.js server.

   ```bash
   cd socket
   node server.js
   ```

## Usage

1. **Run the development server**:

   ```bash
   cd client
   npm start
   ```
2. **Open your browser** and navigate to http://localhost:3000 to view the app.

## How to Use:
1. **Sign Up / Log In:**
   - Open the application in your browser.
   - If you're a new user, click on the "Sign Up" button and fill in the required details to create an account.
   - If you already have an account, click on the "Log In" button and enter your credentials.
2. **Home Page:**
   - Upon successful login, you will be directed to the home page.
   - Here, you can view posts from users you follow, like, comment, and share posts.
3. **Profile Page:**
   - Click on your profile picture or username to access your profile page.
   - View and edit your profile information, including profile picture, bio, and other details.
   - View your posts, followers, following, and other profile-related information.
4. **Chat:**
   - Navigate to the chat section to engage in real-time messaging with your friends.
   - View your chat history and send messages to other users.
5. **Search:**
   - Use the search functionality to find users, posts, or specific content on the platform.
6. **Notifications:**
   - Receive notifications for likes, comments, mentions, and other activities related to your posts or profile.
7. **Settings:**
   - Access account settings to customize privacy, security, notification preferences, and other account-related settings.
8. **Logout:**
   - Click on the logout button to securely log out of your account.

## How to Use Functions:
1. **Posting:**
   - Click on the "Create Post" button to compose and share a new post.
   - Enter your post content, add images or videos if desired, and click on the "Post" button to share it with your followers.
2. **Commenting:**
   - Click on the comment icon below a post to view existing comments or add a new comment.
   - Enter your comment text and click on the "Comment" button to post it.
3. **Liking:**
   - Click on the heart icon below a post to like it.
   - The heart icon will change color to indicate that you've liked the post.
4. **Following:**
   - Visit another user's profile and click on the "Follow" button to follow them.
   - You'll receive updates from users you follow on your home feed.
5. **Messaging:**
   - Navigate to the chat section to view your conversations and send messages.
   - Click on a chat to view the conversation history and send new messages to other users.

## API Endpoints:
1. **User Endpoints:**
   - `/api/users/signup`: POST request to create a new user account.
   - `/api/users/login`: POST request to authenticate and log in a user.
   - `/api/users/profile/:id`: GET request to retrieve user profile information by ID.
   - `/api/users/profile/update`: PUT request to update user profile information.
   - `/api/users/:id/posts`: GET request to retrieve posts by a specific user.
2. **Post Endpoints:**
   - `/api/posts/create`: POST request to create a new post.
   - `/api/posts/:id`: GET request to retrieve post details by ID.
   - `/api/posts/:id/like`: PUT request to like a post.
   - `/api/posts/:id/comment`: POST request to add a comment to a post.
3. **Chat Endpoints:**
   - `/api/chats/create`: POST request to create a new chat.
   - `/api/chats/:id/messages`: GET request to retrieve chat messages by chat ID.
   - `/api/chats/:id/messages/send`: POST request to send a message in a chat.

For detailed API documentation, refer to the backend source code and documentation.



## Contributing

Contributions to this project are highly appreciated! Whether you discover bugs, have feature requests, or wish to contribute improvements, your input is valuable. Here's how you can contribute:

- **Report Issues:** If you encounter any bugs or issues while using MyCalculatorApp, please open an issue on the GitHub repository. Be sure to provide detailed information about the problem and steps to reproduce it.

- **Submit Pull Requests:** If you have enhancements or fixes to propose, feel free to submit a pull request. Contributions that improve the functionality, usability, or performance of this app are welcomed and encouraged.

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository**.
2. **Create a New Branch** (`git checkout -b feature/your-feature-name`).
3. **Make Your Changes**.
4. **Commit Your Changes** (`git commit -am 'Add some feature'`).
5. **Push to the Branch** (`git push origin feature/your-feature-name`).
6. **Create a New Pull Request**.

## License

This project is licensed under the [The 3-Clause BSD License](LICENSE).Feel free to explore, modify, and contribute to this project as you see fit. Your feedback and contributions are greatly appreciated! 🚀✨


## Acknowledgments

This project is made possible by the contributions and support of various individuals and communities. Special thanks to:

- **Tailwind CSS Team:** For developing Tailwind CSS, a versatile CSS framework that simplifies web development and enhances user interfaces.
  
- **Open Source Community:** For fostering collaboration, innovation, and the sharing of knowledge, which enriches projects like My Form Validation and makes them accessible to all.


## Credits

This project wouldn't be possible without the contributions of the following:

- **React**: A JavaScript library for building user interfaces. Visit [React](https://reactjs.org/) for more information.

- **React Icons**: React Icons provides a comprehensive library of icons for React applications. Visit [React Icons](https://react-icons.github.io/react-icons/) for more information.
  
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs rapidly. Visit [Tailwind CSS](https://tailwindcss.com/) for more information.

- **FontAwesome**: A popular icon library providing a vast collection of icons for web development. Visit [FontAwesome](https://fontawesome.com/) for more information.

- **Netlify**: Netlify provides seamless deployment and hosting solutions, making it easy to deploy web applications and share them with the world. Visit [Netlify](https://www.netlify.com/) for more information.

- **Render**: Render offers a modern cloud platform for deploying and running web applications, databases, and other services. Visit [Render](https://render.com/) for more information.

- **MongoDB Atlas**: MongoDB Atlas is a fully managed cloud database service for modern applications. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for more information.

- **React Router**: React Router is a library for routing in React applications, allowing for navigation between different components. Visit [React Router](https://reactrouter.com/) for more information.

- **Redux**: Redux is a predictable state container for JavaScript applications, providing a centralized store for managing application state. Visit [Redux](https://redux.js.org/) for more information.

- **React Redux**: React Redux is the official React binding for Redux, enabling React components to interact with the Redux store. Visit [React Redux](https://react-redux.js.org/) for more information.

- **Socket.IO**: Socket.IO enables real-time, bidirectional, and event-based communication between web clients and servers. Visit [Socket.IO](https://socket.io/) for more information.

- **Axios**: Axios is a promise-based HTTP client for making asynchronous requests in JavaScript applications. Visit [Axios](https://axios-http.com/) for more information.

- **Express**: Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. Visit [Express](https://expressjs.com/) for more information.

- **Mongoose**: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js, providing a straightforward schema-based solution for modeling application data. Visit [Mongoose](https://mongoosejs.com/) for more information.




## Author

- **Nishkarsh Gupta**
  - GitHub: [nishkarsh25](https://github.com/nishkash25)
  - Email: bm21btech11016@gmail.com

