import { fireEvent, render, screen } from "@testing-library/react";
import FormInput from "./form-input.component";

const label = "label";
const id = "email";
const type = "email";
const name = "email";
const required = true;
const value = "sample1@email.com";
const onChangeHandler = () => jest.fn();

describe("FormInput tests", () => {
  test("it should render correct information of given props", () => {
    expect(
      render(
        <FormInput
          id={id}
          label={label}
          type={type}
          name={name}
          value={value}
          onChange={onChangeHandler}
          required={required}
        />
      )
    ).toMatchSnapshot();
  });
  test("onChangeHandler should be fired if any changes happen", () => {
    render(
      <FormInput
        id={id}
        label={label}
        type={type}
        name={name}
        value={value}
        onChange={onChangeHandler}
        required={required}
      />
    );
    fireEvent.change(screen.getByLabelText(label));
    expect(onChangeHandler).toMatchSnapshot();
  });
});
