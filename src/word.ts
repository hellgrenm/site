export function getWord() : string{
    const words: string[] = ["juicy", "random", "quartz", "bridge", "significant"];
    return words[Math.floor(Math.random() * words.length)]
}