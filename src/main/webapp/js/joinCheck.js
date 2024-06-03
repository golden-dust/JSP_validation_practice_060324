/**
 * 
 */

const nullAlert = (obj) => {
	alert(`모든 칸을 입력해주세요 <${obj.id}>`);
	obj.focus();
};


function isNull(obj) {
	if (obj.value == "" || obj.value == null) {
		console.log("null true");
		nullAlert(obj);
		return true;
	}
	console.log("null false");
	return false;
}

function lengthChecked(obj, min, max) {
	if (obj.value.length < min || obj.value.length > 15) {
		alert(`${obj.id} 길이: ${min}~${max}글자 사이로 입력해주세요.`);
		obj.focus();
		return false;
	}
	return true;
}

function joinCheck() {
	// alert("Checking...");
	console.log("joinCheck function called");
	var f = document.fJoin;
	
	var id = f.memberId;
	var pw = f.memberPw;
	var name = f.memberName;
	var num = f.phoneNumber;
	
	const objList = [id, pw, name, num];
	
	for (obj of objList) {
		if (isNull(obj)) {
			return false;	
		}
	}

	/* 아이디 길이 유효성 검사 */
	if (!lengthChecked(id, 4, 15)) {
		return false;
	}
	
	if (!lengthChecked(pw, 10, 20)) {
		return false;
	}
	
	if (!lengthChecked(name, 2, 10)) {
		return false;
	}
	
	if (!lengthChecked(num, 11, 11)) {
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