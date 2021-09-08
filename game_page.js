player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";
document.getElementById("score1").innerHTML=player1_score;
document.getElementById("score2").innerHTML=player2_score;
document.getElementById("player_q").innerHTML=" Question Turn - "+player1_name;
document.getElementById("player_ans").innerHTML=" Answer Turn - "+player2_name;
function send()
{
word = document.getElementById("enter_word").value;
p_word = word.toLowerCase();
console.log(p_word);
letter_index1 = p_word.charAt(1);
letter_middle = Math.floor(p_word.length/2);
letter_index3 = p_word.charAt(letter_middle);
letter_second_last = p_word.length - 1;
letter_index5 = p_word.charAt(letter_second_last);
remove1 = p_word.replace(letter_index1,"_");
remove2 = remove1.replace(letter_index3,"_");
remove3 = remove2.replace(letter_index5,"_");
question_word = "<h4 id='word_display'>Q"+remove3+"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='bnt btn-info' onclick='check()'>Check</button>";
row = question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("enter_word").value="";
}

question_turn="player1";
answer_turn="player2";
function check()
{
get_answer = document.getElementById("input_check_box").value;
answer = get_answer.toLowerCase();
console.log("answer in lower case -"+answer);
if (answer==p_word)
{
if (answer_turn=="player1")
{
player1_score = player1_score+1;
document.getElementById("score1").innerHTML=player1_score;
}
else
{
player2_score = player2_score+1;
document.getElementById("score2").innerHTML=player2_score; 
}
}
if (question_turn=="player1")
{
question_turn="player2"
document.getElementById("player_q").innerHTML="Question turn"+player2_name;
}
else
{
question_turn="player1"
document.getElementById("player_q").innerHTML="Question turn"+player1_name; 
}
if (answer_turn=="player1")
{
answer_turn="player2"
document.getElementById("player_ans").innerHTML="Answer turn"+player2_name;
}
else
{
answer_turn="player1"
document.getElementById("player_ans").innerHTML="Answer turn"+player1_name; 
}
document.getElementById("output").innerHTML="";
}