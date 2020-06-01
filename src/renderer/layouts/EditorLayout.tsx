import * as React from "react";
import "./EditorLayout.scss";

import minimize from "../img/Minize.svg";
import close from "../img/Close.svg";

const EditorLayout = ({ children }: any) => {
    return(
        <div className="app">
            <div className="sidebar">
                okay
            </div>
            { children }
            <div className="topbar">
                <div className="window-buttons">
                    <div className="btn">
                        <img src={minimize} alt=""/>
                    </div>
                    <div className="btn">
                        <img src={close} alt=""/>
                    </div>
                </div>
            </div>
            <div className="bottombar">okay3</div>
        </div>
        
    )
}

export default EditorLayout;