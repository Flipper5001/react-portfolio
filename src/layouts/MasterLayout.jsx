import React from "react";
import Footer from "./nav/Footer";
import Navbar from "./nav/Navbar";

export default function MasterLayout(props) {
    return (
        <main>

        {/*Header*/}
        <Navbar/>

        {/*Content*/}
        {props.children}

        {/*Footer*/}
        <Footer/>

        </main>
    )
}
