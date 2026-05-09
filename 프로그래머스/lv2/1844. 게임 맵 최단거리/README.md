# [lv2] 게임 맵 최단거리 - 1844 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/1844) 

### 구분

Coding Test Practice > 깊이／너비 우선 탐색（DFS／BFS）

### 제출 일자

2026년 05월 09일 18:27:42

### 문제 설명

<p>ROR game is a game where players are divided into two teams and a team wins if they destroy the camp of the other team first. Therefore, each team's goal is to go to the other team's camp as quickly as possible.</p>

<p>You are going to play the game as a member of one side. Following shows an example where in a 5 x 5 map, your character is placed in (row: 1, column: 1) and camp of the other team is placed in (row: 5, column: 5).</p>

<p><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/dc3a1b49-13d3-4047-b6f8-6cc40b2702a7/%E1%84%8E%E1%85%AC%E1%84%83%E1%85%A1%E1%86%AB%E1%84%80%E1%85%A5%E1%84%85%E1%85%B51_sxuruo.png" title="" alt="최단거리1_sxuruo.png"></p>

<p>In the above figure, you cannot move through black space, while you can move freely through white spaces. The character moves by one space at once in East, West, South, and North directions. Also the character cannot go out of the map.<br>
Following example shows 2 ways to move the character to the other team's camp.</p>

<ul>
<li>In the first method, the character arrives at the camp of the other team through 11 spaces.</li>
</ul>

<p><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/9d909e5a-ca95-4088-9df9-d84cb804b2b0/%E1%84%8E%E1%85%AC%E1%84%83%E1%85%A1%E1%86%AB%E1%84%80%E1%85%A5%E1%84%85%E1%85%B52_hnjd3b.png" title="" alt="최단거리2_hnjd3b.png"></p>

<ul>
<li>In the second method, the character arrives at the camp of the other team through 15 spaces.</li>
</ul>

<p><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/4b7cd629-a3c2-4e02-b748-a707211131de/%E1%84%8E%E1%85%AC%E1%84%83%E1%85%A1%E1%86%AB%E1%84%80%E1%85%A5%E1%84%85%E1%85%B53_ntxygd.png" title="" alt="최단거리3_ntxygd.png"></p>

<p>Therefore, the first way is the fastest way to get to the other team's camp.<br>
If the other team builds walls around the camp, you can not move to their camp. For example, in the following case, your character cannot arrive at the other team's camp.</p>

<p><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/d963b4bd-12e5-45da-9ca7-549e453d58a9/%E1%84%8E%E1%85%AC%E1%84%83%E1%85%A1%E1%86%AB%E1%84%80%E1%85%A5%E1%84%85%E1%85%B54_of9xfg.png" title="" alt="최단거리4_of9xfg.png"></p>

<p>Given the status of game map <code>maps</code> as a parameter, write a function solution to return the <strong>minimum</strong> number of moves required for your character to arrive at the camp of the other team. But, return -1 when there is no way to reach their camp.</p>

<h5>Constraints</h5>

<ul>
<li><code>maps</code> is a 2-dimensional array containing the status of the game map with n x m size. n and m are natural number between 1 and 100.</li>
<li>n and m may be either the same or different each other, but there is no case where both are given as 1.</li>
<li><code>maps</code> consists of 0 and 1 only, which indicates the space with wall and without wall, respectively.</li>
<li>Initially, the character is located at the left top of the game map (1, 1), and the camp of the other team is at the right bottom of the game map (n, m).</li>
</ul>

<hr>

<h5>Examples</h5>
<table class="table">
        <thead><tr>
<th>maps</th>
<th>answer</th>
</tr>
</thead>
        <tbody><tr>
<td>[[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]</td>
<td>11</td>
</tr>
<tr>
<td>[[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]</td>
<td>-1</td>
</tr>
</tbody>
      </table>
<p>Example #1<br>
Data is given as follows.</p>

<p><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/6db71f7f-58d3-4623-9fab-7cd99fa863a5/%E1%84%8E%E1%85%AC%E1%84%83%E1%85%A1%E1%86%AB%E1%84%80%E1%85%A5%E1%84%85%E1%85%B56_lgjvrb.png" title="" alt="최단거리6_lgjvrb.png"></p>

<p>The shortest path to move your character to the other team's camp is as follows.</p>

<p><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/d223d017-b3e2-4772-9045-a565133d45ff/%E1%84%8E%E1%85%AC%E1%84%83%E1%85%A1%E1%86%AB%E1%84%80%E1%85%A5%E1%84%85%E1%85%B52_hnjd3b%20%281%29.png" title="" alt="최단거리2_hnjd3b (1).png"></p>

<p>Therefore, since the character passes through total 11 spaces, return 11.</p>

<p>Example #2<br>
It is the same with an example in the problem statement where there is no way to reach the camp of the other team. Hence return -1.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges