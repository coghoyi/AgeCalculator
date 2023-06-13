import styled from "styled-components";

const StyledInput = styled.input`
	&:invalid {
		color: red;
		border: 1px solid red;
	}
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 24px;
    gap: 16px;
    width: 160px;
    height: 72px;
    border: 1px solid #DCDCDC;
    border-radius: 8px;
    flex: none;
    order: 1;
    flex-grow: 0;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: 0.01em;
    color: #151515;
`;
const StyledContainer = styled.div `
    display: flex;
    width: 100%;
`;
const StyledCaja = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
`;
const StyledForm = styled.form`
    margin-top: 3rem;
    margin-left: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const StyledLabel = styled.label`
    font-size: 12px;
    font-weight: bold;
    color: grey;
    letter-spacing: 2px;
    margin-bottom: 12px;
`;
const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;
const StyledBorder = styled.div`
    width: 600px;
    height: 2px;
    background-color: #DCDCDC;
`;
const StyledBorderCaja = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;
const StyledDivBoton = styled.div`
    width: 96px;
    height: 96px;
    background-color:rgba(133, 77, 255, 1);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const StyledBoton = styled.input`
    

`;

export { StyledInput,StyledContainer, StyledDiv,StyledForm, StyledLabel, StyledBoton,StyledDivBoton,StyledCaja, StyledBorder,StyledBorderCaja };