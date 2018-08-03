var firstVariable, secontVariable;
var thirdVariable;

var firstVariableNumber = 1;
var secontVariableStrin = "cat";
var thirdVariableBulean = true;
var fourthVariableUbdefined;
var fifthVariableNull = null;
var sixthVariableArray = [0, 5, 26];
var arreyWithAllVariables = [
                            0,
                            "dog",
                            false,
                            null,
                            undefined,
                            {health: 15, speed: 26},
                            [3,8]
                            ];
var objectWithTwoPrimitivesAndTwoCompositeDataType = {
    heroLevel: 26,
    heroName: "Kowsh",
    heroTesks: ["findSomething", "killBoss", "findGold"],
    heroSkils: {
        jump: true,
        longJump: false,
        runSpeed: 30,
    }
}

var firstArreyShopChecklist= [
    {eags:{quontety:30}},
    bread,
    {water:{botels:2}},
    {milk: {packages:1 }},
    "kolbasa"]

var numbersArey = [2, 36, 18, 25, 16, 13, 7];
var i = 0;
while (i<numbersArey.length){
    console.log(numbersArey[i]*numbersArey[i]);
    i++;
}

var arreyThirdElement = [2, 6, 25];
function returnTheSecondElement() {
    return arreyThirdElement[2];
}

//modified previus task

function retunNecessaryElementOfArrey(inputArray, necessaryElementOfArrey) {
    return inputArray[necessaryElementOfArrey-1];
}

var objectWithThreeProperties = {
    relationship: true,
    weight: 20,
    edge: 11

}

objectWithThreeProperties.edge;

var a = [
    "dog",
    "eat",
    18,
    36,
    [0,
        [26,
            {y: "server", x: "client"}],
        [26,16]
    ]];