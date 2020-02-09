var request = require('request'); // 
var cheerio = require('cheerio'); //
var plist   = require('./socks.json'); // HTTP proxies LIST

var r = request.defaults()
var x = 0; // number of proxies that didn't work for some reason;
var y = 0; // number of proxies that have worked;





/* edit below */

var vote_url = 'https://www.strawpoll.me/19271268' // edit last numbers
var op = 0; // choose an option; 0 = first one, 1 = second, 2 = third and so on
var ratio = 200; // ratio of votes; 200 = 5 per second; 1000/ratio = y per second;

/* warning: do not make changes anywhere else if you do not know what you're doing*/





function vote(url, value, n) { // function for vote
request(url, function (error, response, body) {

  

  $ = cheerio.load(body); var data = $('form[data-form-type="poll-vote"]').html();
  $ = cheerio.load(data); var a = $('input[id="field-security-token"]').val(); var b = $('input[id="field-authenticity-token"]').attr("name");

  var options = $('input[name="options"]');

  data = {"s":a+b, "opval":options}

  var i = 0; var x = plist.length;

  function fx() {
     setP(i); sendVote(url, data.s, options.eq(value).val()); i++; if(i < x ) { setTimeout(fx, ratio); }}
  fx();

 })
}

function setP(i) {
  r = request.defaults({'proxy':'http://' + plist[i + 0]})
}

function sendVote(url, security_token, option_, a) {
  r.post(url, {form:{"security-token":security_token, 'options':option_}},

  function (error, response, body) {
    if (error) { x++; } else { y++ }
    console.log('Successfully sent vote', x, "times.", "Failed", y, "times.", "Tried", x+y, "proxies.")
  })
}


vote(vote_url, op, plist.length)

