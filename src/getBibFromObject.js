module.exports = function getBibFromObject(data) {

	data =  data.trim();

	// console.log(data);
	let objs = []; // An array  which will be used to store bib objects after conversion
	let arr = data.match(/@\w+\{.+\,(\s*\w+\s*=\s*["\{].*["\}](\,)?)+\s*\}/g);

	// console.log("ARRAY:\n");
	// console.log(arr);

	if(!(arr.length > 0)) {
		console.log('It seems your bib file does not match/satisfy the standard bib file syntax')
		return null;
	}

	for(let i=0; i < arr.length; i++) {
		let obj = getBibObj(arr[i]);

		if (obj !== null) {
			objs.push(obj);
		} else {
			console.log('Please correct your BibTeX syntax as mentioned then try' +
				"\nProperly provide/use the \" (double quotes) and { & } (curley braces) in the bib file");
			return null;
		}
	}

	if(arr.length === 1) {
		// console.log("Got bib file with only 1 bib ENTRY")
		return objs[0];
	} else {
		return objs; // Return an array of objects (each object represents a 
					// single converted version (as an object) of bib entry in file)
	}
}

// Function which returns an object once it gets the content of a bib file
// It will be called based on the number of bib entries in a bib file
function getBibObj(data) {
	// console.log('=========================================================')
	// console.log('DATA:- ', data, typeof data);
	data = data.trim();
	// console.log('Got => ')
	// console.log(data)
	let arr = data.match(/\w+\s*=\s*("|\{).*("|\})/g);
	// console.log(arr);

	let obj = {};

	// Entry type
	/* EXAMPLES

		1.	@misc{Nobody06,author="NobodyJr",title="My Article",year="2006"}
		2.	@book{spwi95,year={1995},author={Brinkley,Richard},editor={Spade,Paul Vincent and Wilson, GordonA.},title={RichardBrinkley's Obligationes:ALate Fourteenth Century TreatiseontheLogicofDisputation},series={Beitr\"{a}gezur Geschichteder Philosophieund Theologiedes Mittelalters,neueFolge},volume={43},address={M\"{u}nsteri.W.},publisher={Aschendorff},flanguage={Language},translator={Lastname,Firstname}}
	*/
	var key = data.match(/^@\w+/g)[0].slice(1);
	obj["entryType"] = key;
	// console.log(key);

	obj["key"] = data.slice(key.length+2, data.indexOf(","));
	obj["data"] = {};

	arr.forEach((item) => {
			let arr2 = item.split('=');

			let value = arr2[1].trim().replace(/["\}\{]/g, "").trim();

			if(/^\d+$/g.test(value)) // If value is an integer
				obj["data"][arr2[0].trim()] = parseInt(value);
			else // otherwise
				obj.data[arr2[0].trim()] = value;
	});

	// console.log(obj);

	return obj; // Return the object containing the details available in bib(.bib) file
}
