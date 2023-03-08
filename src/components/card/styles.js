import styled from 'styled-components';

const StyledCard = styled.div`
	width: 340px;
	padding: 2rem;
	background-color: ${({ bgcolor }) => bgcolor};
	border-radius: 10px;
	@media screen and (min-width: 768px) {
		width: 100%;
		grid-column: ${({ columns }) => columns};
		grid-row: ${({ rows }) => rows};
	}
`;

export { StyledCard };
