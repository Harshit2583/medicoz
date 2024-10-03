# Medicoz - Diagnosing Today Securing Tomorrow

## Overview

This project is a collaborative effort to build a comprehensive health platform designed to address the lack of access to personalized health insights. It helps individuals manage chronic conditions such as depression, diabetes, hypertension, and heart diseases more effectively. The platform integrates predictive analytics, doctor and hospital recommendations, e-commerce for health monitoring devices, and secure user authentication.

## Key Features

1. **Nearby Doctor and Hospital Recommendations**:
  - Recommends nearby doctors and hospitals based on a user's condition (e.g., diabetes, hypertension) using the **Google Places API**.

2. **E-Commerce for Health Monitoring Devices**:
  - Users can purchase health monitoring devices such as blood pressure monitors and glucometers.
  - **RazorPay API** is integrated for secure and smooth transactions.

3. **Predictive Health Insights**:
  - The platform uses predictive models to analyze health data and provide severity assessments for chronic conditions like diabetes and heart disease.
  - Predictive analytics are implemented using **Flask**.

4. **User Authentication**:
  - Provides a secure login page with user authentication managed by **MongoDB**, ensuring that users can access their personalized health data safely.
  
5. **Chat Bot**:
  - The platform features a chat bot, built with **Botpress**, to provide users with personalized health information, answer FAQs, and offer guidance on chronic condition management.
  - The chat bot is integrated into the platform to enhance user experience by providing real-time support and information.

## Technology Stack

### Frontend:
- **HTML**, **CSS**: Used for structure and styling of the user interface.
- **React**: A JavaScript library for building a dynamic and interactive UI.
- **Tailwind CSS**: Provides responsive design and enhances visual aesthetics.

### Backend:
- **Node.js**: Handles server-side logic and request/response operations.
- **Express.js**: Framework for building the server-side API and managing routes.
- **Flask**: Manages predictive health models and data analysis for severity assessments.

### Database:
- **MongoDB**: Used to store user data, health information, and device transactions.

### Third-party APIs:
- **Google Places API**: Used for recommending nearby healthcare providers based on the user's condition.
- **RazorPay API**: Used for secure transactions in the e-commerce section.
- **EmailJs API**: Used for sending email notifications and confirmations.
- **Bot Press**: Used for personalized health information, answer FAQs, and offer guidance on chronic condition management.

## Installation and Setup

1. Clone the repository:
    ```bash
    https://github.com/omkeshri/medicoz.git
    ```

2. Navigate to the project directory:
    ```bash
    cd medicoz
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the client server:
    ```bash
    npm start
    ```

5. Start the development server:
    ```bash
    npm run dev
    ```

6. Start the flask server:
    ```bash
    python server.py
    ```

## Environment Variables:

Create a `.env` file in the root directory (or respective directories) to store API keys and MongoDB connection strings. Add the following keys:
`REACT_APP_EMAIL_JS_PUBLIC_KEY`  `GOOGLE_PLACES_API_KEY`  `RAZORPAY_KEY_ID`  `RAZORPAY_KEY_SECRET`

## Usage

1. **Login and Authentication**:
  - Users can register and log in to access personalized health insights, doctor recommendations, and the e-commerce section.
  - User authentication and data management are handled securely with **MongoDB**.

2. **Health Data Insights**:
  - Users can input health data related to chronic conditions such as diabetes or hypertension.
  - The system leverages machine learning models to analyze the data and provide severity assessments.

3. **Nearby Doctor and Hospital Recommendations**:
  - The platform uses the **Google Places API** to recommend nearby doctors and hospitals based on the user’s health condition.

4. **E-Commerce Section**:
  - Users can purchase health monitoring devices such as blood pressure monitors or glucometers.
  - All transactions are securely handled using the **RazorPay API** for a smooth purchasing experience.

5. **Chat Bot**:
  - The platform features a chat bot, built with **Botpress**, to provide users with personalized health information, answer FAQs, and offer guidance on chronic condition management.
  - The chat bot is integrated into the platform to enhance user experience by providing real-time support and information.


## Contributing

Feel free to fork this repository and contribute by submitting a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
