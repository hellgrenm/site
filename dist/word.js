export function getWord() {
    const words = ["juicy", "random", "quartz", "bridge", "significant"];
    return words[Math.floor(Math.random() * words.length)];
}
