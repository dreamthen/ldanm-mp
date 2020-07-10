const shelljs = require('shelljs');

const copyPathToLib = () => {
  shelljs.exec("source ./bash/build.bash");
};

copyPathToLib();
