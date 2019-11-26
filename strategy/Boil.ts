import Cook from './Cook'

export default class Boil implements Cook {
    cook(temperature: string, time: string) {
        console.log(`水煮: 溫度`, temperature, `時間`, time)
    }

    getName() {
        return 'boiling'
    }
}