const model = require('../models/School');
const messages = require('../constants/messages');

exports.addSchool = (school) => {
    // remove id if it existse
    delete school._id;

    // validation
    if ('name' in school && typeof school.name === 'string'
        && 'address' in school && typeof school.address === 'object'
        && 'street' in school.address && typeof school.address.street === 'string'
        && 'suburb' in school.address && typeof school.address.suburb === 'string'
        && 'postcode' in school.address && typeof school.address.postcode === 'string'
        && 'state' in school.address && typeof school.address.state === 'string'
        && 'studentCount' in school && typeof school.studentCount === 'number'
    ) {
        console.log('valid school');

        return model.create(school, (schl, error) => {
            if (error) {
                return error;
            } if (schl) {
                return 200;
            }
            return messages.INTERNAL_SERVER_ERROR;
        });
    }
    console.log('school invalid');
    return messages.REQUEST_DATA_INVALID;
};

exports.getSchoolById = (id) => model.findById(
    id, (err, doc) => {
        if (err) {
            console.log(err);
            return err;
        }
        return doc;
    },
);

exports.getAllSchools = () => model.find(
    {}, (err, doc) => {
        if (err) return err;
        return doc;
    },
);
