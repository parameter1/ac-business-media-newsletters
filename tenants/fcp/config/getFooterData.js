/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
const socialsArray = require('./socialMedias');
const companyArray = require('./footers');

const getSocials = (newsletter) => {
  for (let i = 0; i < socialsArray.socialMedias.length; i++) {
    if (socialsArray.socialMedias[i].newsletter === newsletter) {
      return socialsArray.socialMedias[i].medias;
    }
  }
};

const getCompany = (company) => {
  for (let i = 0; i < companyArray.footers.length; i++) {
    if (companyArray.footers[i].alias === company) {
      return companyArray.footers[i];
    }
  }
};

module.exports.getSocials = getSocials;
module.exports.getCompany = getCompany;
