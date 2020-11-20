const bibtex = require("../index");
const path = require('path');

const bib = new bibtex();

describe('bibtex', function () {
  describe('load from file', function() {
    it('should return a bibtext object from an existing file', function () {
      const bibObject = bib.getBibFromFile('tests/fixtures/BibTeX_example02_misc.bib');
      const bibObject2 = bib.getBibFromFile('tests/fixtures/BibTeX_example08_book_diff.bib');
      const bibArr = bib.getBibFromFile('tests/fixtures/BibTeX_multiple.bib');
    });
  });
});
