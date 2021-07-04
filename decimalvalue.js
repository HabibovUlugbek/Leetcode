    var getDecimalValue = function(head) {
        var number =0; var sub =0;
        for (let i = head.length-1; i >=0; i--) {
            number =number + Math.pow(2,sub)*head[i];

            sub++;
        }
        return number;
    };

    console.log(getDecimalValue([1,0,1]))