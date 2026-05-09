# [lv2] 올바른 괄호 - 12909 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12909) 

### 구분

Coding Test Practice > 스택／큐

### 제출 일자

2026년 05월 09일 18:27:40

### 문제 설명

<p>The definition of correctly paired parentheses means that if it is opened with a '(' character, it must be closed with a ')' character.<br>
For instance,</p>

<ul>
<li>"()()" or "(())()" is a correct parenthesis.</li>
<li>")()(" or "(()(" is an incorrect parenthesis.</li>
</ul>

<p>Given a string <code>s</code> consisting only of '(' or ')', complete a solution function that returns true if the string <code>s</code> is the correct parenthesis and false if it is not.</p>

<h5>Constraints</h5>

<ul>
<li>Length of string <code>s</code>: natural number less than 100,000</li>
<li>The string <code>s</code> consists of only '(' or ')'.</li>
</ul>

<hr>

<h5>Example</h5>
<table class="table">
        <thead><tr>
<th>s</th>
<th>answer</th>
</tr>
</thead>
        <tbody><tr>
<td>"()()"</td>
<td>true</td>
</tr>
<tr>
<td>"(())()"</td>
<td>true</td>
</tr>
<tr>
<td>")()("</td>
<td>false</td>
</tr>
<tr>
<td>"(()("</td>
<td>false</td>
</tr>
</tbody>
      </table>
<p>Example #1</p>

<p>Same as above example.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges