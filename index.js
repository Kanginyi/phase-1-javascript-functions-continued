const saturdayFun = (action = "roller-skate") => {
    return `This Saturday, I want to ${action}!`;
}

const mondayWork = (action = "go to the office") => {
    return `This Monday, I will ${action}.`
}

const wrapAdjective = (string = "*") => {
    return function (adjective = "special") {
        return `You are ${string}${adjective}${string}!`;
    }   
}