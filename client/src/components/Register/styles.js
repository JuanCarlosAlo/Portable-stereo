import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledRegister = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
`;
const StyledCrossButton = styled.img`
	position: absolute;
	top: 1rem;
	left: 1rem;
	height: 20px;
	width: 20px;
`;
const StyledInputContainer = styled.div`
	display: flex;
	flex-direction: column;

	justify-content: space-between;
	margin-bottom: 1rem;
	@media screen and (min-width: 360px) {
		flex-direction: row;
		gap: 1rem;
	}
`;

const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	gap: 1rem;
	align-items: center;
	padding: 0.5rem;
	width: 250px;
	margin-bottom: 2rem;
	border: 1px solid ${COLORS.MAIN};
	border-radius: 0.5rem;
	color: ${COLORS.WHITE};
	background-color: transparent;
	&:hover {
		background-color: ${COLORS.WHITE};
		color: ${COLORS.BLACK};
	}
`;
export {
	StyledCrossButton,
	StyledRegister,
	StyledInputContainer,
	StyledButton
};
