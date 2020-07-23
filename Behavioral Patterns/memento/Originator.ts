import { Memento } from './Memento';

export class Originator {
    private state: string;

    // 跟Memento的溝通
    setState(state: string): void {
        this.state = state;
    }
    getState(): string {
        return this.state;
    }

    // 跟CareTaker的溝通
    saveStateToMemento(): Memento {
        return new Memento(this.state);
    }
    getStateFromMemento(memento: Memento): void {
        this.state = memento.getState();
    }
}