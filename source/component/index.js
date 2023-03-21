import { program } from "commander";
import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import chalk from "chalk";
import getFunctionalComponentCode from "./functionalComponent.js";
import getClassComponentCode from "./classComponent.js";
import getMaterialUICode from "./material-ui.js";
import getModuleCssCode from "./module-css.js";
import getTypeScriptCode from "./typesSnippet.js";
import getTestingCode from "./testingSnippet.js";

const componentCreator = () => {
  return program
    .command("create <name>")
    .description("Create a new React component")
    .action((name) => {
      inquirer
        .prompt([
          {
            type: "list",
            name: "type",
            message: "What type of component do you want to create?",
            choices: ["Functional", "Class-based"],
            default: "Functional",
          },
          {
            type: "input",
            name: "directory",
            message: "In which directory do you want to create the component?",
            default: "./src/components",
          },
          {
            type: "input",
            name: "props",
            message:
              "Do you wants to add any props (add space between component for differentiate props)",
            default: "",
          },
          {
            type: "list",
            name: "CSS",
            message: "What type of css style do you want to create?",
            choices: ["Material-UI", "Module.css", "None"],
            default: "Material-UI",
          },
          {
            type: "confirm",
            name: "typescript",
            message: "Do you want typescript file",
            default: "y",
          },
          {
            type: "confirm",
            name: "testing",
            message: "Do you want testing file",
            default: "n",
          },
        ])
        .then((answers) => {
          const componentDir = path.join(
            process.cwd(),
            answers.directory,
            name
          );
          if (!fs.existsSync(componentDir)) {
            fs.mkdirSync(componentDir, { recursive: true });
          }
          const { type, directory, props, CSS, typescript, testing } = answers;

          const nameUpdate = [...name]
            .map((ele, index) => (index === 0 ? ele.toUpperCase() : ele))
            .join("");

          //Component creator
          const componentPath = path.join(componentDir, name + ".tsx");
          const componentCode =
            type === "Functional"
              ? getFunctionalComponentCode(name, nameUpdate, props, CSS)
              : getClassComponentCode(name, props, CSS);
          fs.writeFileSync(componentPath, componentCode);

          //CSS file creator
          if (CSS !== "None") {
            const cssPath = path.join(componentDir, name + ".module.css");
            const muiPath = path.join(componentDir, name + ".style.ts");
            const cssCode =
              CSS === "Material-UI" ? getMaterialUICode() : getModuleCssCode();
            fs.writeFileSync(
              CSS === "Material-UI" ? muiPath : cssPath,
              cssCode
            );
          }

          //type file creator
          if (typescript) {
            const typeScriptPath = path.join(componentDir, name + ".types.ts");
            const typeCode = getTypeScriptCode(nameUpdate);
            fs.writeFileSync(typeScriptPath, typeCode);
          }

          if (testing) {
            const testingPath = path.join(componentDir, name + ".spec.tsx");
            const testCode = getTestingCode(nameUpdate);
            fs.writeFileSync(testingPath, testCode);
          }

          console.log("\n");
          console.log(
            chalk.italic.bold.bgGreen(
              `Created component ${name} in directory ${directory}`
            )
          );
        })
        .catch((err) => {
          console.error(err);
        });
    });
};

export default componentCreator;
