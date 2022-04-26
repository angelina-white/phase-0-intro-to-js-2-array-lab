// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = (name) => cats.push(name);

const destructivelyPrependCat = (name) => cats.unshift(name);

const destructivelyRemoveLastCat = (name) => cats.pop(name);

const destructivelyRemoveFirstCat = (name) => cats.shift(name);

const appendCat = (name) => 
{
    let copyCats = [...cats, name];
    return copyCats;
}

const prependCat = (name) => 
{
    let copyCats = [name, ...cats];
    return copyCats;
}

const removeLastCat = (name) => 
{
    let copyCats = [...cats];
    copyCats.pop();
    return copyCats;
}

const removeFirstCat = (name) => 
{
    let copyCats = [...cats];
    copyCats.shift();
    return copyCats;
}
