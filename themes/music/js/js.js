var TimeSpan_isVisit = new Array(0, 0, 30); // 0 ngay, 0 gio, 30 phut
var TimeSpan_isUnique = new Array(1, 0, 0); // 1 ngay, 0 gio, 0 phut
var TimeSpan_isNewVisit = new Array(365, 0, 0); // 365 ngay, 0 gio, 0 phut
var TimeSpan_Persistance = new Array(365, 0, 0); // mai mai...
var Log_ArticleId, Log_ArticleName, Log_CatId, Log_CatName;
function timeSpanToMillisecond(timeSpan)
{
	return ((timeSpan[0]*24 + timeSpan[1])*60 + timeSpan[2])*60000;
}
/*************************************************************************************/
function Log_Querystring(qs) { // optionally pass a querystring to parse
	this.params = {};
	
	if (qs == null) qs = location.search.substring(1, location.search.length);
	if (qs.length == 0) return;

	qs = qs.replace(/\+/g, ' ');
	var args = qs.split('&');
	
	for (var i = 0; i < args.length; i++) {
		var pair = args[i].split('=');
		var name = decodeURIComponent(pair[0]);
		
		var value = (pair.length==2)
			? decodeURIComponent(pair[1])
			: name;
		
		this.params[name] = value;
	}
}

Log_Querystring.prototype.get = function(key, default_) {
	var value = this.params[key];
	return (value != null) ? value : default_;
}

Log_Querystring.prototype.contains = function(key) {
	var value = this.params[key];
	return (value != null);
}
function Log_AssignValue(articleId, articleTitle, catId, catName)
{
	Log_ArticleId = articleId;
	Log_ArticleName = articleTitle;
	Log_CatId = catId;
	Log_CatName = catName;
	Log_callLogger();
}
function Log_getOS()
{
	var os = window.navigator.userAgent;
	
	if (os.indexOf('Windows NT 5.1') >= 0)
		os = 'Windows XP';
	else if (os.indexOf('Windows NT 5.2') >= 0)
		os = 'Windows Server 2003';
	else if (os.indexOf('Windows NT 5.0') >= 0)
		os = 'Windows 2000';
	else if (os.indexOf('Windows NT 6.0') >= 0)
		os = 'Windows Vista';
	else if (os.indexOf('Win95') >= 0)
		os = 'Win95';
	else if (os.indexOf('Win98') >= 0)
		os = 'Win98';
	else if (os.indexOf('Windows') >= 0)
		os = 'Windows';
	else if (os.indexOf('Linux') >= 0)
		os = 'Linux';
	else if (os.indexOf('Mac') >= 0)
		os = 'Mac';
	else
		os = 'Others';
	return os;
}
function Log_getBrowser()
{
	var userAgent = window.navigator.userAgent;
	
	if (userAgent.indexOf('Opera')>-1)
		return 'Opera';
	else if (userAgent.indexOf('Safari')>-1)
		return 'Safari';
	else if (userAgent.indexOf('Firefox')>-1)
		return userAgent.substr(userAgent.indexOf('Firefox'), 'Firefox/2'.length) + '.x';
	else if (userAgent.indexOf('MSIE')>-1)
		return userAgent.substr(userAgent.indexOf('MSIE')+2, 'ie 6'.length);
	else if (userAgent.indexOf('http://soha.vn/Gecko/')>-1)
		return 'Gecko';
	else
		return userAgent; //return "Others";
}
function Log_getHostFromURL(url)
{
	if (url)
	{
		url = url.toLowerCase();
		if (url.indexOf('http://')==0) url = url.substr(7);
		if (url.indexOf('www.')==0) url = url.substr(4);
		var index = url.indexOf('http://soha.vn/');
		if (index>0) url = url.substr(0, index);
		return url;
	}
	else
		return '';
}
/*************************************************************************************/
function Log_createCookie(name, value, timeSpan) {
	var millisecond = timeSpanToMillisecond(timeSpan);
	var date = new Date();
	date.setTime(date.getTime() + millisecond);
	var expires = "; expires="+date.toGMTString();

	document.cookie = name+"="+value+expires+"; path=/";
}
function Log_updateCookie(name, value) {
	var cookieValue = document.cookie.split(';');
	cookieValue[0] = name + "=" + value;
	document.cookie = cookieValue.join(';');
}
function Log_readCookie(name) {
	var nameEQ = name + "=";
	var c, ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function del_cookie(name) {
    document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
} 

function Log_sendXMLHttpRequest(query)
{
	var url = 'http://reporting.soha.channelvn.net/Handler.ashx?' + query + '&dd=' + (new Date).getTime();
	//var url1 = 'http://reporting.channelvn.net/Handler.ashx?' + query + '&dd=' + (new Date).getTime();
	var img = new Image(); img.src = url;
	//var img1 = new Image(); img1.src = url1;
//	var script = document.createElement('script');
//    script.setAttribute('type','text/javascript');
//    script.setAttribute('src', url);
//    var head = document.getElementsByTagName('head')[0];
//    head.appendChild(script);
    
  
    
}

function Log_getkeyword()
{
	var keyword = '';
	var referrer = document.referrer ? document.referrer : '';
	var index = referrer.indexOf('?');
	if (index != -1)
	{	
		query = new Log_Querystring(referrer.substr(index + 1));
		var sr = Log_getParam(referrer);
		if (sr) keyword = query.get(sr, '');
	}
	if(!keyword) keyword = '';
	return keyword;
}
function Log_getParam(referrer)
{
	var _uOsr=new Array();
	var _uOkw=new Array();
	_uOsr[0]="google";	_uOkw[0]="q";
	_uOsr[1]="yahoo";	_uOkw[1]="p";
	_uOsr[2]="msn";		_uOkw[2]="q";
	_uOsr[3]="aol";		_uOkw[3]="query";
	_uOsr[4]="aol";		_uOkw[4]="encquery";
	_uOsr[5]="lycos";	_uOkw[5]="query";
	_uOsr[6]="ask";		_uOkw[6]="q";
	_uOsr[7]="altavista";	_uOkw[7]="q";
	_uOsr[8]="netscape";	_uOkw[8]="s";
	_uOsr[9]="cnn";	_uOkw[9]="query";
	_uOsr[10]="looksmart";	_uOkw[10]="qt";
	_uOsr[11]="about";	_uOkw[11]="terms";
	_uOsr[12]="mamma";	_uOkw[12]="query";
	_uOsr[13]="alltheweb";	_uOkw[13]="q";
	_uOsr[14]="gigablast";	_uOkw[14]="q";
	_uOsr[15]="voila";	_uOkw[15]="rdata";
	_uOsr[16]="virgilio";	_uOkw[16]="qs";
	_uOsr[17]="live";	_uOkw[17]="q";
	_uOsr[18]="baidu";	_uOkw[18]="wd";
	_uOsr[19]="alice";	_uOkw[19]="qs";
	_uOsr[20]="seznam";	_uOkw[20]="w";
	_uOsr[21]="yandex";	_uOkw[21]="text";
	_uOsr[22]="najdi";	_uOkw[22]="q";
	_uOsr[23]="aol";	_uOkw[23]="q";
	_uOsr[24]="club-internet"; _uOkw[24]="q";
	_uOsr[25]="mama";	_uOkw[25]="query";
	_uOsr[26]="seznam";	_uOkw[26]="q";
	_uOsr[27]="search";	_uOkw[27]="q";
	//_uOsr[28]="368cnbacth";	_uOkw[28]="a";
	for (var i=0; i<_uOsr.length;i++)
		if (referrer.toLowerCase().indexOf(_uOsr[i].toLowerCase()) > -1) return _uOkw[i];
	return null;
}
/*************************************************************************************/
function Log_callLogger()
{
	var cookieValue = null, cookieName = 'ChannelVN.Logger';
	
	var newsId = Log_ArticleId;
	var newsTitle = Log_ArticleName;
	
	var catId = Log_CatId;
	var catName = Log_CatName;
	var host = Log_getHostFromURL(location.href);
	var browser = Log_getBrowser();
	var resolution = screen.width + ' x ' + screen.height;
	var os = Log_getOS();
	
	var ref = Log_getHostFromURL(document.referrer);
	if (ref == host) ref = '';
	
	
	var keyword = '';
	if (ref != '') keyword = Log_getkeyword();
	
	var isArticleVisit = false, isCatVisit = false, isWebsiteVisit = false, isWebsiteNewVisitor = false;;
	
	
	
	// check is new visitor for website
	cookieValue = Log_readCookie(cookieName);
	if (cookieValue == null)
	{
		isWebsiteNewVisitor = true;
		isWebsiteVisit = true;
		Log_createCookie(cookieName, (new Date).getTime(), TimeSpan_isNewVisit);
	}
	else
	{	
		var d = new Date();
		if (d.getTime() - timeSpanToMillisecond(TimeSpan_isVisit) >= Number(cookieValue))
		{
			isWebsiteVisit = true;
		}
		Log_createCookie(cookieName, (new Date).getTime(), TimeSpan_Persistance);
	}
	
	// check is new visitor for article 
	//if (Number(newsId) != isNaN && Number(newsId) >= 0)
	if (newsId != null && newsId != '' && newsId != '-1')
	{
		cookieName = 'ChannelVN.Logger.p';
		del_cookie(cookieName);
	}
	
	// check is new visitor for category
	//if (Number(catId) != isNaN && Number(catId) >= 0)
	if (catId != null && catId != '' && catId != '-1')
	{
		cookieName = 'http://soha.vn/ChannelVN.Logger.c';
		del_cookie(cookieName);
	}
	
	// remove special characters
	newsTitle = newsTitle.replace(/\t/g, ' '); // thay TAB = SPACE
	
	catName = catName.replace(/\t/g, ' '); // thay TAB = SPACE
	
	
	query = 'articleId=' + newsId +
			'&articleTitle=' + encodeURIComponent(newsTitle?newsTitle:'') +
			'&catId=' + catId +
			'&catName=' + encodeURIComponent(catName?catName:'') +
			'&hostName=' + encodeURIComponent(host) +
			'&urlRef=' + encodeURIComponent(ref) +
			'&browser=' + encodeURIComponent(browser) +
			'&os=' + encodeURIComponent(os) +
			'&keyword=' + encodeURIComponent(keyword) +
			'&isWebsiteVisit=' + isWebsiteVisit +
			'&isWebsiteNewVisitor=' + isWebsiteNewVisitor +
			'&isArticleVisit=' + isArticleVisit +
			'&isCatVisit=' + isCatVisit +
			'&website=' + encodeURIComponent(log_website) +
			'&resolution=' + encodeURIComponent(resolution);
	Log_sendXMLHttpRequest(query);
}

function Log_callLogger_finish() {}
		
//window.addEventListener ? window.addEventListener('load', Log_callLogger, false) : window.attachEvent('onload', Log_callLogger);