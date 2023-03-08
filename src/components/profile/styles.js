import styled from 'styled-components';

const StyledImage = styled.img`
	width: 60px;
	height: 60px;
	border: 3px solid ${({ bordercolor }) => bordercolor};
	border-radius: 50%;
`;

const ProfileContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const ProfileTitle = styled.h2`
	margin: 0;
	color: ${({ profilecolor }) => profilecolor};
`;
const ProfileSubtitle = styled.p`
	margin: 0;
	color: ${({ color }) => color};
`;
export { StyledImage, ProfileContainer, ProfileTitle, ProfileSubtitle };
