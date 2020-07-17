# React Homepage

This project demonstrates a homepage using [parallax scrolling](https://www.react-spring.io/docs/props/parallax) powered by [react-spring](https://www.react-spring.io/).

## Requirements
This is a React app which requires [Node.js](https://nodejs.org/en/) to run. You can verify Node installation on the command line.

```
node -v
```

## Usage

### Serve Locally
On the command line, navigate to the lowest level of the repository. The following commands will serve the app on the local network:
```
npm install
npm start
```

### Deploy to Heroku
To deploy in Heroku, use the [Heroku buildpack](https://github.com/mars/create-react-app-buildpack). Change `mymapviz` to an appropriate title. The following code will deploy the React app to the endpoint https://myhomepage.herokuapp.com/.
```
heroku create myhomepage --buildpack mars/create-react-app
git push heroku master
heroku open
```

## Credit
Setting up this repository was made possible by the great community of programmers who have posted their solutions on the web.
- [React-Spring Examples](https://github.com/react-spring/react-spring-examples/)
