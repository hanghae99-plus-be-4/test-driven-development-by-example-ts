/**
 * 다중 통화를 지원하는 Dollar 객체
 */

export class Dollar {
  constructor(public amount: number) {}

  times(multiplier: number) {
    return new Dollar(this.amount * multiplier)
  }
}
