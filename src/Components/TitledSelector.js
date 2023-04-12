import styled from "styled-components";

const Select = styled.select`
  background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.6668 6L8.00016 10.6667L3.3335 6' stroke='%2394A3B8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")
    no-repeat;
  background-position: calc(100% - 0.75rem) center !important;
  -moz-appearance: none !important;
  -webkit-appearance: none !important;
  appearance: none !important;
  outline: none;
  border-radius: 24px;
  border: solid #E2E8F0 1px;
  width: 446px;
  background-color: #F8FAFC;
  color: #0F172A;
  &:hover {
    background-color: #F8FAFC;
  }
`;

function TitledSelector({ title, options }) {
  const Title =
    title === undefined ? <div></div> : <div>{title}</div>;
  return (
    <div className="d-flex flex-column gap-2">
      {Title}
      <Select className="p-2">
        {options.map((optionName) => {
          return <option key={optionName}>{optionName}</option>;
        })}
      </Select>
    </div>
  );
}

export default TitledSelector;