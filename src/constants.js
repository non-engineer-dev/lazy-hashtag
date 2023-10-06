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
  device: 'iPhone 13',
  category: 'Street',
  isLightroom: true,
  isMonochrome: false,
  isMacro: false,
};

const hashtags = {
  common: '#photography #explore #feed #instadaily #picoftheday',
  india:
    '#MyPixelDiary @photographers.of.india #_Indiasb @indiashutterbugs #bizarreindia @bizarre.india #desi_diaries @desi_diaries #asia_photo_magazine @asia_photo_magazine #indiapictures #budpoi #instacanvassy #reflectionofindia #indiaphotographyhub',
  world: '@artofvisuals #500px @500px #1x @1x #world_photography_page',
  travel: '#stayandwander @stayandwander',
  streetDelhi: '#streetphotographydelhi',
  category: {
    Street:
      '#street #streetphotography #bcncollective #streetphotographyindia #_soi',
    Portrait: '#portrait #portraitphotography',
    Bird: '#bird #birdphotography',
    Landscape: '#landscape #landscapephotography',
    Event: '#event #eventphotography',
  },
  device: {
    'OnePlus 3T': '#ShotOnOnePlus @oneplus',
    'Samsung S10': '#samsungphotography @samsung @samsungmobile',
    'Canon 550D':
      '#canonphotography #CANwithCanon #CapturedOnCanon @canonindia_official',
    'Nikon D7000': '#nikon #nikonphotography @nikonindiaofficial',
    'iPhone 13': '#ShotoniPhone @apple',
  },
  lightroom: '#MadeWithLightroom',
  monochrome: '#Bnw_India @bnw_india',
  colored: '#_coi @colours.of.india',
  macro:
    '#macro #macrophotography #indianmacro @indianmacro #unseenmacro @unseenmacro #macrophotographylove @macrophotographylove #macroandflora @macroandflora',
};

export { deviceOptions, categoryOptions, defaultForm, hashtags };
