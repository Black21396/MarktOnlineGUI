# MarktOnlineGUI
GUI Project in Angular, get data from fake Store API Server, and show it in our Project, user can purchase any Item (Firstly save the user cart in localStorage). At the End when user ends the Purchase process he can see his cart and submit the purchase process then the project send this cart to the server to save it in DB
Note: this project get the information from fake Store. here the link for Backend  (https://fakestoreapi.com) from this link you can see the documentation for this API

## Project requierments to run:
* Code editor ( the best choice "visual code")
* node js v-18.12.1
* Angular v-15.0.4
* Internet on your computer (to get data from fake Server)

## Project Structure:
### this project contain three main part (to make this project clearer and easier to edit it and test it):
* product module: here we make all operation for get data and user purchase process
* cart module: here user see all products, which he added and manage it
* shared module: contain all shared component, which we use in entire project(ex: header, selected list)
