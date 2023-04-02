import { render } from "@testing-library/react";
import { BreadCrumbs } from "./BreadCrumbs";

jest.mock("react-router-dom", () => ({
  __esModule: true,
  useNavigate: () => (key: string) => key,
  useParams: () => ({
    id: 12,
  }),
  Link: ({ name, url }) => <a href={url}>{name}</a>,
}));
describe("Bread Crumbs Component", () => {
  it("Should Be Render", () => {
    const { container } = render(<BreadCrumbs name={"test"} url={"/"} />);
    expect(container).toMatchSnapshot();
  });
});
