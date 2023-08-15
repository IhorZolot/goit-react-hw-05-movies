import styled from 'styled-components';

export const CastContainer = styled.div`
  /* display: flex; */
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: left;
`;

export const ActorCard = styled.div`
  margin: 10px;
  text-align: center;
  width: 150px;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const ActorImage = styled.img`
  max-width: 100px;
  border-radius: 6%;
  margin-bottom: 5px;
`;
