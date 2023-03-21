const getTypeScriptCode = (name) => {
  return `export interface ${name}Props{
        name:string;
    }`;
};

export default getTypeScriptCode;
