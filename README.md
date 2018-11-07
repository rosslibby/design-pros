# Design Pros
Design Pros is a web app built in React. I used SCSS as my CSS preprocessor. I utilized Javascript ES6. I bundle everything with Webpack 4.

I pushed the `data.json` to [Heroku](http://design-pro-api.herokuapp.com/) where I deployed it as a mock RESTful API using [json-server](https://github.com/typicode/json-server). You can test this API with a simple curl command. This command will fetch the list of designers: `curl http://design-pro-api.herokuapp.com/designers`

I took the liberty of adding the cover and logo image names into the JSON data structure. I did this so that I would be able to serve and query the images along with the other data seamlessly. If this change is not acceptable I will revise the application to account for the change.

This design is fully responsive. I utilized CSS Flexbox and Grid for layout.

The search functionality works with pretty much any data search. For example, you can [query for "miami"](http://design-pro-api.herokuapp.com/designers?q=miami) and you will get an accurate result of a designer based in Miami. Search by clicking the magnifying glass in the top-right of the application, typing the query and either clicking the arrow or hitting "enter".

## How to run this app

1. Clone this repository `git clone git@github.com:ross-libby/design-pros.git`
2. Navigate to the cloned repository `cd design-pros`
3. Run `npm install` to install all dependencies
4. Run `npm start` to launch the app
