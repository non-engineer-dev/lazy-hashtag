const deviceOptions = [
  'OnePlus 3T',
  'Samsung S10',
  'Canon 550D',
  'Nikon D7000',
  'iPhone 13',
];

const categoryOptions = ['Street', 'Portrait', 'Bird', 'Landscape', 'Event'];

const defaultForm = {
  title: '',
  year: '',
  device: '',
  category: '',
  isMonochrome: false,
};

const hashtags = {
  common: '#photography #explore #feed #instadaily $#picoftheday',
  category: {
    Street: '#street #streetphotography #streetphotographer',
    Portrait: '#portrait #portraitphotography #portraitphotographer',
    Bird: '#bird #birdphotography #birdphotographer',
    Landscape: '#landscape #landscapephotography #landscapephotographer',
    Event: '#event #eventphotography #eventphotographer',
  },
  device: {
    'OnePlus 3T': '#oneplus #oneplusphotography',
    'Samsung S10': '#samsung #samsungphotography',
    'Canon 550D': '#canon #canonphotography',
    'Nikon D7000': '#nikon #nikonphotography',
    'iPhone 13': '#apple #shotoniphone',
  },
  channels:
    '#indiapictures #desi_diaries #_indiasb #_soi #mypixeldiary #1x #500px #budpoi #instacanvassy #_coi #world_photography_page #reflectionofindia #indiaphotographyhub #bcncollective',
};

export { deviceOptions, categoryOptions, defaultForm, hashtags };
