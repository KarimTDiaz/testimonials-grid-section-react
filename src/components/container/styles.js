import styled from 'styled-components';

const StyledContainer = styled.div`
	display: grid;
	gap: 2rem;
	@media screen and (min-width: 768px) {
		grid-template-columns: 360px 360px 360px 360px;
		grid-template-rows: 360px 360px;
	}
`;

export { StyledContainer };
