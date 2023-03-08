import { StyledContent } from "./styles"

const Content = ({text,color}) => {
    return <StyledContent color={color}>{text}</StyledContent>
}

export default Content