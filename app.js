/*
npm - It's a global command, comes with node.js.
npm --version

local dependency - Meaning: Used only in this project.
npm i <packageName>

global dependency - Meaning: Used in any project.
npm install -g <packageName>
sudo install -g <packageName> (mac)

package.json - manifest file (stores important info about project/package)
manual creation (create package.json in the root, create properties, etc), OR:
npm init (step-by-step process, press 'Enter' to skip)
npm init -y (say 'yes' to all default options)
*/

// To use ES6 Modules, use the import syntax, and add the following property in the package.json file: "type": "module"

import _ from 'lodash'

console.log(_.flattenDeep([1, [2, [3, [4]]]]))
