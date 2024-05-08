data = [
    //Displacement, Height
    [120, 2.02], 
    [120, 1.75], 
    [120, 1.45], 
    [120, 1.08], 
    [144, 0.71]
]

function calculateDrift(data){

    var base_level = data.length-1
    
    //Computing Soft Drift
    for (let i = 0; i < data.length; i++) {
        if (i == base_level) {
            data[i].push(data[i][1])
        } else {
            data[i].push(data[i][1] - data[i+1][1])
        }
    }

    //Computing Soft Drift - Ratio
    for(let j=0; j<data.length; j++){
        data[j].push(data[j][2]/data[j][0])
    }

    //--> 0.7 x Soft Drift 
    for(let j=0; j<data.length; j++){
        data[j].push(data[j][3]*0.7)
    }

    //--> 0.8 x Soft Drift 
    for(let j=0; j<data.length; j++){
        data[j].push(data[j][3]*0.8)
    }

    //--> Avg. of Storey Drift 
    for(let j=0; j <data.length; j++){

        let avg = 0;
        if (j >= 3){// && j < data.length - 1) {
            avg = ( data[j-1][3] + data[j-2][3] + data[j-3][3] ) / 3;
        } else {
            avg = "-"
        }
        data[j].push(avg);
    }

    //--> Condition One Check
    for(let i=0; i<data.length; i++){

        if(i == 0) {
            data[i].push("-")
        } else if(i >= 1 && i < data.length - 1) {
            var ratio = data[i-1][4]/data[i][3]
            let check = (ratio <   0.70) ? "ok" : "exist"
            data[i].push(check)
        } 
        // else {
        //     console.log("not working")
        // }

    }
    //--> Condition Two Check 
    for(let i=0; i<data.length; i++){

        // if(i == 0) {
        //     data[i].push("--")
        // } else if (i >= 1) {
        // let check = (data[i][4] <= data[i][6]) ? "ok" : "exist"
        // data[i].push(check)
        // } else {
        //     console.log("not working")
        // }

    }

    return data
}

console.log(calculateDrift(data))