import Cook from './Cook'

export default class Fried implements Cook {
    cook(temperature: string, time: string) {
        console.log(`油炸: 溫度`, temperature, `時間`, time)
    }

    getName() {
        return 'frying'
    }
}