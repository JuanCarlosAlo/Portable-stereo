import { StyledButton } from './styles';

const MainColorButton = ({ setValue, value, width, text }) => {
	if (!setValue) return <StyledButton width={width}>{text}</StyledButton>;

	return (
		<StyledButton onClick={() => setValue(value)} width={width}>
			{text}
		</StyledButton>
	);
};

export default MainColorButton;
