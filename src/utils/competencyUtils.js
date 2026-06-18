export const filterByCompetency = (
  items,
  competency
) => {

  return items.filter(
    item =>
      item.data?.startsWith(
        competency
      )
  );
};