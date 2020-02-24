- [ ] Explain what a token is used for.

A token is used to verify authorization of a http request. 

- [ ] What steps can you take in your web apps to keep your data secure?

Using secure https protocol. After authentication you save the token and check if the token exist and if it didnt you set routes to login form. Use this token for http requests that further need authorization.

- [ ] Describe how web servers work.

Web servers send and receive data over a protocol called HTTP over IP. When a request is sent over the internet to a webserver, the server will check the request for specific information (Headers, Method, Body, Request URL, etc.) and then based on what it received, it will send back an appropriate response.This request typically comes from a user's computer and is sent to a specific IP address. This reaches their ISP which then passes the request on to other computers (servers) physically connected to each other via one type of cable or another, until it reaches it's destination.

- [ ] Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

Post, Get, Put, Delete.