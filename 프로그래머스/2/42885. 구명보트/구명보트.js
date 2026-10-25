function solution(people, limit) {
    people.sort((a,b) => a-b);

    var left = 0;
    var right = people.length - 1;
    var boat = 0;
    
    while (left <= right) {
        if (left !== right && people[left] + people[right] <= limit) {
            left++;
            right--;

        } else {
            right--;
        }
        boat++;
    }
    return boat;
}