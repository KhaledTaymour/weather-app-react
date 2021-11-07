import WeatherCard from "components/weatherCard/WeatherCard";
import { Provider } from "react-redux";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import store from "redux/store";

describe("Weather Card", () => {
  const componentProps = {
    id: "1487246400",
    weatherHour: {
      condition: "Clear",
      date: 16,
      dayName: "Thursday",
      dt: 1487246400,
      hours: 14,
      isSelected: true,
      month: "February",
      temp: 14,
      tempMax: 14,
      tempMin: 8,
    },
  };

  let myCard: any;
  beforeAll(() => {
    render(
      <Provider store={store}>
        <WeatherCard
          id={componentProps.id}
          weatherHour={componentProps.weatherHour}
        />
      </Provider>
    );

    myCard = screen.getByTestId("card");
  });

  afterAll(() => {
    cleanup();
  });

  test("should be visible", () => {
    expect(myCard).toBeVisible();
  });

  test("should have class active when clicked", async () => {
    fireEvent.click(myCard);
    expect(myCard.classList.contains("active")).toBe(true);
  });
});
