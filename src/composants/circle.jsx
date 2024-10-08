import React from "react";

function Circle({ text, soustexte, hidebutton, width = "100px", height = "100px" }) {
    const circlestyle = {
        display: "flex",
        flexDirection: "column",
        borderRadius: "50%",
        border: "solid 1px",
        width: width,
        height: height,
        justifyContent: "center",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    };

    const textstyle = {
        fontSize: "30px",
        transform: "scaleY(1.4)",
        color: "#323232",
        margin: "0"
    };

    const soustextstyle = {
        fontSize: "15px",
        transform: "scaleY(1.4)",
        color: "#323232",
        margin: "0"
    };

    return (
        <div className="Circle">
            <div style={circlestyle}>
                {hidebutton ? hidebutton : null}
                <p style={textstyle}>{text}</p>
                <p style={soustextstyle}>{soustexte}</p>
            </div>
        </div>
    );
}

export default Circle;
