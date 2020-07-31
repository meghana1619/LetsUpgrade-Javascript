var ar=['\“Don’t take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.\”',
'\“ Dream, dream, dream. Dreams transform into thoughts and thoughts result in action\"',
'\" To succeed in your mission, you must have single-minded devotion to your goal.\"',
'\" If you fail, never give up because FAIL means "First Attempt In Learning" \"',
'\"Creativity is seeing the same thing but thinking differently \"',
'\" Failure will never overtake me if my determination to succeed is strong enough\"',
'\"All of us do not have equal talent. But , all of us have an equal opportunity to develop our talents \"',
'\"A dream is not that which you see while sleeping, it is something that does not let you sleep \"',
'\" You should not give up and we should not allow the problem to defeat us.\"',
'\" I was willing to accept what I couldn’t change.\"'];
function sel(){
  
    var ran=Math.floor(Math.random()*(ar.length));
    document.getElementById('p1').innerHTML=ar[ran];
    
}