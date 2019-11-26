import { Observer } from './Observer'

export interface Observerable {
    add(observer: Observer): void

    remove(observer: Observer): void

    notifyObservers(): void
}