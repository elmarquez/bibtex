const bibtex = require("../index");
const bib = new bibtex();

describe('read bibtext file as object', function() {
    it('should return an array', function(done) {
        const bibArr = bib.getBibAsObject2('tests/fixtures/BibTeX_multiple.bib');
        expect(bibArr).to.exist;
        expect(Array.isArray(bibArray)).to.equal(true);
        done();
    });
    it('should return an object', function(done) {
        const bibObj = bib.getBibAsObject2('tests/fixtures/examples/BibTeX_example01_book.bib');
        expect(bibObj).to.exist;
        done();
    });
    it('should return a v2 object', function(done) {
        const bibObj2 = bib.getBibAsObject2('tests/fixtures/BibTeX_example02_misc.bib');
        expect(bibObj).to.exist;
        done();
    });
});
