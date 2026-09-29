function solution(s, skip, index) {
    let lowAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    var newAl = [];
    
    for (let i = 0; i < lowAlphabet.length; i++) {
        if (skip.includes(lowAlphabet[i]) === false) {
             newAl.push(lowAlphabet[i]);
        }
        
    }
    
    var result = [];
    
    
    for (let i = 0; i < s.length; i++) {
        let currentIndex = newAl.indexOf(s[i]);
        let nextIndex = (currentIndex + index) % newAl.length;
        
        result.push(newAl[nextIndex]);
        
    }
     return result.join("");
}

// 알파벳이 있는 배열 생성?
// for문으로 알파벳 돌면서 skip에 있는 단어는 빼기 -> newAl
// 뺀 알파벳들에서 s의 각 알파벳 + index 위치에 있는 알파벳 출력