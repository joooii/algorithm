# [lv1] 문자열 내 p와 y의 개수 - 12916 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12916) 

### 구분

Coding Test Practice > 연습문제

### 제출 일자

2026년 05월 09일 18:27:40

### 문제 설명

<p>Suppose that a string <code>s</code> consisting of both lower-case and upper-case letters are given. Write a function "solution" to return True when the number of 'p' and 'y' in <code>s</code> are the same, and return False otherwise. Note that when there is neither 'p' nor 'y', it should always return True. Also, when comparing the number of 'p' and 'y', lower-case and upper-case are not distinguished.</p>

<p>For example, if <code>s</code> is "pPoooyY", then return true. In the case of "Pyy", return false.</p>

<h5>Constraints</h5>

<ul>
<li>Length of string <code>s</code> : natural number less than 50.</li>
<li>String <code>s</code> consists of letters only.</li>
</ul>

<hr>

<h5>Examples</h5>
<table class="table">
        <thead><tr>
<th>s</th>
<th>answer</th>
</tr>
</thead>
        <tbody><tr>
<td>"pPoooyY"</td>
<td>true</td>
</tr>
<tr>
<td>"Pyy"</td>
<td>false</td>
</tr>
</tbody>
      </table>
<p>Example #1<br>
Since the number of 'p' is and 'y' is the same as 2, return true.</p>

<p>Example #2<br>
Since the number of 'p' is 1 whereas the number of 'y' is 2, they are different. Hence return false.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges