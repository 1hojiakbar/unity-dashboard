import styled from "styled-components";
import bgImage from "../../assets/images/main-bg.png";

export const CenterBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  gap: 12px;
  position: relative;
  margin-top: 40px;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: 180px;
  background-position: 80% 60%;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgb(207, 200, 255) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgb(207, 200, 255) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;
