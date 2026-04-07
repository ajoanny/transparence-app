import type {LegalCase} from "../../data/legal-case.ts";
import './case.css'
import Source from "../source";
import Status from "../status";
import PartyTag from "../party-tag";
import {GREY_STATUS, RED_STATUS} from "../../data/status.ts";

function Case({legalCase }: {legalCase: LegalCase}) {
    return (
                    <article className={`legal_case ${cardColor(legalCase.status)}`}>
                        <header className="legal_case--header">
                            <dl className="header--tags">
                                <dt className="definition--title sr-only">Statut de l'affaire</dt>
                                <dd className="definition--description"><Status status={legalCase.status}/></dd>
                                <dt className="definition--title sr-only">Parti</dt>
                                <dd className="definition--description"><PartyTag party={legalCase.party}/></dd>
                            </dl>
                            <h2 className="legal_case--title">{legalCase.title}</h2>
                            <dl className="header--definitions dates">
                                <dt className="definition--title sr-only">Politicien·ne</dt>
                                <dd className="definition--description politician">{legalCase.politician.full_name}</dd>
                                <dt className="definition--title date   ">Date de l'affaire</dt>
                                <dd className="definition--description date">{legalCase.date ? legalCase.date.toString(): "-"}</dd>
                                <dt className="definition--title date">Date du verdict</dt>
                                <dd className="definition--description date">{legalCase.date ? legalCase.date.toString(): "-"}</dd>
                            </dl>
                        </header>
                        <p className="description">{legalCase.description}</p>
                        <ul className="source--list">
                            {
                                legalCase.sources.map((source, index) => {
                                    return (<li key={index}>
                                        <Source className="legal-case--source" source={source}/>
                                    </li>)
                                })
                            }
                        </ul>
                    </article>
    )
}


const cardColor = (status: string) => {
    if (RED_STATUS.includes(status)) {
        return "red-card"
    }
    if (GREY_STATUS.includes(status)) {
        return "grey-card"
    }
    return "yellow-card"
}
export default Case
