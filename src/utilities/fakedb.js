const addToDb = id => {
    let breakTime = {};

    const storedBreakTime = localStorage.getItem('break-time');
    if (storedBreakTime) {
        breakTime = JSON.parse(storedBreakTime);
    }


    const quantity = breakTime[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        breakTime[id] = newQuantity;
    }
    else {
        breakTime[id] = 1;
    }
    localStorage.setItem('break-time', JSON.stringify(breakTime));
}

const getstoredBreakTime = () => {
    let breakTime = {};

    const storedBreakTime = localStorage.getItem('break-time');
    if (storedBreakTime) {
        breakTime = JSON.parse(storedBreakTime);
    }
    return breakTime;
}


export {
    addToDb,
    getstoredBreakTime,
}