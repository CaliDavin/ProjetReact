import Card from '../components/card/card'
import JsxExemple from '../components/jsx/exemple1'
import Ibiza from '../img/ibiza.png'
import Ibiza2 from '../img/ibiza2.png'
import Ibiza3 from '../img/ibiza3.png'

const Main = () => {
    return (
        <>
            <h1>Bienvenue</h1>
            <div className="row">
                <Card title="Villa Ibiza" image={Ibiza} prix="250€/nuit" desc="Magnifique villa à Ibiza avec piscine, 3 chambres et jusqu'à 6 voyageurs, a 5 min du centre-ville et des boîtes de nuit !"  />
                <Card title="Best villa d'ibiza" image={Ibiza2} prix="190€/nuit" desc="Petite villa au plein centre-ville d'Ibiza, avec une petite piscine et 2 chambres avec salle de bain cette villa et la meilleure de l'île. (4 voyageur Max)"  />
                <Card title="Best Chambre d'Hôtel d'ibiza" image={Ibiza3} prix="220/nuit" desc="Chambre d'hôtel de luxe avec votre propre piscine privée, Hotel situé en plein centre-ville "  />
            </div>
            <JsxExemple />
        </>
    )
}

export default Main
