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

7. Create the todoList component
```
code src/todos/TodoListItem.js
touch src/todos/TodoListItem.css
```

8. Create the newTodoForm component
```
code src/todos/NewTodoForm.js
touch src/todos/NewTodoForm.css
```
9. Putting it together: display components in App

10. Styling the app so far

11. Adding Redux to a React app
```
npm install redux react-redux
code src/store.js
```

12. Creating Redux actions
```
code src/actions.js
```

13. Creating Redux reducers
```
code src/reducers.js
```

14. Connecting components to the store 

15. Running a React-Redux application: connecting TodoList to store

16. Persisting the Redux store
```
npm install redux-persist
```
17. Redux DevTools Cmd+Shift+E 

18. Add a Redux flow: the Mark as Completed button

19. Add Redux-Thunk to application
```
npm install redux-thunk redux-devtools-extension @babel/runtime
npm install --save-dev @babel/plugin-transform-runtime
code .babelrc
code src/store.js
```

20. Creating a and testing a thunk that displays alert
```
code src/todos/thunks.js
```

21. the Todos API: setup local in-memory server
In a different terminal:   
```
cd ..
cp whole_originals/react-ecosystems-server.zip server.zip
unzip server.zip -d . 
rm -rf server.zip

cd react-ecosystems-server
npm install
npm run start
```
then go back to original terminal  
```
cd ../react-ecosystems
``` 

22. Add async thunks 

23. Add another reducer isLoading to display loading status

24. Refactoring the todos reducers 

25. Using thunks to create server resources
