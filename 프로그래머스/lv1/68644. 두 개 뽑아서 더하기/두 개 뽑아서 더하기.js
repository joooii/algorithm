function solution(numbers) {
    const answer = new Set() // 중복없이 저장하기 위한 공간
    
    for (let i=0; i<numbers.length; i++) {
        for (let j=i+1; j<numbers.length; j++) {
            answer.add(numbers[i]+numbers[j]);
        }
    }
    return [...answer].sort((a,b) => a-b);
}


// 수정 (조합 + 중복제거(Set) + 정렬)
// 1. 배열에서 가능한 모든 2개의 조합을 뽑는다. - for문
// 2. 2개의 조합을 더한다.
// 3. 더한 수의 중복을 제거한다. => 합을 중복없이 저장한다.
// 4. 배열에 오름차순으로 담는다. => 결과를 오름차순으로 정렬한다.