import styled from 'styled-components';

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

export { StyledCrossButton, StyledRegister };
