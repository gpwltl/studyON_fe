import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import SearchBar from "../view/SearchBar";

@inject("RoomStore")
@observer
class SearchBarContainer extends Component {
  setRoomName = (e) => {
    this.props.RoomStore.setRoomName(e.target.value);
  };
  addRoomList = () => {
    this.props.RoomStore.addRoomList();
  };
  findMatches = () => {
    this.props.RoomStore.findMatches();
  };
  render() {
    const roomName = this.props.getRoomName;
    return (
      <SearchBar
        roomName={roomName}
        setRoomName={this.setRoomName}
        addRoomList={this.addRoomList}
        findMatches={this.findMatches}
      />
    );
  }
}

export default SearchBarContainer;
