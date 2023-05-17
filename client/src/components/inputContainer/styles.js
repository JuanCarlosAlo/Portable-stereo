import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledInputContainer = styled.div`
	display: flex;
	flex-direction: column;

	justify-content: space-between;
	margin-bottom: 1rem;
	@media screen and (min-width: 360px) {
	}
`;

const StyledInput = styled.input`
	background-color: transparent;
	border: none;
	background-image: none;
	background-color: transparent;
	-webkit-box-shadow: none;
	-moz-box-shadow: none;
	box-shadow: none;
	border-bottom: 1px solid ${COLORS.MAIN};
	height: 3rem;
	color: ${COLORS.WHITE};

	font-size: ${({ fontSize }) => fontSize};
	&:focus {
		outline: none;
		caret-color: ${COLORS.MAIN};
	}
	::placeholder {
		color: ${COLORS.WHITE};
	}
`;

export { StyledInputContainer, StyledInput };
