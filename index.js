#!/usr/bin/env node
import { program } from "commander";
import componentCreator from "./source/component/index.js";
import appInitializer from "./source/app/index.js";

appInitializer();
componentCreator();

program.parse(process.argv);
