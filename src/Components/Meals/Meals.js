import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import AvailabelMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = (props) => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailabelMeals />
    </Fragment>
  );
};

export default Meals;
