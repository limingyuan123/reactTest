import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
//使用react-router-dom 作为路由
import { Route, Switch, Redirect } from 'react-router-dom';
import { mainRoutes, HOME_PAGE, ROOT_ROUTE } from '../src/routes/index';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
//下面设置路由
export default class App extends Component{
  render(){
    return(
      <Switch>
        {
          mainRoutes.map(route =>{
            const { homePage } = route;
            return (
              <Route key={route.key} path={`${ROOT_ROUTE}/${route.key}`} render={({match}) => {
								return (
								    homePage
									?
								    <route.component match={match} />
								    :
								    <PageFrame page={route.key}>
								 		<route.component pageTitle={`${route.title}`} match={match} />
								 	</PageFrame>
								)
								// return (
								// 	<PageFrame page={route.key}>
								// 		<route.component pageTitle={`${route.title}-${SITE_TITLE}`} />
								// 	</PageFrame>
								// );
							}} />
            )
          })
        }
        <Redirect to = {HOME_PAGE} from='/' exact />
        <Redirect to = {HOME_PAGE} from={ROOT_ROUTE} exact />
        <Redirect to = {`${ROOT_ROUTE}/404`} />
      </Switch>
    )
  }
}