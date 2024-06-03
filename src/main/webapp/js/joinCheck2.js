/**
 * 
 */

function isNull(obj) {
	if (obj.value == "" || obj.value == null) {
		console.log("null true");
		return true;
	}
	console.log("null false");
	return false;
}

function nullAlert(obj, str) {
	//console.log("null true -> alert");
	alert(`${str} 입력해주세요`);
	obj.focus();
	//console.log("null field focus");
}

function joinCheck() {
	// alert("Checking...");
	console.log("joinCheck function called");
	var f = document.fJoin;
	
	var id = f.memberId;
	var pw = f.memberPw;
	var name = f.memberName;
	var num = f.phoneNumber;
	
	if (isNull(id)) {
		/*
		console.log("id == null");
		alert("아이디를 입력하세요");
		id.focus();
		return false;
		*/
		
		nullAlert(id, "아이디를");
		return false;
		
	}

	/* 아이디 길이 유효성 검사 */
	if (id.value.length < 4 || id.value.length > 15) {
		alert("아이디는 4~15글자여야 합니다.\n다시 확인해 주세요.");
		return false;
	}

	/* 이름은 한글만 입력하도록 유효성 검사 */
	var kor = /^[가-힣]*$/;
	var eng = /^[a-zA-Z]*$/;
	var number = /^[0-9]*$/;
	
	if (!kor.test(f.memberName.value)) {
		alert("이름은 한글만 입력 가능합니다.\n다시 확인해주세요.");
		return false;
	}
	
	/* 전화번호는 숫자만 입력가능하도록 유효성 검사 */
	
	
	if (!number.test(num.value)) {
		alert("전화번호는 숫자만 입력가능합니다.\n다시 확인해주세요.");
		return false;
	}
	
	

 }