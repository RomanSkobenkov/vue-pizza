import doughSizes from "@/common/data/doughSizes";
import sizes from "@/common/data/sizes";
import ingredients from "@/common/data/ingredients";

export const normalizeDough = (dough) => {
  return {
    ...dough,
    doughSize: dough.id ? doughSizes[dough.id] : "",
  };
};

export const normalizeSize = (size) => {
  return {
    ...size,
    value: size.id ? sizes[size.id] : "",
  };
};

export const normalizeIngredients = (ingredient) => {
  return {
    ...ingredient,
    value: ingredient.id ? ingredients[ingredient.id] : "",
  };
};
