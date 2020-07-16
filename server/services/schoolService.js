const model = require('../models/School');

exports.addSchool = (school) => {
    // validation
    if ('name' in school && typeof school.name === 'string'
        && 'address' in school && typeof school.address === 'object'
        && 'street' in school.address && typeof school.address.street === 'string'
        && 'suburb' in school.address && typeof school.address.suburb === 'string'
        && 'postcode' in school.address && typeof school.address.postcode === 'number'
        && 'state' in school.address && typeof school.address.state === 'string'
        && 'studentCount' in school && typeof school.studentCount === 'number'
    ) {
        console.log('valid school');

        model.create(school, (error) => {
            if (error) { console.log('Error adding school ', error); }
        });
    } else {
        console.log('school invalid');
    }
};

exports.searchSchoolByName = (searchString) => {
    const searchStrings = searchString.split(' ');
    console.log(searchStrings);

    return model.find(
        { name: new RegExp(searchString) }, (err, doc) => {
            if (err) return err;
            return doc;
        },
    );
};
