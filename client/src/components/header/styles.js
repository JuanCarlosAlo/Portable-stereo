import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 2rem;
	padding-right: 2rem;
	height: 60px;
`;

const StyledHeaderLogo = styled.h1`
	font-size: 1rem;
`;

const StyledMenu = styled.ul`
	display: flex;
	gap: 2rem;
`;

export { StyledHeader, StyledHeaderLogo, StyledMenu };
