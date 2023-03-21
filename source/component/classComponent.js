const getClassComponentCode = (name) => {
  return `import React, { Component } from 'react';
  import Box from "@mui/material/Box";
class ${name} extends Component {
  render() {
    return (
      <Box data-testid="test">
        ${name}
      </Box>
    );
  }
}

export default ${name};
`;
};

export default getClassComponentCode;
