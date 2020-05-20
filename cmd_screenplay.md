# Screenplay of all commands used in project 

1. Initial setup
```
mkdir react-ecosystems &&  cd react-ecosystems
npm init -y
git init
mkdir public src 
code public/index.html
```

2. ES6 support 
```
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
code .babelrc
```

3. Index.js and app component
```
code src/index.js
code src/App.js src/App.css
npm install react react-dom
```

4. Building and serving with webpack
```
npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader
code webpack.config.js
npx webpack-dev-server --mode development
```

5. Hot-reloading with react-hot-loader
```
npm install --save-dev react-hot-loader
npm run dev
npm run build
```
6. Create the todoList component
```
code src/todos/TodoList.js
code src/todos/TodoList.css
```
