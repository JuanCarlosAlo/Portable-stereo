import { StyledInput, StyledInputContainer } from './styles';

const InputContainer = ({
	labelText,
	setValue,
	value,
	keyValue,
	stack,
	type,
	fontSize = '1rem'
}) => {
	if (stack) {
		return (
			<StyledInputContainer>
				<StyledInput
					onChange={e => setValue({ ...value, [keyValue]: e.target.value })}
					type={type}
					placeholder={labelText}
					fontSize={fontSize}
				/>
			</StyledInputContainer>
		);
	}
	return (
		<StyledInputContainer>
			<StyledInput
				onChange={e => setValue(e.target.value)}
				type={type}
				fontSize={fontSize}
				placeholder={labelText}
			/>
		</StyledInputContainer>
	);
};

export default InputContainer;
