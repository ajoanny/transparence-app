import "./about.css"

function About() {
    return(
        <>
            <h1>À propos</h1>
            <section className="section">
                <h2>Objectif du projet</h2>
                <p>Ce projet a pour objectif de rendre les données de <a target='_blank' href="https://www.data.gouv.fr/dataservices/poligraph-api-transparence-politique-affaires-judiciaires-et-fact-checks-rest-json">l’API Poligraph</a> sur la plateforme <a target="_blank" href="https://www.data.gouv.fr/">data.gouv.fr</a>, plus accessibles et faciles à exploiter. L’API Poligraph propose des informations sur les représentants politiques : votes parlementaires, affaires judiciaires documentées, partis, mandats ou encore élections. L’idée est de permettre à chacun d’y accéder simplement avec une présentation neutre.</p>
                <p>Dans cette première version, seules les données liées aux affaires judiciaires des représentants politiques sont mises en avant. Certaines informations fournies par l’API peuvent toutefois être incomplètes. Ce travail a pour but d’aider à mieux comprendre le paysage politique sans chercher à porter atteinte à la réputation des représentants politiques. Les titres et les descriptions viennent de l'API Poligraph et n'ont pas été modifiés.</p>
            </section>
        </>
    )
}

export default About