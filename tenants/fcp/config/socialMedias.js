/**
 * File stores all of the social media links for the given newsletter.
 * getSocials.js finds the newsletter by alias, then returns the data in 'medias' to
 * footer.marko to print the social media images/links.
 */

const shortcuts = require('./socialShortcuts');

const { socials } = shortcuts;

module.exports = {
  socialMedias: [
    {
      newsletter: 'road-building-update',
      medias: socials.asphaltContractor,
    },
    {
      newsletter: 'breaking-ground',
      medias: socials.equipmentToday,
    },
    {
      newsletter: 'crane-connection',
      medias: socials.rentalMagazine,
    },
    {
      newsletter: 'headline-news',
      medias: socials.fcp,
    },
    {
      newsletter: 'new-machine-solutions',
      medias: socials.fcp,
    },
    {
      newsletter: 'power-rental',
      medias: socials.rentalMagazine,
    },
    {
      newsletter: 'rental-weekly-recap',
      medias: socials.rentalMagazine,
    },
    {
      newsletter: 'show-report',
      medias: [
        socials.fcp[0],
        socials.fcp[2],
        socials.fcp[4],
      ],
    },
    {
      newsletter: 'the-contractors-best-friend-rewind',
      medias: socials.fcp,
    },
    {
      newsletter: 'the-contractors-best-friend',
      medias: socials.fcp,
    },
    {
      newsletter: 'truck-report',
      medias: socials.fcp,
    },
    {
      newsletter: 'opening-news-views',
      medias: socials.forDSS,
    },
    {
      newsletter: 'rental-weekly-recap',
      medias: socials.rentalMagazine,
    },
    {
      newsletter: 'rental-watch',
      medias: socials.rentalMagazine,
    },
    {
      newsletter: 'rental-market-watch',
      medias: socials.rentalMagazine,
    },
    {
      newsletter: 'modern-fleet-management',
      medias: socials.fcp,
    },
    {
      newsletter: 'in-the-mix',
      medias: socials.concreteContractor,
    },
    {
      newsletter: 'ipaf',
      medias: socials.fcp,
    },
    {
      newsletter: 'construction-zone-safety',
      medias: socials.fcp,
    },
    {
      newsletter: 'construction-workforce-management',
      medias: socials.fcp,
    },
    {
      newsletter: 'construction-technology',
      medias: socials.fcp,
    },
    {
      newsletter: 'blacktop-update',
      medias: socials.pavementMagazine,
    },
    {
      newsletter: 'lube-report',
      medias: socials.fcp,
    },
    {
      newsletter: 'show-report-conexpo',
      medias: socials.fcp,
    },
  ],
};
