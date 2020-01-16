// https://nwalsh.com/tex/texhelp/bibtx-7.html
// http://bib-it.sourceforge.net/help/fieldsAndEntryTypes.php
//
// Programmed on: 14 Sep 2018, Fri
// Updated on   : 10 Oct 2018, Wed

const getEntryTypes = require('./getEntryTypes');
const getEntryTypeFields = require('./getEntryTypeFields');
const getEntryTypeDescription = require("./getEntryTypeDescription");
const getEntryTypeFieldsDescription = require("./getEntryTypeFieldsDescription");
const getFormFor = require("./getFormFor");
const getFields = require("./getFields");
const getBibTeXTemplateFor = require("./getBibTeXTemplateFor");
const getBibFromFile = require("./getBibFromFile");
const getBibFromObject = require("./getBibFromObject");
const getBibCodeFromObject = require("./getBibCodeFromObject");

class BibTeX {
	// Definition of BibTeX's constructor
	constructor() {
		this.entryTypes = getEntryTypes();
		this.entryTypeFields = getEntryTypeFields();
		this.entryTypeDescription = getEntryTypeDescription();
		this.entryTypeFieldsDescription = getEntryTypeFieldsDescription();
		this.getFormFor = getFormFor;
		this.getFields = getFields;
		this.getBibTeXTemplateFor = getBibTeXTemplateFor;
		this.getBibFromFile = getBibFromFile;
		this.getBibFromObject = getBibFromObject;
		this.getBibCodeFromObject = getBibCodeFromObject;
	}

	// Getting all the entry types available in BibTeX
	getEntryTypes() {
		return this.entryTypes;
	}

	// Getting all the entry type fields (required + optional)
	getEntryTypeFields() {
		return this.entryTypeFields;
	}

	// Getting specific entry type fields based on their name
	getSpecificEntryTypeFields(entryTypeName) {
		// Converting entry type to lower case 
		entryTypeName = entryTypeName.toLowerCase();

		// If entry type is available in the list
		if(this.entryTypes.indexOf(entryTypeName) > -1) {
			return this.getEntryTypeFields()[entryTypeName];
		} else { // return null if it does not exist
			return null;
		}
	}

	// Getting Entry types description
	getEntryTypeDescription() {
		return this.entryTypeDescription;
	}

	// Getting Entry types, fileds, description
	getEntryTypeFieldsDescription() {
		return this.entryTypeFieldsDescription;
	}
}

module.exports = BibTeX;
