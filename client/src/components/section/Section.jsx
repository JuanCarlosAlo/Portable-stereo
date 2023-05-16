import { StyledBar, StyledTitleContainer } from './styles';

const Section = ({ title }) => {
	return (
		<div>
			<StyledTitleContainer>
				<p>{title}</p>
				<StyledBar></StyledBar>
			</StyledTitleContainer>
		</div>
	);
};

export default Section;
