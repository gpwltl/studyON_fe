import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../home/view/Home";
import Login from "../login/view/Login";
import RoomCreate from "../roomCreate/Container/RoomCreate";
import RoomList from "../roomList/view/RoomList";
import RoomEntrance from "../roomEntrance/view/RoomEntrance";
import MyPages from "../myPage/view/MyPages";
import ScrollToTop from "../assets/ScrollToTop";
import RoomListViewContainer from "../roomList/container/RoomListViewContainer";

class MainRouter extends Component {
    render() {
        return (
            <div>
                <ScrollToTop>
                    {/* <BrowserRouter> */}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/room-create" component={RoomCreate} />
                        <Route path="/room-list" component={RoomList} />
                        <Route
                            path="/room-entrance/:id"
                            component={RoomEntrance}
                        />
                        <Route path="/myPages" component={MyPages} />
                    </Switch>
                    {/* </BrowserRouter> */}
                </ScrollToTop>
            </div>
        );
    }
}

export default MainRouter;