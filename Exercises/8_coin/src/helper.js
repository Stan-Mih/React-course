function choice(arr){
    const face = arr[Math.floor(Math.random()*arr.length)];
    return face; 
}
export {choice};  // exporting only choice