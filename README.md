# MarktOnlineGUI
GUI Project in Angular, get data from fake Store API Server, and show it in our Project, user can purchase any Item (Firstly save the user cart in localStorage). 
At the End when user ends the Purchase process he can his cart sehen and submit the purchase process then the project send this cart to the server to save it in DB

## Rquirements to start code:
* node js v-18-12-1
* Angular v-15.0.4
* code editor (I recommend visual code)
* after openning project in VC type the command "ng s --o", then the Project run immediately in your browser

## Project structer:
to make code easier to read and extendable, the project contain three models:
* products: handle the products operations (show it and make user add products to his cart)
* cart: handle the cart operation (show it and send cart to server)
* shared: contain the shared component, which we use in all project (header, selected list)


