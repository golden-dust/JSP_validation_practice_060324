<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>sign up</title>
<script type="text/javascript" src="js/joinCheck3.js"></script>
</head>
<body>
	<h2>회원 가입</h2>
	<hr>
	<form action="joinOk.jsp" method="get" name="fJoin" onsubmit="return joinCheck()">
		아이디: <input type="text" name="memberId" id="아이디"><br><br>
		비밀번호: <input type="password" name="memberPw" id="비밀번호"><br><br>
		이름: <input type="text" name="memberName" id="이름"><br><br>
		전화번호: <input type="text" name="phoneNumber" placeholder="01012341234" id="전화번호"> &nbsp;&nbsp;※ 숫자만 입력하세요.<br><br>
		<input type="submit" value="회원가입">
	</form>
</body>
</html>