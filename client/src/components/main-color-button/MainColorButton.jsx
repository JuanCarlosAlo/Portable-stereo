import { StyledButton } from './styles';

const MainColorButton = ({ setValue, value, width, text, type }) => {
	if (!setValue)
		return (
			<StyledButton type={type} width={width}>
				{text}
			</StyledButton>
		);

	return (
		<StyledButton onClick={() => setValue(value)} width={width} type={type}>
			{text}
		</StyledButton>
	);
};

export default MainColorButton;
