import styled from "styled-components";

const StyledBanner = styled.div`
background-color: blue;
background-image: url(${({ bg }) => bg});
height: 230px;
`;
export default function Banner(props) {
     return (
          <StyledBanner bg={props.bg} />
     )
}