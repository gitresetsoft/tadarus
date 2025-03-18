// TODO: Future use on animations calculation
export const adjustPadding = (index: number, qari: { start: number; end: number }) => {
  let padding = 0;
  let width = 0;
  const ratio = 30*2;

  // # First Qari
  if (index === 0){
    width = qari.end/ratio;
    padding = (30-qari.end)/ratio; 
    // return `w-[${width}px] pr-[${padding}px]`;
    return `w-[${width}%]`;
  }

  // # Final Qari
  // if (index === qariList.length - 1){
  //   padding = (30-qari.start)/ratio;
  //   return `pl-[${padding}px]`;
  // }

  // # In-between Qari
  width = (qari.end-qari.start)/ratio*100;
  padding = (qari.start/30)*100;
  return `w-[${width}%] pl-[${padding}%]`;

  /* ${index < qariList.length - 1 ? getPaddingClass(index, qari) : 'w-1/2' }  */
};