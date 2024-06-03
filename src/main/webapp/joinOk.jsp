<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>sign up processing...</title>
</head>
<body>
	<%
		request.setCharacterEncoding("utf-8");
		String mid = request.getParameter("memberId");
		String mpw = request.getParameter("memberPw");
		String mname = request.getParameter("memberName");
		String mnumber = request.getParameter("phoneNumber");
	%>
	
	<h3>회원가입 정보</h3>
	<hr>
	아이디: <%= mid %><br>
	비밀번호: <%= mpw %><br>
	이름: <%= mname %><br>
	전화번호: <%= mnumber %>
</body>
</html>