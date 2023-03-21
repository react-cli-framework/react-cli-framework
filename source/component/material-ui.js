const getMaterialUICode = () => {
  return `import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#0F0F0F",
    padding: 10,
  },
  title: {
    color: "white",
    fontWeight: 'bold',
  },
}));

export default useStyles
 `;
};

export default getMaterialUICode;
