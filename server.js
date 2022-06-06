const express = require('express');
const app = express();
const PORT = 8000;

const houstonSchoolDistricts = {
  'aldine': {
    name: 'Aldine Independent School District',
    salary: {
      yoe: {
        zero: {
          '10 months': '$',
          '10.5 months': '$',
          '11 months': '$',
          '11.5 months': '$',
          '12 months': '$'
        }
      }
    }
  },

  'alief': {
    name: 'Alief Independent School District'
  },

  'clear creek': {
    name: 'Clear Creek Independent School District'
  },

  'crosby': {
    name: 'Crosby Independent School District'
  },

  'cypress': {
    name: 'Cypress Independent School District'
  },

  'fort bend': {
    name: 'Fort Bend Independent School District'
  },

  'galena park': {
    name: 'Galena Park Independent School District'
  },

  'houston': {
    name: 'Houston Independent School District',
    salary: {
      'school year': {
        '2021-2022': {
          yoe: {
            zero: {
              '10 months': '$56,869',
              '10.5 months': '$59,712',
              '11 months': '$62,556',
              '11.5 months': '$65,399',
              '12 months': '$68,243'
            },
            one: {
              '10 months': '$57,019',
              '10.5 months': '$59,870',
              '11 months': '$62,721',
              '11.5 months': '$65,572',
              '12 months': '$68,423'
            },
            two: {
              '10 months': '$57,169',
              '10.5 months': '$60,027',
              '11 months': '$62,886',
              '11.5 months': '$65,744',
              '12 months': '$68,603'
            },
            three: {
              '10 months': '$57,319',
              '10.5 months': '$60,185',
              '11 months': '$63,051',
              '11.5 months': '$65,917',
              '12 months': '$68,783'
            },
            four: {
              '10 months': '$57,481',
              '10.5 months': '$60,355',
              '11 months': '$63,229',
              '11.5 months': '$66,103',
              '12 months': '$68,977'
            },
            five: {
              '10 months': '$58,012',
              '10.5 months': '$60,913',
              '11 months': '$63,813',
              '11.5 months': '$66,714',
              '12 months': '$69,614'
            },
            six: {
              '10 months': '$58,542',
              '10.5 months': '$61,469',
              '11 months': '$64,396',
              '11.5 months': '$67,323',
              '12 months': '$70,250'
            },
            seven: {
              '10 months': '$59,820',
              '10.5 months': '$62,811',
              '11 months': '$65,802',
              '11.5 months': '$68,793',
              '12 months': '$71,784'
            },
            eight: {
              '10 months': '$60,090',
              '10.5 months': '$63,095',
              '11 months': '$66,099',
              '11.5 months': '$69,104',
              '12 months': '$72,108'
            },
            nine: {
              '10 months': '$60,360',
              '10.5 months': '$63,378',
              '11 months': '$66,396',
              '11.5 months': '$69,414',
              '12 months': '$72,432'
            },
            ten: {
              '10 months': '$61,185',
              '10.5 months': '$64,244',
              '11 months': '$67,304',
              '11.5 months': '$70,363',
              '12 months': '$73,422'
            },
            eleven: {
              '10 months': '$61,457',
              '10.5 months': '$64,530',
              '11 months': '$67,603',
              '11.5 months': '$70,676',
              '12 months': '$73,748'
            },
            twelve: {
              '10 months': '$62,018',
              '10.5 months': '$65,119',
              '11 months': '$68,220',
              '11.5 months': '$71,321',
              '12 months': '$74,422'
            },
            thirteen: {
              '10 months': '$62,292',
              '10.5 months': '$65,407',
              '11 months': '$68,521',
              '11.5 months': '$71,636',
              '12 months': '$74,750'
            },
            fourteen: {
              '10 months': '$62,566',
              '10.5 months': '$65,694',
              '11 months': '$68,823',
              '11.5 months': '$71,951',
              '12 months': '$75,079'
            },
            fifteen: {
              '10 months': '$62,841',
              '10.5 months': '$65,983',
              '11 months': '$69,125',
              '11.5 months': '$72,267',
              '12 months': '$75,409'
            },
            sixteen: {
              '10 months': '$63,115',
              '10.5 months': '$66,271',
              '11 months': '$69,427',
              '11.5 months': '$72,582',
              '12 months': '$75,738'
            },
            seventeen: {
              '10 months': '$63,683',
              '10.5 months': '$66,867',
              '11 months': '$70,051',
              '11.5 months': '$73,235',
              '12 months': '$76,420'
            },
            eighteen: {
              '10 months': '$64,234',
              '10.5 months': '$67,446',
              '11 months': '$70,657',
              '11.5 months': '$73,869',
              '12 months': '$77,081'
            },
            nineteen: {
              '10 months': '$64,786',
              '10.5 months': '$68,025',
              '11 months': '$71,265',
              '11.5 months': '$74,504',
              '12 months': '$77,743'
            },
            twenty: {
              '10 months': '$66,208',
              '10.5 months': '$69,518',
              '11 months': '$72,829',
              '11.5 months': '$76,139',
              '12 months': '$79,450'
            },
          }
        }
      }
    }
  },

  'huffman': {
    name: 'Huffman Independent School District'
  },

  'humble': {
    name: 'Humble Independent School District'
  },

  'katy': {
    name: 'Katy Independent School District'
  },

  'klein': {
    name: 'Klein Independent School District'
  },

  'lamar': {
    name: 'Lamar Consolidated Independent School District'
  },

  'new caney': {
    name: 'New Caney Independent School District'
  },

  'pasadena': {
    name: 'Pasadena Independent School District'
  },

  'sheldon': {
    name: 'Sheldon Independent School District'
  },

  'spring': {
    name: 'Spring Independent School District'
  },

  'spring branch': {
    name: 'Spring Branch Independent School District'
  },

  'tomball': {
    name: 'Tomball Independent School District'
  },
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api', (req, res) => {
  res.json(houstonSchoolDistricts);
  //console.log(houstonSchoolDistricts['houston'].salary.yoe.zero['10 months'])
});

// Return object for specific school district name
/*app.get('/api/:name', (req, res) => {
  const schoolDistrictName = req.params.name.toLowerCase();
  if (houstonSchoolDistricts[schoolDistrictName]) {
    res.json(houstonSchoolDistricts[schoolDistrictName]);
  }
});*/

app.listen(PORT, () => {
  console.log(`The server is now running on port: ${PORT}.`)
});