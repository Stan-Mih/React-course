function choice(items) {   
    const item = items[Math.floor(Math.random()*items.length)];
    return item;
}
function remove(items, item) {    
    const found = items.find(element => element === item);
    if(found){
        const index = items.indexOf(found);
        items.splice(index,1);
    }
    return found;
}
export { choice, remove };