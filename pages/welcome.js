import React, { useState, useContext } from "react";
import { Context } from "../context";

export default function welcome() {
  const { state, dispatch } = useContext(Context);

    return (
        <div>
            Weolcome 
      {JSON.stringify(state.name)}
        </div>
    )
}
