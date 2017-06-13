// Copyright 2017 TODO Group. All rights reserved.
// Licensed under the Apache License, Version 2.0.

module.exports = function(options, targetDir) {
  const fs = options.fs || require('../lib/file_system');
  const content = fs.getFileContents(targetDir, options.file);

  if (content) {
    if (content.toString().match(options.content)) {
      return {
        passes: [`File ${options.file} contains ${options.content}`]
      };
    } else {
      return {
        failures: [`File ${options.file} doesn't contain ${options.content}`]
      };
    }
  }
  
  return {};
}
