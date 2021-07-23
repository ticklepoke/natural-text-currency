export class Money {
	currency;
	value;

	constructor(value: string, currency: string) {
		this.value = value;
		this.currency = currency;
	}
}
