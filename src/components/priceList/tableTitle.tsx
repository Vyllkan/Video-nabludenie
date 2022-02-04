import React, {FC} from "react";
import { switchType } from "./types";
import "./style.css";

interface Props {
    handleSwitch: (property: switchType)=> void
    state: any
    title: string
    property: switchType
}

const TableTitle:FC<Props> = ({state, handleSwitch, title, property}) => {
    return(
        <table>
        <thead>
          <tr>
            <th className="switch-mesh">
              <div className="switch-container">
                <div
                  className={`switch-button th-head ${
                    state[property] ? "" : "clicked"
                  }`}
                  onClick={() => handleSwitch(property)}
                ></div>
              </div>
            </th>
            <th>
              <div className="initial-title th-head">{title}</div>
            </th>
          </tr>
        </thead>
      </table>
    )
}

export default TableTitle