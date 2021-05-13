import React, { Component } from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Message from "../pages/Message";
import PageNotFound from "../pages/404";
export default class Router1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中，靠<a>跳转不同的页面 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
            <a className="list-group-item active" href="./home.html">Home</a> */}

              {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
              <NavLink className="list-group-item" to="/atguigu/about">
                About
              </NavLink>
              <NavLink className="list-group-item" to="/message">
                Message
              </NavLink>
              <NavLink className="list-group-item" to="/home/a/b">
                Home
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  {/* 注册路由 */}
                  <Route path="/atguigu/about" component={About} />
                  <Route exact={true} path="/home" component={Home} />
                  <Route path="/message" component={Message} />
                  <Route path="/404" component={PageNotFound} />
                  <Redirect to="/404"></Redirect>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
