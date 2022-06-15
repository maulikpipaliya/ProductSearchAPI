# Product Search Simple API
### Filter Funtionality

## Technical Details

Deployed app available here at [Heroku ProductSearchAPI Deployment](https://product-search-filter-api.herokuapp.com/)


## Available APIs

This API is currently featuring basic endpoints as follows:

| Endpoint | URL | Does what
| ------ | ------ | ------
| Test API | GET [/](https://product-search-filter-api.herokuapp.com/) | For Testing API
| View All Products | GET [/product](https://product-search-filter-api.herokuapp.com/product) | Returns all products
| View Single Product by Id | GET [/product/:productId](https://product-search-filter-api.herokuapp.com/product/TcHCv0dEod) | Gets single product by id
| Add Product | POST [/product](https://product-search-filter-api.herokuapp.com/product) | If no request body provided, adds random object from data dump to database.
| Search | GET [product/search?type=vegan&minPrice=15](https://product-search-filter-api.herokuapp.com/product/search?type=vegan&minPrice=15) | parameters - [`keyword`, `type`, `minPrice`, `maxPrice`, `minRating`, `maxRating` ]
|  | GET [product/search?keyword=healthy](https://product-search-filter-api.herokuapp.com/product/search?keyword=healthy) | 

## Tech

This API uses a number of open source projects to work properly:

- *MongoDB* - source-available cross-platform document-oriented database program
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]

 
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
