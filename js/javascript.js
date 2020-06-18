// signup 관련
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
var loginbtn = document.getElementById("loginBtn");
var registerbtn = document.getElementById("registerBtn");

function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
    loginbtn.style.color = "white";
    registerbtn.style.color = "black";
}
function register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
    loginbtn.style.color = "black";
    registerbtn.style.color = "white";
}
function signupbtn() {
    wrap.style.display = "block";
    signWrap.style.display = "block";
}
function closeBtn() {
    wrap.style.display = "none";
    signWrap.style.display = "none";
}


//수정 중 입니다
// 유효성검사 정규식 및 회원정보 불러오기
let result = "";
function loginVal() {

    let id = $('#loginId');
    let pwd = $('#loginPwd');
    let memberBook = JSON.parse(localStorage.getItem('memberBook'));
    for(let i=0; i<memberBook.length; i++){
        let member = memberBook[i];
        if(id.val()==member.id){
            if(member.pwd != pwd.val()){
                alert("비밀번호를 잘못 입력하셨습니다.");
                return false;
            }
        }
    };        
    
    $("#wrap").css("display","none");
    $("#signWrap").css("display","none");
    result = "member";
    $("#afterBox").hide()  
    $("#afterLoginBox").show(); 
    return true;
}

// 유효성검사 정규식 및 회원정보 저장
function resisterVal(){
    
    let k = $("#userId").val();
    let v = $("#userPwdChk").val();

    for(let i=0; i<localStorage.length; i++){
       if(k==localStorage.key(i)){
            alert("아이디가 이미 존재합니다.");
            return false;
        }
    }
    if(!/^[a-z0-9]{5,15}$/g.test(userId.value)){
        alert("아이디를 영문/숫자로 5자 이상입력해주세요.");
        return false;
    }
    else if(!/^[\w]{4,}@[\w]+.([\w]+){2,3}$/.test(userEmail.value)){
        alert("이메일 형식에 어긋납니다.");
        return false;
    }
    else if(!(/\d/.test(userPwd.value) 
            && /[a-zA-Z]/.test(userPwd.value) 
            && /[~!@#$%^&*()_+|<>?:{}]/.test(userPwd.value)
            &&/^.{8,15}$/.test(userPwd.value))){
        alert("비밀번호는 8~15자리 숫자/문자/특수문자를 포함해야합니다.");
        return false;
    }
    else if(!(userPwd.value == userPwdChk.value)){
        alert("비밀번호가 일치하지 않습니다.");
        return false;
    }
    else {

        $(function(){
                let member = {
                    id : k,
                    pwd : $("#userPwd").val(),
                    email : $("#userEmail").val(),
                    date : Date.now()
                }
                
                let memberBook = JSON.parse(localStorage.getItem("memberBook"));

                if(memberBook == null)
                    memberBook = [];

                memberBook.push(member);
                localStorage.setItem("memberBook", JSON.stringify(memberBook));
                
                //초기화
                $("#userId, #userPwd, #userEmail, #userPwdChk").val('');
                getMemberBook();
            })
        return true;
    };
}

//member
function getMemberBook() {

    let memberBook = JSON.parse(localStorage.getItem("memberBook"));
    $(memberBook).each(function(i, member) {
        let d = new Date(member.date);
        let html = "<tr>"
                 + "<td>" + member.id + "</td>"
                 + "<td>" + member.pwd + "</td>"
                 + "<td>" + member.email + "</td>"
                 + "<td>" + d.getMonth() + "/" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + "</td>"
                 + "</tr>";
        $("#tbl-memberBook").append(html);
    })
}


// infoPage
function nimoBtn() {
    nimoBtnId.style.color = "#fff";hyoriBtnId.style.color = "#000";badaBtnId.style.color = "#000";doriBtnId.style.color = "#000";
    nimoImg.style.display = "inline";hyoriImg.style.display = "none";badaImg.style.display = "none";doriImg.style.display = "none";
    nimoTxtBtn.style.display = "inline";hyoriTxtBtn.style.display = "none";badaTxtBtn.style.display = "none";doriTxtBtn.style.display = "none";
    infoConTxt.style.display = "inline";
}
function hyoriBtn() {
    nimoBtnId.style.color = "#000";hyoriBtnId.style.color = "#fff";badaBtnId.style.color = "#000";doriBtnId.style.color = "#000";
    nimoImg.style.display = "none";hyoriImg.style.display = "inline";badaImg.style.display = "none";doriImg.style.display = "none";
    nimoTxtBtn.style.display = "none";hyoriTxtBtn.style.display = "inline";badaTxtBtn.style.display = "none";doriTxtBtn.style.display = "none";
    infoConTxt.style.display = "inline";
}
function badaBtn() {
    nimoBtnId.style.color = "#000";hyoriBtnId.style.color = "#000";badaBtnId.style.color = "#fff";doriBtnId.style.color = "#000";
    nimoImg.style.display = "none";hyoriImg.style.display = "none";badaImg.style.display = "inline";doriImg.style.display = "none";
    nimoTxtBtn.style.display = "none";hyoriTxtBtn.style.display = "none";badaTxtBtn.style.display = "inline";doriTxtBtn.style.display = "none";
    infoConTxt.style.display = "inline";
}
function doriBtn() {
    nimoBtnId.style.color = "#000";hyoriBtnId.style.color = "#000";badaBtnId.style.color = "#000";doriBtnId.style.color = "#fff";
    nimoImg.style.display = "none";hyoriImg.style.display = "none";badaImg.style.display = "none";doriImg.style.display = "inline";
    nimoTxtBtn.style.display = "none";hyoriTxtBtn.style.display = "none";badaTxtBtn.style.display = "none";doriTxtBtn.style.display = "inline";
    infoConTxt.style.display = "inline";
}

// moviePage
function movieTxtAni1() {
    movieBTxt1.style.display = "inline";movieBTxt2.style.display = "none";movieBTxt3.style.display = "none";movieBTxt4.style.display = "none";
    lalaTxt.style.display = "block";herTxt.style.display = "none";floridaTxt.style.display = "none";whiplashTxt.style.display = "none";
}
function movieTxtAni2() {
    movieBTxt1.style.display = "none";movieBTxt2.style.display = "inline";movieBTxt3.style.display = "none";movieBTxt4.style.display = "none";
    lalaTxt.style.display = "none";herTxt.style.display = "block";floridaTxt.style.display = "none";whiplashTxt.style.display = "none";
}
function movieTxtAni3() {
    movieBTxt1.style.display = "none";movieBTxt2.style.display = "none";movieBTxt3.style.display = "inline";movieBTxt4.style.display = "none";
    lalaTxt.style.display = "none";herTxt.style.display = "none";floridaTxt.style.display = "block";whiplashTxt.style.display = "none";
}
function movieTxtAni4() {
    movieBTxt1.style.display = "none";movieBTxt2.style.display = "none";movieBTxt3.style.display = "none";movieBTxt4.style.display = "inline";
    lalaTxt.style.display = "none";herTxt.style.display = "none";floridaTxt.style.display = "none";whiplashTxt.style.display = "block";
}

// roadmapPage
$("span:contains('h1')").css({color:"rgba(53,140,214,126)"});
$("span:contains('ol')").css({color:"rgba(53,140,214,126)"});
$("pre>span:contains('li')").css({color:"rgba(53,140,214,126)"});
$("span:contains('ul')").css({color:"rgba(53,140,214,126)"});
$("span:contains('p')").css({color:"rgba(53,140,214,126)"});
$(document).ready(function(){$("#clickNow").click(function() {$("#nowBox").show();});
    $("#nowBox").click(function() {$("#nowBox").hide();});});
$(document).ready(function(){$("#clickThree").click(function() {$("#threeBox").show();});
    $("#threeBox").click(function() {$("#threeBox").hide();});});
$(document).ready(function(){$("#clickFive").click(function() {$("#fiveBox").show();});
    $("#fiveBox").click(function() {$("#fiveBox").hide();});});
$(document).ready(function(){$("#clickAfter").click(function() {
    if(result=="") $("#afterBox").show();
    else $("#afterLoginBox").show(); 
});
    $("#afterBox").click(function(){
        
        $("#signWrap").show(); 
        $("#wrap").show();
    });
    $("#afterLoginBox").click(function(){
        $("#afterLoginBox").hide();  
    });
});
