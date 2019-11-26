import Cook from './Cook'

export default class Roast implements Cook {
    cook(temperature: string, time: string) {
        console.log(`火烤: 溫度`, temperature, `時間`, time)
    }

    getName() {
        return 'roasting'
    }
}