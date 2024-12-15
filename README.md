
## Notes

Unfortunately, NextJS is no longer compatible with MikroORM. Due to time constraints, MikroORM was not implemented, but the implementation in the code is still there for the user's enjoyment. Mock data has been put in it's place instead. If you click "Add to Cart", the console will print out the appropriate product and quantity.

Currently, the product quantity can go to -1. oops!

The grid of products will handle viewport changes, with 5 columns in landscape and 3 columns in portrait

`robots.txt` provides basic SEO stuff. I would've liked to experiment more with server rendering to get TTFB and LCP faster but oh well

# Running with NPM

1. Install dependencies:
   ```bash
   npm install
2. Build the application:
   ```bash
   npm run build
3. Start the application:
   ```bash
   npm run start
4. Visit `http://localhost:3000` in your browser

# Running with Docker

1. Build the Image:
   ```bash
   docker build -t product-page .
2. Start the Image:
   ```bash
   docker run -d -p 3000:3000 product-page
3. Visit `http://localhost:3000` in your browser
