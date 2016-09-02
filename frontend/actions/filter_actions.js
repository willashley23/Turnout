export const FilterConstants = {
  UPDATE_FILTER: "UPDATE_FILTER"
};

export const updateFilter = (filter) => ({
  type: FilterConstants.UPDATE_FILTER,
  filter
});