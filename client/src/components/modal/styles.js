import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledModal = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	padding-top: 4rem;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background-color: ${COLORS.MODAL_BG};
`;
export { StyledModal };
