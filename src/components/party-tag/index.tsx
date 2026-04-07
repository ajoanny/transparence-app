import "./party-tag.css";
import { COLORS } from "./party-colors.ts";
import type {Party} from "../../data/party.ts";

function PartyTag({ party }: { party: Party }) {
    const color = COLORS[party.name] || "c-77848C";
    return <span className={`party-tag ${color}`}>{party.name}</span>
}


export default PartyTag
