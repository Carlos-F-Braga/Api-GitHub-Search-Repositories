import { StyledCard } from "./styles/Card.styled"


export default function Card ({item: {id, name, description, image} }) {
    return (
        <StyledCard layout={id % 2 === 0 &&  'row-reverse'}>
            <div> 
                <h2>{name}</h2>
                <p>{description}</p>
            </div>

            <div> 
                <img src={`./images/${image}`} alt="" />
            </div>
        </StyledCard>
    )
}