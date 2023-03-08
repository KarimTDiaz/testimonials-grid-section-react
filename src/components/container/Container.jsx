import { CARDS_INFO } from "../../constants/cards-info"
import Card from "../card/Card"
import { StyledContainer } from "./styles"

const Container = () => {
    return (
    <StyledContainer>
          {CARDS_INFO.map(card => (
              <Card {...card}/>
          ))}

    </StyledContainer>
    )
}

export default Container