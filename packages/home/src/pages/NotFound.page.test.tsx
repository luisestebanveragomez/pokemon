import { fireEvent, render } from '@testing-library/react';
import NotFoundPage from './NotFound.page';

jest.mock("react-router-dom", () => ({
  __esModule: true,
  useNavigate: () => (key: string) => key,
}));

jest.mock('react-i18next', () => ({
  __esModule: true,
  Trans: ({ i18nKey }) => i18nKey,
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}))

describe('Not Found Page', () => {
  it('Should Render', () => {
    const { container } = render(<NotFoundPage />)
    const button = container.querySelector("button");
    fireEvent.click(button);
    expect(container).toMatchSnapshot()
  })
})