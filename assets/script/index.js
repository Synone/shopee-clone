const initState = {
    job:'1',
    jobs:[1,2,3,4]
}

const {job,jobs} = initState

let newState = {...initState,job:'Sony'}
console.log(newState);
