import styled from 'styled-components';

const StyledImg = styled.img`
	height: 250px;
	width: 250px;
	border-radius: ${({ type }) => {
		console.log(type);
		if (type === 'user') {
			return '50%';
		}
	}};
`;

export { StyledImg };
