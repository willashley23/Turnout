export const INCREASE_LIMIT = "INCREASE_LIMIT";
export const CLEAR_LIMIT = "CLEAR_LIMIT";

export const clearLimit = () => ({
  type: CLEAR_LIMIT
});

export const increaseLimit = limit => ({
  type: INCREASE_LIMIT,
  limit
});