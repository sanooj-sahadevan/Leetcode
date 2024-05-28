const command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".



// for(i=0;i<command.length;i++){
//     if(command[i]==="(al)"){
//         command[i] = "al"
//     }
// }
// console.log(command);


console.log(	 command.replace  (/(\(\))|(\(al\))/g,   (str) => {
		return str === '()' ? 'o' : 'al';
	}))
 