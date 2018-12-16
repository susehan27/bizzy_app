import React, {Component} from "react";
import Spotify from "../dashboard/Spotify";
import UserNavBar from "../dashboard/UserNavBar";
import "./style.css";

class Mindfulness extends Component {

    render() {
        return (
            <div className="row">
                <UserNavBar/>
                
                <div className="row">
                    <div className="col s12 center-align">
                        <h5 className="roboto">Having trouble focusing? Getting too anxious?</h5>
                        <h2 className="vidaloka">Welcome to the Mindfulness Center!</h2>
                        <p>pick a playlist and play a song to help you relax, re-focus, or just chill during your break!</p>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="col s4">
                        <div className="card-panel teal">
                            <iframe src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DWWSads6V2oIk" width="350" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card-panel teal">
                            <iframe src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DWX9ZIH7jslKG" width="350" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card-panel teal">
                            <iframe src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX9sIqqvKsjG8" width="350" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card-panel teal">
                            <iframe src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX8NTLI2TtZa6" width="350" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card-panel teal">
                            <iframe src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX4sWSpwq3LiO" width="350" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card-panel teal">
                            <iframe src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DWXLeA8Omikj7" width="350" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </div>
                    </div>
                </div>
                <div className="row">
                    
                </div>
            </div>
        )
    }
};

export default Mindfulness;

