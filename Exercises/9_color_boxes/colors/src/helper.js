function randColor() {
    const arr = ["Dark-blue", "Light-blue", "Blue","Navy-Blue","Baby-Blue"];
    const color = arr[Math.floor(Math.random() * arr.length)];
    return color;
}
export { randColor }