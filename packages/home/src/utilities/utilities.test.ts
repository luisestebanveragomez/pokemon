import { randomNumberHelper } from './randomNumber.helper';
import { setStyleElementHelper } from './setStyleElement.helper';

describe('Random Number', () => {
  it('Should return min number', () => {
    const min = randomNumberHelper(1 , 10)
    expect(min <= 10).toBeTruthy()
  })
  it('Should return max number', () => {
    const max = randomNumberHelper(10, 30)
    expect(max >= 10).toBeTruthy()
  })
})

describe('Set Style Element', () => {
  it('Should return min number', () => {
    setStyleElementHelper('body', 'background', 'green')
    const body = document.querySelector('body')
    expect(body.getAttribute('style')).toEqual('background: green;')
  })
})