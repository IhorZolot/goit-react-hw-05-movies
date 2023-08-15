import styled from 'styled-components';

export const MoviesStyled = styled.div`
  padding: 20px;
`;

export const SearchForm = styled.form`
  display: flex;
  margin-bottom: 20px;
  max-width: 400px;

  input {
    font-size: 16px;
    flex: 1;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
  }

  button {
    padding: 10px 20px;
    background-color: #4c216d;
    color: white;
    border: none;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #007bff;
    }
  }
`;

export const MoviesList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const MovieItem = styled.li`
  font-size: 16px;
  margin-bottom: 10px;

  a {
    text-decoration: none;
    color: black;

    &:hover {
      text-decoration: underline;
      color: blue;
    }
  }
`;
