const num = "51230100"
Output: "512301"





    const arr = num.split("")
    while (arr[arr.length - 1] == "0") {
        arr.pop()
    }

    let x = arr.join('')
    console.log(x);

    // return arr.join("")
