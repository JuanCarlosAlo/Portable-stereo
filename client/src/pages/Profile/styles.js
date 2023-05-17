import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { PLAYER } from '../../constants/player';

const StyledProfile = styled.div`
	padding-left: 1rem;
	padding-right: 1rem;
	padding-bottom: ${PLAYER.HEIGHT};
`;

const StyledProfileImage = styled.img`
	width: 100px;
	border-radius: 50%;
	background-image: ${({ bgImg }) => {
		if (bgImg) {
			return `
				url(bgImg);
			`;
		} else {
			return `
				url('/public/images/profile_default.svg');
			`;
		}
	}};
`;
const StyledMainProfileContentContainer = styled.div`
	display: flex;
	gap: 1rem;
`;

const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	gap: 1rem;
	align-items: center;
	padding: 0.5rem;
	width: 100%;
	margin-bottom: 2rem;
	border: 1px solid ${COLORS.MAIN};
	border-radius: 0.5rem;
	color: ${COLORS.WHITE};
	background-color: transparent;
	cursor: pointer;
	&:hover {
		background-color: ${COLORS.WHITE};
		color: ${COLORS.BLACK};
	}
`;

export {
	StyledButton,
	StyledProfileImage,
	StyledMainProfileContentContainer,
	StyledProfile
};
