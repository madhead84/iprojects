var firstVariable, secontVariable;
var thirdVariable;

var firstVariableNumber = 1;
var secontVariableStrin = 'cat';
var thirdVariableBulean = true;
var fourthVariableUndefined;
var fifthVariableNull = null;
var sixthVariableArray = [0, 5, 26];
var arreyWithAllVariables = [
    0,
    'dog',
    false,
    null,
    undefined,
    { health: 15, speed: 26 },
    [3, 8]
];

var objectWithTwoPrimitivesAndTwoCompositeDataType = {
    heroLevel: 26,
    heroName: 'Kowsh',
    heroTesks: ['findSomething', 'killBoss', 'findGold'],
    heroSkils: {
        jump: true,
        longJump: false,
        runSpeed: 30
    }
};

var firstArreyShopChecklist = [
    {
        eags: {
            quontety: 30
        }
    },
    'bread',
    {
        water: { botels: 2 }
    },
    {
        milk: { packages: 1 }
    },
    'kolbasa'
];

var sasha = {
    ege: 25,
    height: 177,
    profession: 'Front-end developer',
    hobby: 'Software engineering'
};

var tumbocka = {
    color: "white",
    height: 80,
    width: 40,
    depth: 50,
    numberOfDrawers: 3,
    lock: true
};

var pilesos = {
    brand: 'Philips',
    power: '500W',
    color: 'green'
};

var phone = {
    brand: 'Apple',
    screenResolution: '1200x800',
    microUSB: false,
    lightning: true,
    powerBattery: '3000mAh'
};

var pterodactel = {
    predator: true,
    flyable: true,
    population: 0
};

var numbersArray = [2, 36, 18, 25, 16, 13, 7];
var i = 0;
while (i < numbersArray.length){
    console.log(numbersArray[i]*numbersArray[i]);
    i++;
}

var arreyThirdElement = [2, 6, 25];
arreyThirdElement[2];
function returnTheSecondElement() {
    return arreyThirdElement[2];
}

//modified previous task

function retunNecessaryElementOfArrey(inputArray, necessaryElementOfArrey) {
    return inputArray[necessaryElementOfArrey-1];
}

var objectWithThreeProperties = {
    relationship: true,
    weight: 20,
    edge: 11
};

objectWithThreeProperties.edge;

var a = [
    'dog',
    'eat',
    18,
    34,
    [
        0,
        [
            26,
            { y: 'North', x: 'South' }
        ],
        [72, 12]
    ]
];