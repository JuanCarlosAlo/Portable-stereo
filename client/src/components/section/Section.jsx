import { StyledSection } from '../../pages/Profile/styles';
import { StyledBar, StyledTitleContainer } from './styles';

const Section = ({ title }) => {
	return (
		<StyledSection>
			<StyledTitleContainer>
				<p>{title}</p>
				<StyledBar></StyledBar>
			</StyledTitleContainer>
		</StyledSection>
	);
};

export default Section;
