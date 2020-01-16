const bibtex = require("../index");
const path = require('path');

const bib = new bibtex();
const cwd = process.cwd();

describe('bibtex', function () {

  describe('load from file', function() {

    it('should return a bibtext object from an existing file', function () {
      // Bib file path (Absoulte/Relative)
      // './docs/examples/BibTeX_example02_misc.bib'
      // '.\\docs\\examples\\BibTeX_example02_misc.bib' also works fine in Windows

      /* EXAMPLE 1*/
      const bibObject = bib.getBibFromFile('./docs/examples/BibTeX_example02_misc.bib');
      console.log(JSON.stringify(bibObject, null, 4));
      console.log('\n');

      /* EXAMPLE 2*/
      const bibObject2 = bib.getBibFromFile('./docs/examples/BibTeX_example08_book_diff.bib');
      console.log(JSON.stringify(bibObject2, null, 4));
      console.log('\n');

      /* EXAMPLE 3*/
      const bibArr = bib.getBibFromFile('./docs/examples/BibTeX_multiple.bib');
      console.log(JSON.stringify(bibArr, null, 4));

    });

  });
});
