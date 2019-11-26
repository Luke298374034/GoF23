export default interface Cook {
    cook(temperature: string, time: string): void
    getName(): string
}