const parseArgs = () => {
    const args = process.argv.slice(2);
    const arrayFormattedArgs = [];
    const lengthArgs = args.length;

    for (let i = 0; i < lengthArgs; i += 2) {        
        arrayFormattedArgs.push(`${args[i].slice(2)} is ${args[i + 1]}`);
    }

    console.log(arrayFormattedArgs.join(', '));
};

parseArgs();