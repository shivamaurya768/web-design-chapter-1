let q = [
  // ==================== INTERNET & WWW ====================
  ["Q1. What is the Internet?", {
    "A. A single computer": false,
    "B. A global network of interconnected computers": true,
    "C. A software program": false,
    "D. A database": false
  }],
  ["Q2. What does WWW stand for?", {
    "A. Web World Wide": false,
    "B. World Wide Web": true,
    "C. World Web Wide": false,
    "D. Wide World Web": false
  }],
  ["Q3. Who invented the World Wide Web?", {
    "A. Bill Gates": false,
    "B. Steve Jobs": false,
    "C. Tim Berners-Lee": true,
    "D. Mark Zuckerberg": false
  }],
  ["Q4. What is the primary protocol used on the WWW?", {
    "A. FTP": false,
    "B. HTTP/HTTPS": true,
    "C. SMTP": false,
    "D. TCP": false
  }],
  ["Q5. What is an ISP?", {
    "A. Internet Service Provider": true,
    "B. Internal System Processor": false,
    "C. Internet Security Protocol": false,
    "D. International Standard Program": false
  }],
  ["Q6. What is a URL?", {
    "A. Programming language": false,
    "B. File type": false,
    "C. Web address": true,
    "D. Server hardware": false
  }],
  ["Q7. What does HTTP stand for?", {
    "A. HyperText Transmission Program": false,
    "B. High Transfer Text Protocol": false,
    "C. HyperText Transfer Protocol": true,
    "D. High Task Transfer Protocol": false
  }],
  ["Q8. What is the difference between HTTP and HTTPS?", {
    "A. HTTPS is faster": false,
    "B. HTTPS has encryption": true,
    "C. HTTP is newer": false,
    "D. No difference": false
  }],
  ["Q9. What is a domain name?", {
    "A. File type": false,
    "B. Hardware part": false,
    "C. Website address": true,
    "D. Code editor": false
  }],
  ["Q10. Which organization manages domain names globally?", {
    "A. ICANN": true,
    "B. W3C": false,
    "C. IEEE": false,
    "D. ISO": false
  }],

  // ==================== WEBSITE & WEBPAGE ====================
  ["Q11. What is a website?", {
    "A. A single page": false,
    "B. A collection of related webpages": true,
    "C. A browser": false,
    "D. A server": false
  }],
  ["Q12. What is a webpage?", {
    "A. A network cable": false,
    "B. A CPU part": false,
    "C. A document on the Internet": true,
    "D. A software tool": false
  }],
  ["Q13. What is a homepage?", {
    "A. A server location": false,
    "B. A type of browser": false,
    "C. Main/entry page of a website": true,
    "D. A coding language": false
  }],
  ["Q14. What is a landing page?", {
    "A. Page designed for marketing campaigns": true,
    "B. Server page": false,
    "C. Database page": false,
    "D. Error page": false
  }],
  ["Q15. What is a subdomain?", {
    "A. Main website": false,
    "B. A domain under another domain": true,
    "C. IP address": false,
    "D. Browser": false
  }],

  // ==================== WORKING OF WEBSITES ====================
  ["Q16. What does a web server do?", {
    "A. Draw graphics": false,
    "B. Display screen": false,
    "C. Play music": false,
    "D. Store and send webpages": true,
  }],
  ["Q17. What is a client in web terminology?", {
    "A. Server": false,
    "B. CPU": false,
    "C. Database": false,
    "D. User device": true,
  }],
  ["Q18. What is the request-response model?", {
    "A. No communication": false,
    "B. Server asks, client answers": false,
    "C. Client asks, server answers": true,
    "D. Only server sends data": false
  }],
  ["Q19. What is a web hosting service?", {
    "A. Storing website files on a server": true,
    "B. Designing website": false,
    "C. Writing code": false,
    "D. Testing website": false
  }],
  ["Q20. What is DNS?", {
    "A. Domain Name System": true,
    "B. Data Network Service": false,
    "C. Digital Number System": false,
    "D. Direct Network Socket": false
  }],

  // ==================== FRONT END ====================
  ["Q21. What is Front-End development?", {
    "A. Server coding": false,
    "B. User interface design": true,
    "C. Database handling": false,
    "D. Hardware design": false
  }],
  ["Q22. Which language is used for structure of a webpage?", {
    "A. JavaScript": false,
    "B. CSS": false,
    "C. HTML": true,
    "D. PHP": false
  }],
  ["Q23. Which language is used for styling a webpage?", {
    "A. HTML": false,
    "B. CSS": true,
    "C. JavaScript": false,
    "D. Python": false
  }],
  ["Q24. Which language is used for interactivity in front end?", {
    "A. HTML": false,
    "B. CSS": false,
    "C. JavaScript": true,
    "D. SQL": false
  }],
  ["Q25. What is a Front-End framework?", {
    "A. Django, Flask": false,
    "B. Node.js, Express": false,
    "C. React, Angular, Vue": true,
    "D. MySQL, MongoDB": false
  }],
  ["Q26. What is Bootstrap?", {
    "A. CSS framework for responsive design": true,
    "B. Backend language": false,
    "C. Database": false,
    "D. Server software": false
  }],

  // ==================== BACK END ====================
  ["Q27. What is Back-End development?", {
    "A. UI design": false,
    "B. Server-side logic": true,
    "C. Styling": false,
    "D. Graphics": false
  }],
  ["Q28. Which is a Back-End language?", {
    "A. CSS": false,
    "B. HTML": false,
    "C. PHP": true,
    "D. Bootstrap": false
  }],
  ["Q29. Which is a Back-End language?", {
    "A. Python": true,
    "B. CSS": false,
    "C. JavaScript (front-end only)": false,
    "D. HTML": false
  }],
  ["Q30. Which is a Back-End language?", {
    "A. Java": true,
    "B. CSS": false,
    "C. HTML": false,
    "D. Bootstrap": false
  }],
  ["Q31. Which is a Back-End framework?", {
    "A. Vue.js": false,
    "B. React": false,
    "C. Node.js": true,
    "D. Bootstrap": false
  }],
  ["Q32. What is a database used for in back end?", {
    "A. Design webpage": false,
    "B. Store and retrieve data": true,
    "C. Style elements": false,
    "D. Animation": false
  }],
  ["Q33. Which is a database language?", {
    "A. CSS": false,
    "B. HTML": false,
    "C. SQL": true,
    "D. JavaScript": false
  }],

  // ==================== CLIENT & SERVER SCRIPTING ====================
  ["Q34. What is client-side scripting?", {
    "A. Runs on server": false,
    "B. Runs in browser": true,
    "C. Runs in CPU": false,
    "D. Runs in database": false
  }],
  ["Q35. Which is a client-side language?", {
    "A. JavaScript": true,
    "B. PHP": false,
    "C. SQL": false,
    "D. Java (backend)": false
  }],
  ["Q36. What is server-side scripting?", {
    "A. Runs in browser": false,
    "B. Runs on server": true,
    "C. Runs offline": false,
    "D. Runs in RAM": false
  }],
  ["Q37. Which is a server-side language?", {
    "A. PHP": true,
    "B. HTML": false,
    "C. CSS": false,
    "D. JavaScript (client-side)": false
  }],
  ["Q38. Can JavaScript be used on server-side?", {
    "A. Only for databases": false,
    "B. No, never": false,
    "C. Only for styling": false,
    "D. Yes, with Node.js": true,
  }],
  ["Q39. What is the main advantage of server-side scripting?", {
    "A. Better colors": false,
    "B. Faster animation": false,
    "C. Security & database access": true,
    "D. No need for internet": false
  }],
  ["Q40. What is the main advantage of client-side scripting?", {
    "A. Faster interactivity without reload": true,
    "B. More secure": false,
    "C. Accesses database directly": false,
    "D. No browser needed": false
  }],

  // ==================== RESPONSIVE WEB DESIGNING ====================
  ["Q41. What is responsive web design?", {
    "A. Fixed layout": false,
    "B. Adapts to different screen sizes": true,
    "C. Only mobile": false,
    "D. Only desktop": false
  }],
  ["Q42. Which CSS feature is used for responsive design?", {
    "A. Padding": false,
    "B. Margin": false,
    "C. Media Queries": true,
    "D. Color": false
  }],
  ["Q43. What is a viewport in responsive design?", {
    "A. Database table": false,
    "B. Server location": false,
    "C. User's visible area of webpage": true,
    "D. Code editor": false
  }],
  ["Q44. Which unit is relative in responsive design?", {
    "A. px": false,
    "B. em / rem / vw / vh": true,
    "C. cm": false,
    "D. mm": false
  }],
  ["Q45. What is a fluid grid in responsive design?", {
    "A. No layout": false,
    "B. Uses fixed pixels": false,
    "C. Uses percentage widths": true,
    "D. Only for mobile": false
  }],
  ["Q46. What is a breakpoint in responsive design?", {
    "A. Server crash": false,
    "B. Code error": false,
    "C. Screen width where layout changes": true,
    "D. Database limit": false
  }],
  ["Q47. Which framework is popular for responsive design?", {
    "A. Bootstrap": true,
    "B. Django": false,
    "C. Laravel": false,
    "D. Spring": false
  }],
  ["Q48. What is mobile-first design?", {
    "A. Design for mobile first, then larger screens": true,
    "B. Design only for mobile": false,
    "C. Design only for desktop": false,
    "D. No design at all": false
  }],
  ["Q49. What does @media do in CSS?", {
    "A. Plays videos": false,
    "B. Creates media files": false,
    "C. Applies styles based on device conditions": true,
    "D. Accesses microphone": false
  }],
  ["Q50. Main benefit of responsive design?", {
    "A. Only mobile": false,
    "B. Only desktop": false,
    "C. Works on all devices": true,
    "D. No design needed": false
  }],

  // ==================== STATIC WEBSITES ====================
  ["Q51. What is a static website?", {
    "A. Dynamic content": false,
    "B. Fixed content (same for all users)": true,
    "C. Database driven": false,
    "D. Login system": false
  }],
  ["Q52. Which languages are used for static websites?", {
    "A. Python, Django": false,
    "B. PHP, SQL": false,
    "C. HTML, CSS, JavaScript (client-side)": true,
    "D. Java, Spring": false
  }],
  ["Q53. Does a static website need a database?", {
    "A. Sometimes": false,
    "B. Yes, always": false,
    "C. Sometimes": false,
    "D. Only for login": false
  }],
  ["Q54. Example of a static website?", {
    "A. Personal portfolio page": true,
    "B. Facebook": false,
    "C. Amazon": false,
    "D. Gmail": false
  }],
  ["Q55. Can a static website have JavaScript interactivity?", {
    "A. Yes (client-side JS)": true,
    "B. No": false,
    "C. Only for server": false,
    "D. Only for database": false
  }],
  ["Q56. What is a static site generator?", {
    "A. Tool to generate HTML from templates": true,
    "B. Database tool": false,
    "C. Server software": false,
    "D. Browser": false
  }],
  ["Q57. Which is a static site generator?", {
    "A. Jekyll, Hugo, Next.js (static export)": true,
    "B. MySQL": false,
    "C. Apache": false,
    "D. Nginx": false
  }],

  // ==================== DYNAMIC WEBSITES ====================
  ["Q58. What is a dynamic website?", {
    "A. Fixed content": false,
    "B. Content changes based on user/server": true,
    "C. No interaction": false,
    "D. Only HTML": false
  }],
  ["Q59. Which languages are used for dynamic websites?", {
    "A. Only CSS": false,
    "B. Only HTML": false,
    "C. PHP, Python, Node.js, SQL": true,
    "D. Only static JS": false
  }],
  ["Q60. Example of a dynamic website?", {
    "A. Facebook": true,
    "B. Plain HTML brochure site": false,
    "C. Static CV page": false,
    "D. README file": false
  }],
  ["Q61. Does a dynamic website use a database?", {
    "A. Only for CSS": false,
    "B. Never": false,
    "C. Only for images": false,
    "D. Usually yes": true,
  }],
  ["Q62. What is server-side rendering (SSR)?", {
    "A. No HTML": false,
    "B. Browser generates HTML": false,
    "C. Server generates full HTML": true,
    "D. CSS only": false
  }],
  ["Q63. What is a CMS?", {
    "A. Code Management Software": false,
    "B. Computer Memory System": false,
    "C. Content Management System": true,
    "D. CSS Main System": false
  }],
  ["Q64. Which is a popular CMS?", {
    "A. Excel": false,
    "B. Notepad": false,
    "C. WordPress": true,
    "D. Photoshop": false
  }],

  // ==================== COMPARISON & MIXED ====================
  ["Q65. Static vs Dynamic: Which is faster to load?", {
    "A. Static (no server processing)": true,
    "B. Dynamic": false,
    "C. Both same": false,
    "D. Depends on CSS": false
  }],
  ["Q66. Which type allows user login system?", {
    "A. Dynamic website": true,
    "B. Static website": false,
    "C. Both equally": false,
    "D. Neither": false
  }],
  ["Q67. Which type can show different content per user?", {
    "A. Dynamic": true,
    "B. Static": false,
    "C. Both": false,
    "D. Neither": false
  }],
  ["Q68. Which is cheaper to host?", {
    "A. Both same": false,
    "B. Dynamic": false,
    "C. Static (less server resources)": true,
    "D. Depends on images": false
  }],

  // ==================== ADDITIONAL IMPORTANT TERMS ====================
  ["Q69. What is an IP address?", {
    "A. Webpage": false,
    "B. Internet program": false,
    "C. Unique identifier for network device": true,
    "D. Browser": false
  }],
  ["Q70. What is a web browser?", {
    "A. Chrome, Firefox, Edge": true,
    "B. Google Search": false,
    "C. Windows": false,
    "D. MySQL": false
  }],
  ["Q71. What is a search engine?", {
    "A. Google, Bing, Yahoo": true,
    "B. Chrome": false,
    "C. VS Code": false,
    "D. Excel": false
  }],
  ["Q72. What is FTP?", {
    "A. Font Transfer Protocol": false,
    "B. Fast Text Protocol": false,
    "C. File Type Program": false,
    "D. File Transfer Protocol": true,
  }],
  ["Q73. What is a hyperlink?", {
    "A. Server": false,
    "B. Image": false,
    "C. Clickable link to another page": true,
    "D. Database": false
  }],
  ["Q74. What is SEO?", {
    "A. Software Execution Order": false,
    "B. Server Execution Output": false,
    "C. System Error Object": false,
    "D. Search Engine Optimization": true,
  }],
  ["Q75. What is a CDN?", {
    "A. Computer Domain Name": false,
    "B. Central Database Network": false,
    "C. Code Development Node": false,
    "D. Content Delivery Network": true,
  }],
  ["Q76. What is caching in web?", {
    "A. Compressing images": false,
    "B. Deleting files": false,
    "C. Encrypting data": false,
    "D. Storing copies for faster loading": true,
  }],
  ["Q77. What is a cookie on a website?", {
    "A. Small data stored by browser": true,
    "B. Food recipe": false,
    "C. Server hardware": false,
    "D. CSS property": false
  }],
  ["Q78. What is a session in web?", {
    "A. CSS class": false,
    "B. Permanent database": false,
    "C. Temporary user data on server": true,
    "D. HTML tag": false
  }],
  ["Q79. What is AJAX?", {
    "A. Asynchronous JS and XML (load data without refresh)": true,
    "B. A Java framework": false,
    "C. CSS preprocessor": false,
    "D. Database": false
  }],
  ["Q80. What is API in web?", {
    "A. Application Programming Interface": true,
    "B. Apple Program Interface": false,
    "C. Automated Page Index": false,
    "D. Advanced Protocol Internet": false
  }],

  // ==================== MORE REVIEW QUESTIONS ====================
  ["Q81. Which HTML tag creates a hyperlink?", {
    "A. <href>": false,
    "B. <link>": false,
    "C. <a>": true,
    "D. <url>": false
  }],
  ["Q82. Which CSS property changes background color?", {
    "A. bgcolor": false,
    "B. color": false,
    "C. background-color": true,
    "D. background": false
  }],
  ["Q83. Which JavaScript method writes to page?", {
    "A. alert()": false,
    "B. console.log()": false,
    "C. document.write()": true,
    "D. prompt()": false
  }],
  ["Q84. What does DOM stand for?", {
    "A. Document Object Model": true,
    "B. Data Object Module": false,
    "C. Display Output Manager": false,
    "D. Dynamic Order Method": false
  }],
  ["Q85. What is a form on a webpage used for?", {
    "A. Styling": false,
    "B. Playing video": false,
    "C. Collecting user input": true,
    "D. Animation": false
  }],
  ["Q86. What is a favicon?", {
    "A. Small icon in browser tab": true,
    "B. Font style": false,
    "C. JavaScript file": false,
    "D. Database query": false
  }],
  ["Q87. What is a sitemap?", {
    "A. List of pages on a website": true,
    "B. Map image": false,
    "C. Server location": false,
    "D. CSS layout": false
  }],
  ["Q88. What does 404 error mean?", {
    "A. Access denied": false,
    "B. Server error": false,
    "C. Page not found": true,
    "D. Bad request": false
  }],
  ["Q89. What does 500 error mean?", {
    "A. OK": false,
    "B. Page not found": false,
    "C. Internal server error": true,
    "D. Forbidden": false
  }],
  ["Q90. What is localhost?", {
    "A. Database": false,
    "B. Public website": false,
    "C. Google server": false,
    "D. Your own computer as a server": true,
  }],

  // ==================== FINAL SET (91-100) ====================
  ["Q91. What is a protocol in networking?", {
    "A. Set of rules for communication": true,
    "B. Hardware device": false,
    "C. Programming language": false,
    "D. Web browser": false
  }],
  ["Q92. What is bandwidth?", {
    "A. Storage space": false,
    "B. Data transfer capacity per second": true,
    "C. Memory size": false,
    "D. CPU speed": false
  }],
  ["Q93. What is latency?", {
    "A. Image quality": false,
    "B. Speed of CPU": false,
    "C. Delay in data transfer": true,
    "D. Font size": false
  }],
 ["Q93. What is UI?", {
    "A. look website": true,
    "B. backend website": false,
    "C. database website": false,
    "D. Font size": false
  }],
  ["Q95. What is a modem?", {
    "A. Modulates/demodulates signals": true,
    "B. Web browser": false,
    "C. Search engine": false,
    "D. Programming tool": false
  }],
  ["Q96. What is cloud hosting?", {
    "A. Local only": false,
    "B. Hosting on single PC": false,
    "C. No hosting": false,
    "D. Hosting on virtual servers": true,
  }],
  ["Q97. What is SSL/TLS?", {
    "A. Database": false,
    "B. Programming language": false,
    "C. Encryption for secure data transfer": true,
    "D. CSS framework": false
  }],
  ["Q98. What is a React.js used for?", {
    "A. Database": false,
    "B. Back-end server": false,
    "C. Front-end UI library": true,
    "D. Operating system": false
  }],
  ["Q99. What is Node.js used for?", {
    "A. Database": false,
    "B. CSS framework": false,
    "C. Server-side JavaScript runtime": true,
    "D. HTML editor": false
  }],
  ["Q100. Main purpose of a web developer?", {
    "A. Create and maintain websites": true,
    "B. Design cars": false,
    "C. Repair hardware": false,
    "D. Cook food": false
  }]
];
        let index = 0;
        let total = 0;
        let answered = new Array(q.length).fill(false);
        let selectedAnswers = new Array(q.length).fill(null);
        let que = document.getElementById("question");
        let feedback = document.getElementById("feedback");
        let h2 = document.createElement("h2");
        que.appendChild(h2);

        let buttons = [];
        let s_btn;
        let h_solov=document.getElementById("h_solov");
        for(let i=1;i<=q.length;i++){
            s_btn=document.createElement("button");
             s_btn.id=`sbtn${i}`;
            s_btn.className="sbtn";
            s_btn.textContent=i;
            h_solov.appendChild(s_btn);
        }
let tbtn=document.getElementsByClassName("sbtn")

        for (let i = 0; i < 4; i++) {
            let btn = document.createElement("button");
            btn.className = "b";
            btn.addEventListener("click", () => ans(btn.textContent));
            que.appendChild(btn);
            buttons.push(btn);
        }
    

        function render() {
            let current = q[index];
            h2.textContent = current[0];
            let options = current[1];
            let keys = Object.keys(options);
            for (let i = 0; i < 4; i++) {
                buttons[i].textContent = keys[i];
                buttons[i].disabled = answered[index];
                buttons[i].style.backgroundColor = ""; 
            }
          
        }





        
        function next() {
            index++;
            if (index >= q.length) {
                index = 0;
            }
            render();
        }

        function privious() {
            index--;
            if (index < 0) {
                index = q.length - 1;
            }
            render();
        }

        function ans(selectedAns) {
            if (answered[index]) return;
            let options = q[index][1];
            selectedAnswers[index] = selectedAns;
            answered[index] = true;
            let temp=index+1;
            document.getElementById(`sbtn${temp}`).style.backgroundColor="green"
            if (options[selectedAns]) {
                total++;
            }
            render();
        }

        function submitQuiz() {
            total = 0; // Recalculate total
            for (let i = 0; i < q.length; i++) {
                let options = q[i][1];
                let correctAnswer = Object.keys(options).find(key => options[key]);
                if (selectedAnswers[i] === correctAnswer) {
                    total++;
                }
            }
            if(confirm("Do you want a  submit in this test")){
                 feedback.value = total;
                // feedback.style.color = "blue";
                document.getElementById("form_main").style.display="block";
                document.getElementById("quiz").style.display="none";
                document.getElementById("hh_solov").style.display="none";
                
                document.getElementById("time").style.display="none";
                showCorrectAnswers();
                
            }
        }

        function showCorrectAnswers() {
            let current = q[index];
            let options = current[1];
            let keys = Object.keys(options);
            let correctAnswer = keys.find(key => options[key]);

            for (let i = 0; i < 4; i++) {
                let btn = buttons[i];
                let btnText = btn.textContent;
                btn.disabled = true; // Disable buttons after submission
                
            }
        }

        // Whenever you render, if already submitted, show correct answer
        function render() {
            let current = q[index];
            h2.textContent = current[0];
            let options = current[1];
            let keys = Object.keys(options);
            for (let i = 0; i < 4; i++) {
                let btn = buttons[i];
                btn.textContent = keys[i];
                btn.disabled = answered[index];
                btn.style.backgroundColor = "";
            }
            feedback.textContent = "";

            // If quiz already submitted, show correct answer for this question
            if (feedback.textContent !== "") {
                showCorrectAnswers();
            }
        }
        
//rule start  
let check=document.getElementById("check_box");
let btn_info=document.getElementById("info__btn");
check.addEventListener('change', function(){
    if(this.checked){
        btn_info.style.display="block";
    }
    else{
        btn_info.style.display="none";
    }
});

function quiz_start(){
    document.getElementById("quiz").style.display="block";
    document.getElementById("hh_solov").style.display="block";
    document.getElementById("detail").style.display="none";
}





// rule end 

        function from_submit(){
            var roll_no=document.getElementById("roll").value;
            var Name=document.getElementById("name").value;
            var f_name=document.getElementById("f_name").value;
            var course=document.getElementById("course").value;
            if(roll_no =="" || Name =="" || f_name =="" || course ==""){
                alert("Please fill all info");
                return;
            }
            document.getElementById("quiz").style.display="none";
            let form_main=document.getElementById("form_main");
            let sub_msg=document.getElementById("sub_msg");
            form_main.style.display="none";
            sub_msg.style.display="block";
            //document.getElementById("form").style.display="block";
        }
    

// show pass 
let check_box=document.getElementById("remember");
let pass=document.getElementById("password")
check_box.addEventListener('change', function(){
    if(this.checked){
        pass.type="text";
    }
    else{
        pass.type="password";
    }
});
// end show password

//login user
let user_name=""
let password=0;
let login_name=document.getElementById("user");
function login_usar(){
    if(pass.value==password && login_name.value==user_name){
        document.getElementById("detail").style.display="block";
        document.getElementById("login").style.display="none";
        //document.getElementById("quiz").style.display="block";
        

    }else{
        alert("invalid username and password");
    }
}

        let t=document.getElementById("time");
        let total_time=60*60;
        let min=59;
        let sec=60;
       


        function show_time(){
            if(sec==0){
                t.innerHTML="Time out -->"+min+": "+sec;
                sec=60;
                min--;
            }
            t.innerHTML="Time out -->"+min+": "+sec;
            sec--;
        }
    setInterval(show_time, 1000);
    let time_up=60000*60;
    setTimeout(function(){
        alert("your exam finished");
        t.style.display="none";
        submitQuiz();
        }, time_up)
            render();
            //information();


// API call for google sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbwehK9TpPrAOned-fnbaKp70sK3CP_0NpXMqq2NzhhFB85FU9MBrDyvGck5RtepR-Z0/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks you ! your test submited"))
                .catch(error => console.error('Error!', error.message))
            })
            function submit__msg(){
                

            }