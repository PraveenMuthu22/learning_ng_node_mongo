const School = require('../models/School');

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
    } else {
        console.log('school invalid');
    }

    // School.create(school, (error) => {
    //     if (error) { console.log('Error adding school ', error); }
    // });
};

exports.getSchoolById = () => {

}