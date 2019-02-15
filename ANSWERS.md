# 1. Mention two parts of Express that you learned about this week.

~~the bros and the homies~~

## _Server-side Routing_

Express is able to utilize **routing** to determine what kind of operation to perform based on the URL and type of HTTP request. 

## _Middleware_
Express is able to utilize middleware from various sources - it can use **custom middleware** made by the developer (including routes), ready-made **third party middleware**, and even **built-in middleware** to extend functionality. _Routing also falls into the category of custom middleware._ The idea is to keep Express _lightweight_ but allow for the option to add more features with the tradeoff of increase memory and performance load, potentially at various rates depending on the middleware used.


# 2. Describe Middleware?

In general, **middleware** is a piece of software that acts as a _bridge_ or _intermediary_ between two processes or applications/programs.

In terms of Express, **middleware** are the _array of functions_ that perform operations for each request. They may or may not do something with request and response objects (depending on the intended use of each piece of middleware), and they can also _return response objects_, _call the next function in the middleware stack_ and _handle errors_.

# 3. Describe a Resource?

In the context of web development, a **resource** is generally some form of data. On its own, it is more of an abstract concept used to represent the idea of certain objects like personal data or classes, for example, but it can be identified in the web by a _URI (Uniform Resource Identifier)_, such as the URL string found in the address bar of a browser, and what that URI actually does is point to the 'location' or 'address' of a resource within a network (such as the World Wide Web, or even a locally hosted network).

# 4. What can the API return to help clients know if a request was successful?

The API can return some form of **response object** to the client. Depending on the design and intended use, that response object may contain various key-value pairs to provide different information on how the request was processed, including success and failure.

Aside from that, the API can also directly return an HTTP status code alone (`.sendStatus(code)`) or simply end the wait for a response (`.end()`).

# 5. How can we partition our application into sub-applications?

The application can be split into different pieces of middleware (this includes routes).

Middleware not only provides the benefit of extended functionality; when used correctly, it adds modularity as well. This can be augmented further by having a good directory structure.

The idea here is **separation of concerns** - let each file/module/sub-application be focused on a particular task and organize them based on the types of said tasks.
