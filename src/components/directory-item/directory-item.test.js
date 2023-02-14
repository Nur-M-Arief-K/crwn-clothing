import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import DirectoryItem from "./directory-item.component";

const mockedUsedNavigate = jest.fn();
jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
   useNavigate: () => mockedUsedNavigate,
}));

describe("DirectoryItem tests", () => {
    const category = {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    };

    const { title } = category;

  it("should render correct information of given props", () => {
    expect(render(<DirectoryItem category={category} />)).toMatchSnapshot();
  });

  it(`should direct to shop/${title} route when DirectoryItem is clicked`, () => {
    render(<DirectoryItem category={category} />)
    fireEvent.click(screen.getByText("Shop now"));
    expect(mockedUsedNavigate).toBeCalledWith(`shop/${title}`); 
  });
});
