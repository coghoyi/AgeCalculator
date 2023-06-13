import { StyledBorder, StyledBorderCaja, StyledBoton, StyledCaja, StyledContainer, StyledDiv, StyledDivBoton, StyledForm, StyledInput, StyledLabel } from "./styles";


const Form = ()=>{
    return (
        <StyledContainer>
            <StyledForm>
                <StyledCaja>
                <StyledDiv>
                    <StyledLabel htmlFor="day">DAY</StyledLabel>
                    <StyledInput id="day" placeholder="DD" type="text"/>
                </StyledDiv>
                <StyledDiv>
                    <StyledLabel htmlFor="month">MONTH</StyledLabel>
                    <StyledInput id="month" placeholder="MM" type="text" />
                </StyledDiv>
                <StyledDiv>
                    <StyledLabel htmlFor="year">YEAR</StyledLabel>
                    <StyledInput id="year" placeholder="YYYY" type="text" />
                </StyledDiv>
                </StyledCaja>
                <StyledBorderCaja>
                    <StyledBorder></StyledBorder>
                    <StyledDivBoton>
                        <StyledBoton type='image' src="images/icon-arrow.svg" />
                    </StyledDivBoton>
                </StyledBorderCaja>
            </StyledForm>
        </StyledContainer>
        
    )
}
export default Form;