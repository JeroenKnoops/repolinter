// Copyright 2017 TODO Group. All rights reserved.
// Licensed under the Apache License, Version 2.0.

const linguist = require('../lib/linguist')
module.exports = function (fileSystem) {
  const languages = []
  try {
    var jsonObj = linguist.identifyLanguagesSync(fileSystem.targetDir)
    for (var language in jsonObj) {
      languages.push(language.toLowerCase())
    }
  } catch (error) {
    if (error.message === 'Linguist not installed') {
      console.log('Linguist Axiom: Linguist not found in path, only running language-independent rules')
    } else {
      console.log(error)
    }
  }
  return languages
}
