function login() {
	var id = document.queryselector('#id');
	var pw = document.queryselector('#pw');

	if(id.value == "" || pw.value == "")
		{
		alert("로그인을 할 수 없습니다.")
		}
	else 
		{
		location.href = 'home.html';
		}
	}

function back() {
		history.back();
	}

function create_id() {
	var id = document.queryselector('#id');
	var pw = document.queryselector('#pw');
	var repw = document.queryselector('#repw');

	if(id.value == "" || pw.value == "" || repw == "")
		{
		alert("회원가입을 할 수 없습니다.")
		}
	else {
		if(pw.value !== repw.value) 
			{
			alert("비밀번호를 확인해주세요.")
			}
		else
			{
			location.href = 'login.html';
			}
		}
	}