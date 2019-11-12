## Publish packages to myget

- open [myget](https://www.myget.org/)

-  create a feed with [this documentation](https://docs.myget.org/docs/walkthrough/getting-started-with-npm)

- set proxy of npmjs.org in feed's upstream sources to ON.

## Install published packages

- register the feed

if the feed is public:

```
npm config set registry https://www.myget.org/F/your-feed-name/npm/
```

if the feed is private:

```
npm login --registry=https://www.myget.org/F/your-feed-name/npm/
npm config set always-auth true 
```

- run `npm install`