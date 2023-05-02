export const formatedDate = date => {
  return date?.slice(0, 16).split('T').join('   ');
};
