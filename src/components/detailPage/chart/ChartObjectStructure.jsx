const ChartObject = {
  userName: 'itshui3', 
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
  commits: [65, 59, 80, 81, 56, 55, 40, 40, 15, 10, 23, 70]
}

export default ChartObject;

// Problems : Felt ambiguous as to where the data would be coming from
// Would it be from the axios.get or props? Would I need to pull something from redux
// Would I need to filter it back throuhg redux? 

// Solution : Create an object and hardcode manually pull it through. Will was helpful in 
// Being willing to generate any kind of object structure, that cleared up a lot of ambiguity. 
// Can simply plug in from either props or axios.get after component structure filled in