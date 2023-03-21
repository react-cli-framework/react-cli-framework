const getFunctionalComponentCode = (name, nameUpdate, props, CSS) => {
  const propsData = props.split(" ");

  return `import React from 'react';
  import Box from "@mui/material/Box";
  ${
    CSS === "Material-UI"
      ? "import useStyles from './" + name + ".style'"
      : "import style from './" + name + ".module.css'"
  }
  import {${nameUpdate}Props} from './${name}.types'

const ${name} = ({${propsData}} : ${nameUpdate}Props) => {
  const classes = ${CSS === "Material-UI" ? "useStyles()" : "style"};
  return (
    <Box data-testid="test" className={classes.root}>
      ${name}
    </Box>
  );
}

export default ${name};
`;
};

export default getFunctionalComponentCode;
