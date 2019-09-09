export default class HourlyCalculator {
  _hours: number
  _hourlyRate: number
  
  constructor(hours: number, hourlyRate: number) {
    this._hours = hours
    this._hourlyRate = hourlyRate
  }

  get paycheck(): number {
    return this._hours * this._hourlyRate
  }
}
