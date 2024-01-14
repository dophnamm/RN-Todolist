import React from 'react';

import Input from '../../components/Input';
import Container from '../../components/Container';

const Search = () => {
  return (
    <Container>
      <Input value="" placeholder="Search..." onChange={v => console.log(v)} />
    </Container>
  );
};

export default Search;
