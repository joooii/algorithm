# [lv1] 같은 숫자는 싫어 - 12906 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12906) 

### 구분

Coding Test Practice > 스택／큐

### 제출 일자

2026년 05월 09일 18:27:40

### 문제 설명

<p>An array <code>arr</code> is given. Each element of <code>arr</code> is a number between 0 through 9. You want to remove all the duplicate numbers in the array <code>arr</code> except for only one. However, the order of each element in the array <code>arr</code> should be maintained. For example,</p>

<ul>
<li>When arr = [1, 1, 3, 3, 0, 1, 1], return [1, 3, 0, 1].</li>
<li>When arr = [4, 4, 4, 3, 3], return [4, 3].</li>
</ul>

<p>Write a function solution to return the remaining numbers after removing the duplicate numbers in the array <code>arr</code> except only one.</p>

<h5>Constraints</h5>

<ul>
<li>Length of array <code>arr</code> : natural number less than or equal to 1,000,000.</li>
<li>Element of array <code>arr</code> : integer between 0 and 9.</li>
</ul>

<hr>

<h5>Examples</h5>
<table class="table">
        <thead><tr>
<th>arr</th>
<th>answer</th>
</tr>
</thead>
        <tbody><tr>
<td>[1,1,3,3,0,1,1]</td>
<td>[1,3,0,1]</td>
</tr>
<tr>
<td>[4,4,4,3,3]</td>
<td>[4,3]</td>
</tr>
</tbody>
      </table>
<p>Example #1,2<br>
It is the same as the example in the problem statement.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges