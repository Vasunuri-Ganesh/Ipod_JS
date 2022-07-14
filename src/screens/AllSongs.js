import React from "react";
// import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/storage";
import "firebase/firestore";
import "../styles.css";

class AllSongs extends React.Component {
  constructor() {
    super();
    this.state = {
      all_songs_list: [],
      loading: true
    };
    this.db = firebase.firestore();
  }

  // collecting list of songs from firebase
  componentDidMount() {
    this.db
      .collection("songs")
      .orderBy("song", "asc")
      .onSnapshot((snapshot) => {
        console.log(snapshot);
        snapshot.docs.map((doc) => {
          console.log(doc.data());
        });
        const all_songs_list = snapshot.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({
          all_songs_list,
          loading: false
        });
      });
  }

  render() {
    return this.state.loading ? (
      <div className="loading-screen">
        <h1>Loading...</h1>
        <div className="loader"></div>
        <div style={{ color: "white" }}>
          Please make sure that you are connected to the internet. Songs are
          fetched from the firebase storage.
        </div>
      </div>
    ) : (
      ///displaying songs list from firebase
      <div className="all-songs">
        <h1 className="all-songs-heading">All Songs</h1>
        <div className="all-songs-list">
          {this.state.all_songs_list.map((item, index) => {
            return <div key={index}>{item.song}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default AllSongs;
