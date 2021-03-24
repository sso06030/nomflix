import React from "react";
// BrowserRouter use API || HashRouter user # >> function is same
// Switch : 한번에 하나의 라우터만 렌더하게 해줌
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from '../Routes/Home'
import TV from '../Routes/TV'
import Search from '../Routes/Search'

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TV} />
            {/* <Route path="/tv/popular" render={()=><h1>Popular</h1>}/> */}
            <Route path="/search" component={Search} />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
)