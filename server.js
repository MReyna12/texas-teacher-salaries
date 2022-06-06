const express = require('express');
const app = express();
const PORT = 8000;

const houstonSchoolDistricts = [{
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
  },
  {
    'alief': {
      name: 'Alief Independent School District'
    },
  },
  {
    'clear creek': {
      name: 'Clear Creek Independent School District'
    },
  },
  {
    'crosby': {
    name: 'Crosby Independent School District'
    },
  },
  {
    'cypress': {
      name: 'Cypress Independent School District'
    },
  },
  {
    'fort bend': {
      name: 'Fort Bend Independent School District'
    },
  },
  {
    'galena park': {
      name: 'Galena Park Independent School District'
    },
  },
  {
    'houston': {
      name: 'Houston Independent School District',
      superintendent_name: 'Millard House II',
      superintendent_telephone: '713-556-6300',
      superintendent_email: 'hisdsuperintendent@hisd.org',
      superintendent_address: '4400 West 18th Street, Houston, Texas 77092',
      board_of_education_telephone: '713-556-6121',
      board_of_education_email: 'boardservices@houstonisd.org',
      board_of_education_trustees: 'https://www.houstonisd.org/domain/10786',
      salary: {
        'school year': [
          {
            '2021-2022': {
              yoe: [
                {
                  zero: {
                    '10 months': '$56,869',
                    '10.5 months': '$59,712',
                    '11 months': '$62,556',
                    '11.5 months': '$65,399',
                    '12 months': '$68,243'
                  }
                },
                {
                  one: {
                    '10 months': '$57,019',
                    '10.5 months': '$59,870',
                    '11 months': '$62,721',
                    '11.5 months': '$65,572',
                    '12 months': '$68,423'
                  }
                },
                {
                  two: {
                    '10 months': '$57,169',
                    '10.5 months': '$60,027',
                    '11 months': '$62,886',
                    '11.5 months': '$65,744',
                    '12 months': '$68,603'
                  }
                },
                {
                  three: {
                    '10 months': '$57,319',
                    '10.5 months': '$60,185',
                    '11 months': '$63,051',
                    '11.5 months': '$65,917',
                    '12 months': '$68,783'
                  }
                },
                {
                  four: {
                    '10 months': '$57,481',
                    '10.5 months': '$60,355',
                    '11 months': '$63,229',
                    '11.5 months': '$66,103',
                    '12 months': '$68,977'
                  }
                },
                {
                  five: {
                    '10 months': '$58,012',
                    '10.5 months': '$60,913',
                    '11 months': '$63,813',
                    '11.5 months': '$66,714',
                    '12 months': '$69,614'
                  }
                },
                {
                  six: {
                    '10 months': '$58,542',
                    '10.5 months': '$61,469',
                    '11 months': '$64,396',
                    '11.5 months': '$67,323',
                    '12 months': '$70,250'
                  }
                },
                {
                  seven: {
                    '10 months': '$59,820',
                    '10.5 months': '$62,811',
                    '11 months': '$65,802',
                    '11.5 months': '$68,793',
                    '12 months': '$71,784'
                  }
                },
                {
                  eight: {
                    '10 months': '$60,090',
                    '10.5 months': '$63,095',
                    '11 months': '$66,099',
                    '11.5 months': '$69,104',
                    '12 months': '$72,108'
                  }
                },
                {
                  nine: {
                    '10 months': '$60,360',
                    '10.5 months': '$63,378',
                    '11 months': '$66,396',
                    '11.5 months': '$69,414',
                    '12 months': '$72,432'
                  }
                },
                {
                  ten: {
                    '10 months': '$61,185',
                    '10.5 months': '$64,244',
                    '11 months': '$67,304',
                    '11.5 months': '$70,363',
                    '12 months': '$73,422'
                  }
                },
                {
                  eleven: {
                    '10 months': '$61,457',
                    '10.5 months': '$64,530',
                    '11 months': '$67,603',
                    '11.5 months': '$70,676',
                    '12 months': '$73,748'
                  }
                },
                {
                  twelve: {
                    '10 months': '$62,018',
                    '10.5 months': '$65,119',
                    '11 months': '$68,220',
                    '11.5 months': '$71,321',
                    '12 months': '$74,422'
                  }
                },
                {
                  thirteen: {
                    '10 months': '$62,292',
                    '10.5 months': '$65,407',
                    '11 months': '$68,521',
                    '11.5 months': '$71,636',
                    '12 months': '$74,750'
                  }
                },
                {
                  fourteen: {
                    '10 months': '$62,566',
                    '10.5 months': '$65,694',
                    '11 months': '$68,823',
                    '11.5 months': '$71,951',
                    '12 months': '$75,079'
                  }
                },
                {
                  fifteen: {
                    '10 months': '$62,841',
                    '10.5 months': '$65,983',
                    '11 months': '$69,125',
                    '11.5 months': '$72,267',
                    '12 months': '$75,409'
                  }
                },
                {
                  sixteen: {
                    '10 months': '$63,115',
                    '10.5 months': '$66,271',
                    '11 months': '$69,427',
                    '11.5 months': '$72,582',
                    '12 months': '$75,738'
                  }
                },
                {
                  seventeen: {
                    '10 months': '$63,683',
                    '10.5 months': '$66,867',
                    '11 months': '$70,051',
                    '11.5 months': '$73,235',
                    '12 months': '$76,420'
                  }
                },
                {
                  eighteen: {
                    '10 months': '$64,234',
                    '10.5 months': '$67,446',
                    '11 months': '$70,657',
                    '11.5 months': '$73,869',
                    '12 months': '$77,081'
                  }
                },
                {
                  nineteen: {
                    '10 months': '$64,786',
                    '10.5 months': '$68,025',
                    '11 months': '$71,265',
                    '11.5 months': '$74,504',
                    '12 months': '$77,743'
                  }
                },
                {
                  twenty: {
                    '10 months': '$66,208',
                    '10.5 months': '$69,518',
                    '11 months': '$72,829',
                    '11.5 months': '$76,139',
                    '12 months': '$79,450'
                  }
                },
                {
                  twentyone: {
                    '10 months': '$66,653',
                    '10.5 months': '$69,986',
                    '11 months': '$73,318',
                    '11.5 months': '$76,651',
                    '12 months': '$79,984'
                  }
                },
                {
                  twentytwo: {
                    '10 months': '$69,018',
                    '10.5 months': '$72,469',
                    '11 months': '$75,920',
                    '11.5 months': '$79,371',
                    '12 months': '$82,822'
                  }
                },
                {
                  twentythree: {
                    '10 months': '$69,157',
                    '10.5 months': '$72,615',
                    '11 months': '$76,073',
                    '11.5 months': '$79,531',
                    '12 months': '$82,988'
                  }
                },
                {
                  twentyfour: {
                    '10 months': '$69,602',
                    '10.5 months': '$73,082',
                    '11 months': '$76,562',
                    '11.5 months': '$80,042',
                    '12 months': '$83,522'
                  }
                },
                {
                  twentyfive: {
                    '10 months': '$71,128',
                    '10.5 months': '$74,684',
                    '11 months': '$78,241',
                    '11.5 months': '$81,797',
                    '12 months': '$85,354'
                  }
                },
                {
                  twentysix: {
                    '10 months': '$71,689',
                    '10.5 months': '$75,273',
                    '11 months': '$78,858',
                    '11.5 months': '$82,442',
                    '12 months': '$86,027'
                  }
                },
                {
                  twentyseven: {
                    '10 months': '$72,700',
                    '10.5 months': '$76,335',
                    '11 months': '$79,970',
                    '11.5 months': '$83,605',
                    '12 months': '$87,240'
                  }
                },
                {
                  twentyeight: {
                    '10 months': '$73,655',
                    '10.5 months': '$77,338',
                    '11 months': '$81,021',
                    '11.5 months': '$84,703',
                    '12 months': '$88,386'
                  }
                },
                {
                  twentynine: {
                    '10 months': '$73,936',
                    '10.5 months': '$77,633',
                    '11 months': '$81,330',
                    '11.5 months': '$85,026',
                    '12 months': '$88,723'
                  }
                },
                {
                  thirty: {
                    '10 months': '$74,609',
                    '10.5 months': '$78,339',
                    '11 months': '$82,070',
                    '11.5 months': '$85,800',
                    '12 months': '$89,531'
                  }
                },
                {
                  thirtyone: {
                    '10 months': '$75,620',
                    '10.5 months': '$79,401',
                    '11 months': '$83,182',
                    '11.5 months': '$86,963',
                    '12 months': '$90,744'
                  }
                },
                {
                  thirtytwo: {
                    '10 months': '$76,070',
                    '10.5 months': '$79,874',
                    '11 months': '$83,677',
                    '11.5 months': '$87,481',
                    '12 months': '$91,284'
                  }
                },
                {
                  thirtythree: {
                    '10 months': '$76,744',
                    '10.5 months': '$80,581',
                    '11 months': '$84,418',
                    '11.5 months': '$88,256',
                    '12 months': '$92,093'
                  }
                },
                {
                  thirtyfour: {
                    '10 months': '$77,642',
                    '10.5 months': '$81,524',
                    '11 months': '$85,406',
                    '11.5 months': '$89,288',
                    '12 months': '$93,170'
                  }
                },
                {
                  thirtyfive: {
                    '10 months': '$78,597',
                    '10.5 months': '$82,527',
                    '11 months': '$86,457',
                    '11.5 months': '$90,387',
                    '12 months': '$94,316'
                  }
                },
                {
                  thirtysix: {
                    '10 months': '$80,562',
                    '10.5 months': '$84,590',
                    '11 months': '$88,618',
                    '11.5 months': '$92,646',
                    '12 months': '$96,674'
                  }
                },
                {
                  thirtyseven: {
                    '10 months': '$82,809',
                    '10.5 months': '$86,949',
                    '11 months': '$91,090',
                    '11.5 months': '$95,230',
                    '12 months': '$99,371'
                  }
                },
                {
                  thirtyeight: {
                    '10 months': '$83,309',
                    '10.5 months': '$87,474',
                    '11 months': '$91,640',
                    '11.5 months': '$95,805',
                    '12 months': '$99,971'
                  }
                },
                {
                  thirtynine: {
                    '10 months': '$83,809',
                    '10.5 months': '$87,999',
                    '11 months': '$92,190',
                    '11.5 months': '$96,380',
                    '12 months': '$100,571'
                  }
                },
                {
                  forty: {
                    '10 months': '$84,309',
                    '10.5 months': '$88,524',
                    '11 months': '$92,740',
                    '11.5 months': '$96,955',
                    '12 months': '$101,171'
                  }
                }
              ]
            }
          },
          {
            '2022-2023': {
              yoe: [
                {
                  zero: {
                    '10 months': '$',
                    '10.5 months': '$',
                    '11 months': '$',
                    '11.5 months': '$',
                    '12 months': '$'
                  }
                },
              ]
            }
          },
        ]
      }
    },
  },
  {
    'huffman': {
      name: 'Huffman Independent School District'
    },
  },
  {
    'humble': {
      name: 'Humble Independent School District'
    },
  },
  {
    'katy': {
      name: 'Katy Independent School District'
    },
  },
  {
    'klein': {
      name: 'Klein Independent School District'
    },
  },
  {
    'lamar': {
      name: 'Lamar Consolidated Independent School District'
    },
  },
  {
    'new caney': {
      name: 'New Caney Independent School District'
    },
  },
  {
    'pasadena': {
      name: 'Pasadena Independent School District'
    },
  },
  {
    'sheldon': {
      name: 'Sheldon Independent School District'
    },
  },
  {
    'spring': {
      name: 'Spring Independent School District'
    },
  },
  {
    'spring branch': {
      name: 'Spring Branch Independent School District'
    },
  },
  {
    'tomball': {
      name: 'Tomball Independent School District'
    },
  },
]

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api', (req, res) => {
  res.json(houstonSchoolDistricts);
  //console.log(houstonSchoolDistricts[7].houston.salary['school year'][0]['2021-2022'].yoe[0].zero['10 months'])
});

// Return data for specific school district
app.get('/api/:name', (req, res) => {
  const schoolDistrictName = req.params.name.toLowerCase();
  for (let i = 0; i < houstonSchoolDistricts.length; i++) {
    if (houstonSchoolDistricts[i][schoolDistrictName]) {
      res.json(houstonSchoolDistricts[i][schoolDistrictName])
    }
  }
});

app.listen(PORT, () => {
  console.log(`The server is now running on port: ${PORT}.`)
});