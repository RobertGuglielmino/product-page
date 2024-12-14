This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Visit `https://robertguglielmino.github.io/product-page` to see it.

## Notes

Unfortunately, NextJS is no longer compatible with MikroORM. Due to time constraints, MikroORM was not implemented, but the implementation in the code is still there for the user's enjoyment. Mock data has been put in it's place instead. If you click "Add to Cart", the console will print out the appropriate product and quantity.

Currently, the product quantity can go to -1. oops!

The grid of products will handle viewport changes.

`robots.txt` provides basic SEO stuff.

# Running with Docker

1. Log in to GitHub Container Registry:
   ```bash
   echo "YOUR_GITHUB_PAT" | docker login ghcr.io -u YOUR_GITHUB_USERNAME --password-stdin
2. Pull the latest image
   ```bash
   docker pull ghcr.io/RobertGuglielmino/product-page:latest
3. Run the container
   ```bash
    docker run -p 3000:3000 ghcr.io/RobertGuglielmino/product-page:latest
4. Visit `http://localhost:3000` in your browser
