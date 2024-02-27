# alert_microservice

Alert Item Stock-Low Microservice

This repository contains files for testing the microservice that alerts the user through discord to message the stock is low(below 5)

Instructions:
1. download this repository
2. make sure Node.js is installed on your machine
3. Access the Alert system locally:
  To update the inventory for an item, send a POST request to the microservice with the item's name and the new quantity
  To retrieve the current inventory state, send a GET request to the microservice, requesting inventory data
5. Response Handling
   Status Codes:
     200: The request was successful
     404: The requested endpoint does not exist
     500: Internal server error
7. The repository includes a test file to help test better understand how the microservice works
8. Adjustment will be made throughout the term
   

<img width="974" alt="Screenshot 2024-02-26 at 5 06 24 PM" src="https://github.com/pyonw/alert_microservice/assets/91231803/e4a514e0-2a70-41bc-8b87-764ac6cb4c14">
