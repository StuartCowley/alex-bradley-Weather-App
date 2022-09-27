import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../components/SearchForm";

describe("SearchForm", () => {
  const testFucntion = () => {};
  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        onSubmit={testFucntion}
        searchText=""
        setSearchText={testFucntion}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders button correctly", () => {
    const { getByTestId } = render(
      <SearchForm
        onSubmit={testFucntion}
        searchText=""
        setSearchText={testFucntion}
      />
    );
    expect(getByTestId("search-form__button")).toBeInstanceOf(
      HTMLButtonElement
    );
  });
});
