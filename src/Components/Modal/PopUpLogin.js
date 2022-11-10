import React from "react";
import "./style.css"
import "../Post/Post.css"


function PopUpLogin() {
    return (<div id="overlay" class="overlay">
        <div id="popUp" class="modal popUp">
            <h3> Oops! It seem's that you are not logged</h3>
        </div>
    </div>
    )
}

export default PopUpLogin