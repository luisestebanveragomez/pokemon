import { render } from '@testing-library/react';
import { Stats } from './Stats';

describe('Stats Component', () => {
  it('Should Be Render', () => {
    const { container } = render(<Stats detail={null} title={''} refStat={''} t={(el: string) => { return ''}} />)
    expect(container).toMatchSnapshot()
  })

  it('Should Be Render Values', () => {
    const data = {
      name: '',
      type: 'string',
      stats: [{base: 12,
        stat: '',
        percentage: 10}]
    }
    const { container } = render(<Stats detail={data} title={'test'} refStat={''} t={(el: string) =>  el} />)
    const title = document.querySelector('h3')
    expect(title.textContent).toEqual('test')
  })
})