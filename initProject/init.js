const fs = require("fs");
const arg = process.argv;
const ProjectName = arg[2];
fs.mkdirSync(ProjectName);
