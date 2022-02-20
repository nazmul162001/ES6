// const priya = 'Asig akbar';
// const meye = "meye tumi ki dukkho chino";
// const kibita = `Kobita tumi sopno charini`;

// // old system multiline string 
// const multiLine = 'This is my first line. \n' +
//       'this es my second line. \n' +
//       'Third line text here \n' +
//       'fourth line text here';

// // Es6 Multiline string with backTic ``
// const newMultiLine = `
//   this is multi line
//   this is third line
//   fourth line
// `

 const count = 5;

 const old = '<h3 class = "friend-name">Friend-5</h3>'
 const old2 = '<h3 class = "friend-name">Friend-' + count + '</h3>';
//  new system 
 const new1 = <h3 class = "friend-name">Friend-${count}</h3>;

 console.log(new1);
