const express = require('express');
const app = express();
const PORT = 8000;

const houstonSchoolDistricts = {
  'aldine': {
    name: 'Aldine Independent School District',
    salary: {
      yoe: {
        '0': {
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
          '10 months': '$56,869',
          '10.5 months': '$59,712',
          '11 months': '$62,556',
          '11.5 months': '$65,399',
          '12 months': '$68,243'
        },
        four: {
          '10 months': '$56,869',
          '10.5 months': '$59,712',
          '11 months': '$62,556',
          '11.5 months': '$65,399',
          '12 months': '$68,243'
        },
        five: {
          '10 months': '$56,869',
          '10.5 months': '$59,712',
          '11 months': '$62,556',
          '11.5 months': '$65,399',
          '12 months': '$68,243'
        },
        six: {
          '10 months': '$56,869',
          '10.5 months': '$59,712',
          '11 months': '$62,556',
          '11.5 months': '$65,399',
          '12 months': '$68,243'
        },
        seven: {
          '10 months': '$56,869',
          '10.5 months': '$59,712',
          '11 months': '$62,556',
          '11.5 months': '$65,399',
          '12 months': '$68,243'
        },
        eight: {
          '10 months': '$56,869',
          '10.5 months': '$59,712',
          '11 months': '$62,556',
          '11.5 months': '$65,399',
          '12 months': '$68,243'
        },
        nine: {
          '10 months': '$56,869',
          '10.5 months': '$59,712',
          '11 months': '$62,556',
          '11.5 months': '$65,399',
          '12 months': '$68,243'
        },
        ten: {
          '10 months': '$56,869',
          '10.5 months': '$59,712',
          '11 months': '$62,556',
          '11.5 months': '$65,399',
          '12 months': '$68,243'
        },
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