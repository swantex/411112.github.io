const date = new Date();
let year = date.getFullYear();
let yearsAgo = year - 5;

const asciiArt = `<pre>                       d8b         
                       <span class="red">qop</span>        
                        _            
 _____      ____ _ _ __ | |_ _____  __
/ __\ \ /\ / / _` | '_ \| __/ _ \ \/ /
\__ \\ V  V / (_| | | | | ||  __/>  < 
|___/ \_/\_/ \__,_|_| |_|\__\___/_/\_\
                                      
    <span class="red">${yearsAgo}-${year}</span>
_______________________Y8Y___________________
<span class="red">________________________Y</span>_____________________</pre>`

const commands = [
	["guest", asciiArt],
	["ben-kimim", "ismim furkan<br />yazılım siber güvenlik uzmanıyım full stack developer olma yolundayım."],
	["hakkımda fazlası", "ctf çözme;<br />front end dev.;<br />backend dev.;<br />coder;<br />ağ ve sistem yöneticisi."],
	["addresses mail --all", "swantex@proton.me<br  />proton mailden gönderirseniz sevinirim."],
	["iletişim", '<a href="https://swantex.github.io/sw3ntex">swantex.github.io/sw3ntex   </a><sub> link iletişim sayfama yönlendirecektir</sub>'],
	['languages --all', 'türkçe, ingilizce  ...'],
	['programlama dilleri --all', 'bash, python, js, css, html ,java, ruby, swift, shell, php ...'],
	['geliştirme araçları', 'git, docker'],
	['politika listesi kural kümesi', 'ikili dosya yok..<br />sıfır güven. /> ha bide kral swantex']
];
