const EmailXConfiguration = require('@parameter1/base-cms-marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://acbm.serve.email-x.parameter1.com');

config
  .setAdUnits('industry-news', [
    {
      name: 'banner-1',
      id: '5c59b66f465d19d33cab86c5',
      width: 600,
      height: 100,
    },
    {
      name: 'banner-2',
      id: '5e344d96300233837f9969e3',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('technology-news-tracker', [
    {
      name: 'banner-1',
      id: '5e504dd0c7f99e17e3009e37',
      width: 600,
      height: 100,
    },
    {
      name: 'banner-2',
      id: '5e90b88f83509d70e7c1db94',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('economic-market-outlook', [
    {
      name: 'banner-1',
      id: '5c59b78a5a66db55f1d47c0e',
      width: 600,
      height: 100,
    },
    {
      name: 'banner-2',
      id: '5e344dda88eecd8310a701eb',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('in-the-cab', [
    {
      name: 'banner-1',
      id: '5c59b6e05a66db9b1ed47b69',
      width: 600,
      height: 100,
    },
    {
      name: 'banner-2',
      id: '5e344daf88eecd7d61a701d7',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('the-electric-age', [
    {
      name: 'banner-1',
      id: '5c59b6095a66db4bf4d47adf',
      width: 600,
      height: 100,
    },
    {
      name: 'banner-2',
      id: '5e344d76a4b64dbe0e528dde',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('engine-revolutions', [
    {
      name: 'banner-1',
      id: '5c59b85d465d195d2eab88ab',
      width: 600,
      height: 100,
    },
    {
      name: 'banner-2',
      id: '5e344ded88eecd842fa701f5',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('drivetrain-technology-update', [
    {
      name: 'banner-1',
      id: '5c59b7d8465d191461ab8818',
      width: 600,
      height: 100,
    },
    {
      name: 'banner-2',
      id: '5e344e1488eecd0d9fa70209',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('efficient-design-manufacturing', [
    {
      name: 'banner-1',
      id: '5c59b81d5a66db0579d47cbc',
      width: 600,
      height: 100,
    },
    {
      name: 'banner-2',
      id: '5e344e0288eecdc09ba701ff',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('fluid-power-progress', [
    {
      name: 'banner-1',
      id: '5c59b72b465d19149fab874f',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('show-report', [
    {
      name: 'banner-1',
      id: '61d4a00201e4b37b3a5d5447',
      width: 600,
      height: 100,
    },
    {
      name: 'banner-2',
      id: '61d4a0157c98022e4c67c81a',
      width: 600,
      height: 100,
    },
  ]);
module.exports = config;
