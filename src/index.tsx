import * as React from "react";
import * as ReactDOM from "react-dom";
import {RootComponent} from "./main/RootComponent";


const renderComponent = () => {

    ReactDOM.render(
        <RootComponent />,
        document.getElementById("react-mount-point"),
    );
};

renderComponent();
