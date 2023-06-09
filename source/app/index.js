import { program } from "commander";
import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import chalk from "chalk";
import getPackageJsonCode from "./package.json.js";
import getGitIgnoreCode from "./gitignore.js";
import getAppCssCode from "../baseComponents/appCss.js";
import getAppCode from "../baseComponents/appJs.js";
import getAppTestCode from "../baseComponents/appTest.js";
import getIndexJsCode from "../baseComponents/indexJs.js";
import getTestSetup from "../baseComponents/testSetup.js";
import getReportWebVital from "../baseComponents/reportWebVital.js";
import getIndexHTMLCode from "../baseComponents/indexHTML.js";
import getManifestCode from "../baseComponents/manifastJson.js";
import getRobotCode from "../baseComponents/robotTxt.js";
import getTSConfigCode from "../baseComponents/tsConfig.js";
import getActionCode from "../reduxSetup/action.js";
import getActionTypeCode from "../reduxSetup/actionType.js";
import getReducerCode from "../reduxSetup/reducer.js";
import getStoreCode from "../reduxSetup/store.js";
import getReactAppEnvCode from "../baseComponents/reactAppEnv.js";

const appInitializer = () => {
  return program
    .command("create-project")
    .description("Create a project new project")
    .action(async () => {
      const confirmation = await inquirer.prompt([
        {
          type: "confirm",
          name: "proceed",
          message: "Do you want to proceed",
          default: "y",
        },
      ]);

      if (confirmation.proceed) {
        const answers = await inquirer.prompt([
          {
            type: "input",
            name: "name",
            message: "Please enter your project name",
            default: "my-app",
          },
          {
            type: "list",
            name: "project",
            message: "What type of project do you want to create",
            choices: ["React App", "NextJs App"],
            default: "NextJs App",
          },
          {
            type: "confirm",
            name: "typescript",
            message: "Do you want typescript file",
            default: "y",
          },
          {
            type: "confirm",
            name: "redux",
            message: "Do you want to use redux",
            default: "y",
          },
          {
            type: "confirm",
            name: "material",
            message: "Do you want to use material-UI",
            default: "y",
          },
          {
            type: "confirm",
            name: "axios",
            message: "Do you want to use axios",
            default: "y",
          },
        ]);

        const { name, project, redux, typescript, material, axios } = answers;
        const componentDir = path.join(process.cwd(), name);
        if (!fs.existsSync(componentDir)) {
          fs.mkdirSync(componentDir, { recursive: true });
        }

        const packagePath = path.join(componentDir, "package.json");
        const packageCode = getPackageJsonCode(
          name,
          redux,
          typescript,
          material,
          axios
        );

        const modifiedJsonData = packageCode.replace(/,(\s*})/g, "$1");

        const lines = modifiedJsonData.split("\n");

        const nonEmptyLines = lines.filter((line) => line.trim() !== "");

        const modifiedData = nonEmptyLines.join("\n");

        fs.writeFileSync(packagePath, modifiedData);

        const gitIgnorePath = path.join(componentDir, ".gitignore");

        const gitIgnoreCode = getGitIgnoreCode();

        fs.writeFileSync(gitIgnorePath, gitIgnoreCode);

        const tsConfigPath = path.join(componentDir, "tsconfig.json");

        const tsConfigCode = getTSConfigCode();

        fs.writeFileSync(tsConfigPath, tsConfigCode);

        if (project !== "Nextjs App") {
          if (!fs.existsSync(componentDir + "src")) {
            fs.mkdirSync(componentDir + "/src", { recursive: true });
          }
          //Create App.css file for reactJs
          const appCssPath = path.join(componentDir + "/src", "App.css");
          const appCssCode = getAppCssCode();
          fs.writeFileSync(appCssPath, appCssCode);

          //create App.tsx / App.jsx file for reactJs
          const appJsPath = path.join(
            componentDir + "/src",
            `App${typescript ? ".tsx" : ".jsx"}`
          );
          const appJsCode = getAppCode(redux);
          fs.writeFileSync(appJsPath, appJsCode);

          //create index.tsx / index.jsx file for reactJs
          const indexJsPath = path.join(
            componentDir + "/src",
            `index${typescript ? ".tsx" : ".jsx"}`
          );
          const indexJsCode = getIndexJsCode(redux, typescript);
          fs.writeFileSync(indexJsPath, indexJsCode);

          //create setup test file
          const testSetupJsPath = path.join(
            componentDir + "/src",
            `setupTests${typescript ? ".ts" : ".js"}`
          );
          const testSetupJsCode = getTestSetup();
          fs.writeFileSync(testSetupJsPath, testSetupJsCode);

          //create index.tsx / index.jsx file for reactJs
          const reportJsPath = path.join(
            componentDir + "/src",
            `reportWebVitals${typescript ? ".ts" : ".js"}`
          );
          const reportJsCode = getReportWebVital(typescript);
          fs.writeFileSync(reportJsPath, reportJsCode);

          //create App.spec.tsx / App.spec.jsx file for reactJs
          const appTestPath = path.join(
            componentDir + "/src",
            `App.spec${typescript ? ".tsx" : ".jsx"}`
          );
          const appTestCode = getAppTestCode(redux);
          fs.writeFileSync(appTestPath, appTestCode);

          if (!fs.existsSync(componentDir + "public")) {
            fs.mkdirSync(componentDir + "/public", { recursive: true });
          }
          //create index.HTML file for reactJs
          const indexHTMLPath = path.join(
            componentDir + "/public",
            `index.html`
          );
          const indexHTMLCode = getIndexHTMLCode();
          fs.writeFileSync(indexHTMLPath, indexHTMLCode);

          //create manifast file for reactJs
          const manifestJsPath = path.join(
            componentDir + "/public",
            `manifest.json`
          );
          const manifestJsCode = getManifestCode();
          fs.writeFileSync(manifestJsPath, manifestJsCode);
          //create index.tsx / index.jsx file for reactJs
          const robotTxtPath = path.join(
            componentDir + "/public",
            `robots.txt`
          );
          const robotTxtCode = getRobotCode();
          fs.writeFileSync(robotTxtPath, robotTxtCode);

          //create react env file

          const reactEnvPath = path.join(
            componentDir + "/src",
            `react-app-env.d. ${typescript ? "ts" : "js"}`
          );
          const reactEnvCode = getRobotCode();
          fs.writeFileSync(reactEnvPath, reactEnvCode);

          if (redux) {
            if (!fs.existsSync(componentDir + "src/redux")) {
              fs.mkdirSync(componentDir + "/src/redux", {
                recursive: true,
              });
            }

            //action type creator
            const actionTypePath = path.join(
              componentDir + "/src/redux",
              `actionTypes.${typescript ? "ts" : "js"}`
            );
            const actionTypeCode = getActionTypeCode(typescript);
            fs.writeFileSync(actionTypePath, actionTypeCode);

            //action  creator

            const actionPath = path.join(
              componentDir + "/src/redux",
              `actions.${typescript ? "ts" : "js"}`
            );
            const actionCode = getActionCode();
            fs.writeFileSync(actionPath, actionCode);

            //reducer creator

            const reducerPath = path.join(
              componentDir + "/src/redux",
              `reducers.${typescript ? "ts" : "js"}`
            );
            const reducerCode = getReducerCode(typescript);
            fs.writeFileSync(reducerPath, reducerCode);

            //reducer creator

            const storePath = path.join(
              componentDir + "/src/redux",
              `store.${typescript ? "ts" : "js"}`
            );
            const storeCode = getStoreCode();
            fs.writeFileSync(storePath, storeCode);
          }
        }
        // else {

        // }

        console.log("\n");
        console.log(
          chalk.bgGray.bold("🥳 Project has been generate successfully")
        );

        console.log("\n");

        console.log(
          chalk.blue.bold(
            `We are ready to go now, please follow the instructions`
          )
        );

        console.log("\n");

        console.log(chalk.blue.bold(`cd ${name}`));

        console.log("\n");

        console.log(chalk.blue.bold(`npm install`));

        console.log("\n");

        console.log(chalk.blue.bold(`npm start`));

        console.log("\n");

        console.log(chalk.green.bold.italic.bold(`Happy coding!!!`));
      } else process.exit(0);
    });
};

export default appInitializer;
