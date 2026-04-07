import "./status.css"
import {GREY_STATUS, RED_STATUS} from "../../data/status.ts";

function Status({ status }: { status: string }) {
    let color = "yellow"
    if (RED_STATUS.includes(status)) {
        color = "red"
    }
    else if (GREY_STATUS.includes(status)) {
        color = "grey"
    }
    return <span className={`status-tag ${color}`}>{status.replaceAll('_', ' ')}</span>
}


export default Status
