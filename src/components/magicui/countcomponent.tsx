import NumberTicker from "./count";

const NumberTickerDemo = () => {
  return (
    <> <div className="grid grid-cols-3 gap-3">
    <p className="whitespace-pre-wrap text-5xl md:text-7xl font-medium tracking-tighter text-white dark:text-white">
      <NumberTicker value={20} />+<br></br><p className="text-2xl md:text-3xl font-mono py-3 relative md:-left-16">Projects Completed</p>
    </p>
    <p className="whitespace-pre-wrap text-5xl md:text-7xl  font-medium tracking-tighter text-white dark:text-white">
      <NumberTicker value={3} />+<br></br><p className="text-2xl md:text-3xl font-mono py-3 relative md:-left-20">Years of Experience</p>
    </p>
    <p className="whitespace-pre-wrap text-5xl md:text-7xl font-medium tracking-tighter text-white dark:text-white">
      <NumberTicker value={20} />+<br></br><p className="text-2xl md:text-3xl font-mono py-3 relative md:-left-16">Happy Customers</p>
    </p>
  </div>
     
          </>
  );
};
export default NumberTickerDemo;
