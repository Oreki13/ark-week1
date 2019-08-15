
var trainer = [
    {
    name: 'Tatas',
    company: 'Arkademy',
    job: 'Trainer',
    status: 'single',
    city: 'Jogja'
    },
    {
    name: 'Pratama',
    company: 'Emago',
    job: 'Trainer',
    status: 'single',
    city: 'Jakarta'
    }
]

trainer = [{...trainer[0],
            status : 'Menikah',
            city : 'Jakarta',
        },
        {...trainer[1],
            company:'Arkademy',
            city:'Jogja',
            
        }]
    console.log(trainer)
    