## Cryptocurrency Exchange Engine.
A cryptocurrency company and are tasked with developing a **decentralized cryptocurrency exchange** .
Users of the exchange should be able to:
- Buy crypto for fiat
- Sell crypto for fiat

# 1- Architecture Exercise ?
Design **the high-level app architecture** for this cryptocurrency exchange
> Q1- What services will there be ? ?

> A1 - I will you apply (use) a Microservices Architecture [see pdf](https://github.com/mohamedlotfe/Cryptocurrency-Exchange-Server/blob/main/cryptocurrency.pdf)
    <img src="https://github.com/mohamedlotfe/Cryptocurrency-Exchange-Server/blob/main/cryptocurrency%20exchange%20Arch.png"/>
    
> Q2- How should order matching work? ? ?

> A2- I create a service to perform a matching process called ( Match Engine),
> The algorithm is very simple. We match a buy order with any sell order that lists sells at a price higher or equal to the price of our order. When this condition is no longer valid or the order is fully filled, we return the trades matched
   
 > Q3- How can you manage volatility problems with exchange rates ??
 
 > A3 - I have no Anwser :D 
 
 > Q4- What should we do if there are not enough buy orders to fill sell orders, and vice versa ??
 
 > A4 - In Order Management engine there can be multiple types of orders the end user has access to. Some of these include:

	-  Limit order => That allow you to create an order with a specific price that gets filled either at the specified price better
	-  Market order :=>  prioritize completing the order for the specified amount ignoring the price completely
	-  Stop order :=> Stop orders become active only after a specific price level is reached. Once they are activated they are automatically converted to a market or limit order


