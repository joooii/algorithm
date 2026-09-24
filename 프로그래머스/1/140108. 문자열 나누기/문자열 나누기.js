function solution(s) {
    var sameCount = 0;
    var diffCount = 0;
    var total = 0;
    
    var x = s[0];
    
    for (let i = 0; i < s.length; i++) {
        if (x === s[i]) {
            sameCount++;
        } else {
            diffCount++;
        }
        
        if (sameCount === diffCount) { 
            total++;
            sameCount = 0;
            diffCount = 0;
            x = s[i+1];
        }
        if (i === s.length-1) {
            if (sameCount !== diffCount) total++;
        }
        
    }
    return total;
}