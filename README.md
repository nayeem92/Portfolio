# Abdun Nayeem Khan's Cloud-Based Portfolio Backend

## Project Overview

This project is a **cloud-based backend system** for my portfolio website, designed to provide robust functionality and seamless data management. The architecture leverages a range of AWS cloud services to ensure high availability, scalability, and performance.

## Cloud Services Utilized

- **AWS Amplify**: Hosts and deploys the frontend (web app) directly. When a user visits the website, the static content (HTML, CSS, JS) is served from Amplify.
  
- **Amazon API Gateway**: Acts as the entry point to the backend. When the web app needs to interact with dynamic data (e.g., visitor count), it makes an HTTP request to the API Gateway, which directly calls AWS Lambda functions to process these requests.

- **AWS Lambda**: Serverless functions triggered by API Gateway. They handle the logic to update and retrieve the visitor count and any other dynamic operations, directly reading from and writing to DynamoDB.

- **Amazon DynamoDB**: A fully managed NoSQL database service that stores the visitor count data. Lambda interacts with DynamoDB to insert new records or retrieve the current count.

- **Amazon CloudWatch**: Monitors API Gateway and Lambda invocations. It collects and tracks metrics (like the number of requests and Lambda executions) and triggers alarms if usage exceeds defined thresholds.

- **Amazon SNS (Simple Notification Service)**: Facilitates reliable messaging and notifications, allowing for efficient communication between different parts of the application.

## Backend Architecture

The backend architecture is designed to handle requests efficiently and support various operations, including:

- **Data Flow**: The following flow illustrates how the different components work together:
  
  ![Architectural Diagram](public/images/portfolio%20res.jpeg)  

- **Monitoring**: CloudWatch monitors API Gateway and Lambda interactions to ensure optimal performance and reliability.

This setup forms a **serverless and scalable architecture**, enabling the portfolio backend to efficiently manage dynamic data while minimizing operational overhead.
