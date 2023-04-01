import { render, waitFor } from '@testing-library/react';
import { Stat } from './Stat';
import { act } from 'react-dom/test-utils';

describe('Stat Component', () => {

  it('Should Be Render', async () => {
    const {container} = render(<Stat name='test' base={12} percentage={20}/>)
    expect(container).toMatchSnapshot()
  })

  it('Should Be Validate Value', async () => {
    jest.useFakeTimers();
    const {container} = render(<Stat name='test' base={12} percentage={20}/>)
    act(() => {
      jest.runAllTimers();
    });
    const el = document.querySelector('.stat__table-name')
    expect(el.textContent).toEqual('test')
  })
})