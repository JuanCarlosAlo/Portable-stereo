import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { PLAYER } from '../../constants/player';

const StyledPlayerContainer = styled.div`
	bottom: 0;
	position: fixed;
	height: ${PLAYER.HEIGHT};
	width: 100%;
	background-color: ${COLORS.BLACK};
`;

export { StyledPlayerContainer };
