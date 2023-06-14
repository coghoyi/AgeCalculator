import { useState } from "react";
import {
  StyledBorder,
  StyledBorderCaja,
  StyledBoton,
  StyledCaja,
  StyledContainer,
  StyledDiv,
  StyledDivBoton,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledH1,
} from "./styles";

const Form = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [ageYears, setAgeYears] = useState(null);
  const [ageMonths, setAgeMonths] = useState(null);
  const [ageDays, setAgeDays] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(`${year}-${month}-${day}`);
    const today = new Date();
    const diff = today - birthDate;
    const ageDate = new Date(diff);
    const calculatedYears = Math.abs(ageDate.getUTCFullYear() - 1970);
    const calculatedMonths = ageDate.getUTCMonth();
    const calculatedDays = ageDate.getUTCDate() - 1;
    setAgeYears(calculatedYears);
    setAgeMonths(calculatedMonths);
    setAgeDays(calculatedDays);
  };

  const handleClick = () => {
    calculateAge();
  };

  return (
    <>
      <StyledContainer>
        <StyledForm onSubmit={e => e.preventDefault()}>
          <StyledCaja>
            <StyledDiv>
              <StyledLabel htmlFor="day">DAY</StyledLabel>
              <StyledInput
                id="days"
                placeholder="DD"
                type="number"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              />
            </StyledDiv>
            <StyledDiv>
              <StyledLabel htmlFor="month">MONTH</StyledLabel>
              <StyledInput
                id="months"
                placeholder="MM"
                type="number"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              />
            </StyledDiv>
            <StyledDiv>
              <StyledLabel htmlFor="year">YEAR</StyledLabel>
              <StyledInput
                id="years"
                placeholder="YYYY"
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </StyledDiv>
          </StyledCaja>
          <StyledBorderCaja>
            <StyledBorder></StyledBorder>
            <StyledDivBoton onClick={handleClick}>
              <StyledBoton type="image" src="images/icon-arrow.svg" />
            </StyledDivBoton>
          </StyledBorderCaja>
        </StyledForm>
      </StyledContainer>

      <div>
        <StyledH1>{ageYears !== null ? `${ageYears}` : "--"} years</StyledH1>
        <StyledH1>
          {ageMonths !== null ? `${ageMonths}` : "--"} months</StyledH1>
        <StyledH1>{ageDays !== null ? `${ageDays}` : "--"} days </StyledH1>
      </div>
    </>
  );
};

export default Form;