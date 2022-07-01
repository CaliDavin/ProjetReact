/**
 * It takes in three props (title, desc, image) and returns a div with three children: an h2, a p, and
 * an img
 */
const Card = ({ title, prix, desc, image }) => {
    return (
        <div className="test">
            <div className="card">
                <h2>{title}</h2>
                <img src={image} alt={title} />
                <h3>Prix : {prix}</h3>
                <p>Description: {desc}</p>
            </div>
        </div>
    )
}

export default Card
