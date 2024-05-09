# GUESTIFY - Find IT 2024

Guestify - "**transforms event planning from inception to memory, offering a sustainable technology solution for modern Indonesia**. By integrating digital RSVP and guest management with QR code technology, Guestify ensures efficient event execution, reduces environmental impact by minimizing paper use, and enhances guest experience through seamless digital interactions. Aimed at propelling Indonesia towards its Golden Vision 2045, Guestify stands as the optimal solution for event organizers seeking to embrace innovation and sustainability"




## Guestify Team

<p align="center" style="margin: 60px 0px">
  <img src="https://res.cloudinary.com/dlx2svkha/image/upload/v1715251000/Group_376_rgkkxu.png" alt="Michael Sihotang" width="25%">
  <img src="https://via.placeholder.com/100x1/0000/0000.png" alt="spacer" style="width: 5%;">
  <img src="https://res.cloudinary.com/dlx2svkha/image/upload/v1715251001/Group_377_iekbrd.png" alt="Timothy Subekti" width="25%">
    <img src="https://via.placeholder.com/100x1/0000/0000.png" alt="spacer" style="width: 5%;">
  <img src="https://res.cloudinary.com/dlx2svkha/image/upload/v1715251403/Group_378_1_p0o6ee.png" alt="Felisa Aidadora D" width="25%">
</p>

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Documentation](#api)
- [Deployment](#deployment)
- [Contributors](#contributors)
- [Feedback](#feedback)
- 
## Overview
**Guestify - A Sustainable and Intelligent Guest Management Solution**

Guestify is a digital guest management application that streamlines event planning by replacing traditional, paper-based RSVP and guest book systems with modern, digital solutions. Designed to promote sustainable technology and operational efficiency, Guestify aims to support Indonesia's progress toward its Golden Vision 2045 by providing event organizers and guests with innovative tools for optimal event management.
## Features
- **Input Tamu** : Event organizers can streamline their invitation management with Guestify's efficient spreadsheet integration. By downloading a pre-formatted template, filling it with guest details, and uploading it back, the system automatically generates unique invitation codes and sends out the invitations via email. This automation minimizes errors and ensures accurate data handling, providing a seamless way to invite and manage guests for any event.
- **RSVP System** : Guestify's RSVP system empowers organizers to confirm guest attendance before the event begins, helping them prepare optimally by understanding their expected turnout. Guests receive detailed event information directly through this feature, ensuring all attendees are fully informed and engaged. This direct communication channel helps create a smoother and more personalized guest experience.
- **Digital Guest Book** : As guests arrive and scan their unique QR codes, Guestify’s digital guest book logs their attendance and relevant information like gift details and preferences. The system compiles this data into a real-time dashboard, offering valuable insights into guest demographics and trends. This comprehensive view helps organizers make data-driven decisions on the spot and provides a solid foundation for post-event analysis.
- **QR Code System** : Guestify’s QR code system provides a fast and accurate method for guest check-ins, reducing wait times at the venue. Each guest’s QR code is scanned upon entry to precisely track attendance and other essential data, enhancing event security while providing valuable insights. This feature helps organizers manage access efficiently, ensuring only invited guests attend while facilitating a smooth, pleasant experience for all participants.
## Technologies Used
### Frontend
- **Framework :** React Native (Expo)
- **Material Design Library :** React Native Paper
- **CSS Framework :** NativeWind

### Backend
- **Framework :** Express.js
- **Email Templating :** Nodemailer
- **QR Code Generator :** qrcode

### Database
- **Cloud Database :** Firestore
- **Cloud Storage :** Firebase



## Getting Started

### Prerequisites

Before you begin setting up Guestify on your system, ensure you meet the following prerequisites to ensure a smooth setup and execution environment:
1. **Node.js :** 
    - **Description :** You need Node.js version 20.10.0 or higher installed on your machine. Node.js is essential as it will run the npm package manager and the server environment for your project.

    - **Download** : [Node.js installation](https://nodejs.org/en/)

2.  **Expo CLI**
    - **Description**: The command-line tool for interacting with Expo during development.

    - **Installation**: Run this command in your terminal to install Expo CLI:
      ```bash
      npm install -g expo-cli
      ```

3.  **Git :** 
    - **Description :** Version control is handled via Git. Make sure you have Git installed to clone the project repository.

    - **Download :** [Git installation](https://git-scm.com/downloads)

4.  **Google Cloud Storage & Firebase Account :** 
    - **Description :** Set up accounts for Google Cloud Storage and Firebase Admin SDK. Make sure to obtain necessary credentials and API keys.

    - **Create Account :** [Tutorial Create Firebase Account](https://youtu.be/oVlbJTFbHDE)

5.  **Google App Password :**
    - **Description :** Google App Password are used for email blasting

    - **Create Google App Password :** [Tutorial Create App Password](https://knowledge.workspace.google.com/kb/how-to-create-app-passwords-000009237)

### Installation

First of all you need to **clone this project**

```bash
git clone https://github.com/TimothySubekti0322/Guestify-FindIT.git
 ```

#### Backend Setup

Navigate to the backend directory

```bash
cd Guestify-FindIT
cd server
```

Then install all the dependencies by running this command 

```bash
npm install
```

Now Upload your serviceAccount.json in root folder. from the previous video, it should be renamed to serviceAccount.json. File name must be serviceAccount.json otherwise it will cause an error

Create a .env file in the root of the backend directory to store your environment variables such as API keys, database URLs, and other sensitive configurations. Use the following template to guide your setup:

```bash
PORT=4000
JWT_SECRET=YOUR_JWT_SECRET_HERE
DEVELOPMENT=YOUR_DEVELOPMENT_URL_HERE
FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET_LINK
EMAIL=YOUR_EMAIL_FOR_BLASTING_EMAIL
APP_PASSWORD=YOUR_APP_PASSOWRD
```

- **JWT_SECRET :** could be generate automaticly by typing this command in terminal

    ```bash
    node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
    ```

- **DEVELOPMENT :**  Remember when we using expo, we should have the same IP Address with the emulator / the device that we used, so that we need to identify the server IP Address by run this command in terminal

    ```bash
    ipconfig
    ```
    Copy the IPv4 Address value and your development url will be http://{IPv4 Address}:4000

- **FIREBASE_STORAGE_BUCKET :** The link to your Firebase Storage Bucket (The link that you saved from tutorial create firebase account before)

- **EMAIL :** The email that will be used for blasting email. Make sure that you created the app password for this email

- **APP_PASSWORD :** Google App Password for authorize the google app that you have created before

Once all configurations are in place, start the backend server by running:

```bash
npm start
```

This command will use Nodemon to run app.js and now you can access server on **localhost:4000**

#### Frontend Setup

Navigate to the backend directory

```bash
cd Guestify-FindIT
cd client
```

Then install all the dependencies by running this command 

```bash
npm install
```

Before we start the server, we should to configure the API URL in order to connect with backend server. go to static/API.js and replace the code with your DEVELOPMENT url in backend system

```bash
const BASE_URL = "http://{IPv4 Address}:4000";
```

Launch the development server with Expo to start working on the frontend

```bash
npm run start
```

This command will open a new tab where you can choose to run the application on an iOS simulator, Android emulator, or your mobile device via the Expo Go app.

#### Verifying Installation
To verify that your installation is successful, ensure the backend server is running without errors and the frontend connects to the backend correctly. Check the console for any potential errors or missing configurations and ensure your .env file is correctly set up as per the backend requirements.

By following these detailed steps, you will set up both the frontend and backend of the Guestify application, ready for development and testing.
## API Documentation

For a comprehensive guide on how to use the API endpoints provided by Guestify, please refer to our detailed API documentation. This documentation includes all necessary details on API endpoints, including request formats, required parameters, example requests and responses, and error handling.

### Accessing the API Documentation
You can view the API documentation by visiting the following link:
[Guestify API Documentation](https://documenter.getpostman.com/view/28193468/2sA3JKe3Qk)

### Using the Documentation
The API documentation is interactive and allows you to directly interact with the API from within the documentation itself. To use this feature:
- Ensure you are logged into Postman if required.
- Select the endpoint you wish to test.
- Enter required parameters and authentication credentials directly in the documentation to make live API calls.
- API flow already automated, everytime you hit login API, then token variable will be updated. Remember that you have to hit login API once before you use another APIs
## Deployment

To make it easier for users and stakeholders to try out the Guestify app, we provide a downloadable APK for Android devices and a backend URL for accessing the server.

### Android Application
To download the latest version of the Guestify app for Android:

**[Download Guestify APK](<Your APK URL>)**: 

The APK file can be sideloaded onto your Android device. Follow these steps:
    
1. Download the APK file to your device.
2. Allow installations from unknown sources if prompted.
3. Install the app by tapping on the downloaded APK file.
4. Launch the app and start exploring the features of Guestify.

### Backend URL
Access the backend server for API interactions and management:

**[Guestify Backend URL](https://guestify.fly.dev)**

You can access the backend via this URL, which provides:
  - APIs for managing guests and events.
  - Real-time data insights through dashboards.
  - Secure endpoints to ensure your event data is protected.

## Contributors

The Guestify team is composed of talented individuals who bring diverse skills and perspectives to the development of our app. Our team member :

- **[Michael Sihotang](https://www.linkedin.com/in/michael-sihotang-9650bb215/)** As Hustler (Business Development Lead)
- **[Timothy Subekti](https://github.com/TimothySubekti0322)** As Hacker (Technical Lead)
- **[Felisa Aidadora Dermawan](https://www.linkedin.com/in/felisadarmawan/)** As Hipster (Design Lead)
## Feedback

Your feedback is crucial for us to continue improving Guestify and providing the best possible experience. Whether it's a feature request, bug report, or general comments, we value your input.

### How to Provide Feedback
- **GitHub Issues**: For technical issues or feature requests, please open an issue on our [GitHub repository](https://github.com/TimothySubekti0322/Guestify-FindIT/issues).
- **Email**: For general feedback or inquiries, feel free to contact us at [guestifyevent@gmail.com](mailto:guestifyevent@gmail.com).
