import { render } from '@testing-library/react';
import { SectionPokemon } from './SectionPokemon';

describe('SectionPokemon Component', () => {
  it('Should Be Render', () => {
    const { container } = render(<SectionPokemon id={'12'} detail={null} />)
    expect(container).toMatchSnapshot()
  })

  it('Should Be Validate Number', () => {
    const { container } = render(<SectionPokemon id={'12'} detail={null} />)
    const number = document.querySelector('.pokemon__number')

    expect(number.textContent).toEqual('#12')
  })
})