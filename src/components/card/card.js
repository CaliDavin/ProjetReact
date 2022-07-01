const Card = ({ title, prix, desc, image }) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <h3>Prix : {prix}</h3>
            <p>Description: {desc}</p>
        </div>
    )
}

export default Card
