// bellow button tezt for qr Creator
// document.querySelector('#btn').addEventListener("click",test)
// function test(e){
    window.addEventListener('DOMContentLoaded', (event) => {   
//     console.log('hola')
//     qrCode()
   
// }
//              Save File


let opt = {
    margin:       0,
    filename:     'myfile.pdf',
    image:        { type: 'jpg' },
    // html2canvas:  { scale: 10},
  //   html2canvas:  {width: '1669',height: '964' },
    jsPDF:        {  orientation: 'portrait' }
  };
// --------------- call Form function 
createform()

// ------------------ look for values in the Form 


// contact Info
const fullname = document.getElementById('name')
const qbcode = document.getElementById('qbcode')
const phone = document.getElementById('phone')
const email = document.getElementById('email')
const site = document.getElementById('site')
const git = document.getElementById('git')
const link = document.getElementById('link')
//Education
const time = document.getElementById('time')
const curriculum = document.getElementById('curriculum')
const school = document.getElementById('school')
const time2 = document.getElementById('time2')
const curriculum2 = document.getElementById('curriculum2')
const school2 = document.getElementById('school2')

//Profile text
const profile = document.getElementById('profile_form')

//Job Experience

const job1date = document.getElementById('job1date')
const company1 = document.getElementById('company1')
const position1 = document.getElementById('position1')
const experience_form1 = document.getElementById('experience_form1')


const job2date = document.getElementById('job2date')
const company2 = document.getElementById('company2')
const position2 = document.getElementById('position2')
const experience_form2 = document.getElementById('experience_form2')


const job3date = document.getElementById('job3date')
const company3 = document.getElementById('company3')
const position3 = document.getElementById('position3')
const experience_form3 = document.getElementById('experience_form3')
// professional skills 
const skill1 = document.getElementById('skill1')
const skill2 = document.getElementById('skill2')
const skill3 = document.getElementById('skill3')
const skill4 = document.getElementById('skill4')


const skill5 = document.getElementById('skill5')
const skill6 = document.getElementById('skill6')
const skill7 = document.getElementById('skill7')
const skill8 = document.getElementById('skill8')

const form = document.getElementById('createResume')
const edit = document.getElementById('createResume')




// eventlistener for submit button

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    console.log(skill1.value)
    console.log(skill2.value)
    console.log(skill3.value)
    console.log(skill4.value)

    console.log(skill5.value)
    console.log(skill6.value)
    console.log(skill7.value)
    console.log(skill8.value)



    form.remove()
    allHtml ()
    let element = document.getElementById('nose');        
  
   
    // html2pdf().set(opt).from(element).save();
})

// ---------------------- HTML for the resume

function allHtml (){
let site = document.createElement('div')
site.className ='container'
site.id ='nose'
// site.style.width = '1669px';
// site.style.height= '964px';
qrCode()
 site.innerHTML = ` 
<div class="left_side">
    <div class="profileText">
        <div class="imgBox">
            <img src=""  id = "qr" /> 
        </div>
        <h2>${fullname.value}<br><span>Web Developer</span></h2>
    </div>
   <div class="contactInfo">
       <h3 class="title">Contact Info</h3>
       <ul>
           <li>
               <span class="icon"><i class="fa fa-phone" aria-hidden="true"></i></span>
               <span class="text">${phone.value}</span>
           </li>
           <li>
              <span class="icon"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
              <span class="text">${email.value}</span>
          </li>
          <li>
              <span class="icon"><i class="fa fa-globe" aria-hidden="true"></i>
              </span>
              <span class="text" style="font-size: 12px;">${site.value}</span>
          </li>
          <li>
              <span class="icon"><i class="fa fa-linkedin" aria-hidden="true"></i></span>
              <span class="text">${link.value}</span>
          </li>
          <li>
              <span class="icon"><i class="fa fa-github" aria-hidden="true"></i></span>
              <span class="text">${git.value}</span>
          </li>
       </ul>
   </div> 
   <div class="contactInfo education">
      <h3 class="title">Education</h3>
      <ul>
          <li>
              <h5>${time.value}</h5>
              <h4> ${curriculum.value}</h4>
              <h4>${school.value}</h4>
          </li>
          <li>
               <h5>${time2.value}</h5>
              <h4> ${curriculum2.value}</h4>
              <h4>${school2.value}</h4>
          </li>
      </ul>
  </div> 
</div>
<!-- <button id="btn"></button> Test for Qr Creator-->
<div class="right_side">
  <div class="about">
      <h2 class="title2">Profile</h2>
      <p>${profile.value}</p>
  </div>
  <div class="about">
      <h2 class="title2">Experience</h2>
      <div class="box">
          <div class="year_company">
              <h5>${job1date.value}</h5>
              <h5>${company1.value}</h5>
          </div>
          <div class="text">
              <h4>${position1.value}</h4>
              ${experience_form1.value}
          </div>
      </div>   
      <div class="box">
          <div class="year_company">
              <h5>${job2date.value}</h5>
              <h5>${company2.value}</h5>
          </div>
          <div class="text">
              <h4>${position2.value}</h4>
              ${experience_form2.value}
          </div>
      </div>   
      <div class="box">
          <div class="year_company">
              <h5>${job3date.value}</h5>
              <h5>${company3.value}</h5>
          </div>
          <div class="text">
              <h4>${position3.value}</h4>
              ${experience_form3.value}
          </div>
      </div>   
  </div>
  <div class="about skills">
      <h2 class="title2">Professional Skills</h2>
      <div class="box">
          <div class="innerBox">
              <ul>
                  <li><h4>${skill1.value}</h4></li>
                  <li><h4>${skill2.value}</h4></li>
                  <li><h4>${skill3.value}</h4></li>
                  <li><h4>${skill4.value}</h4></li>
              </ul>
          </div>
          <div class="innerBox">
              <ul>
              <li><h4>${skill5.value}</h4></li>
              <li><h4>${skill6.value}</h4></li>
              <li><h4>${skill7.value}</h4></li>
              <li><h4>${skill8.value}</h4></li>
              </ul>
          </div>
          
      </div>
      
      
  </div>
</div>
`

document.body.appendChild(site)
// test 

// let backgrouncolor = document.getElementsByClassName('left_side')
// backgrouncolor.style.background= "lightblue";

let test2 = document.getElementById("qr");
test2.addEventListener("click", (e)=> {

    alert('downloading file')
    let element = document.getElementById('nose');      
    html2pdf(element, opt);

})

}

//   -    -- ------------------           QRcode 
function qrCode(){
// qbcode =+ "!&size=1100x1100"
//let data = 'www.hotmail.com!&size=1100x1100' //https://goqr.me/api/doc/create-qr-code/#param_data
fetch(`http://api.qrserver.com/v1/create-qr-code/?data=${qbcode.value}`)
  .then(data => {
      console.log(data)
      return data.blob();
      //Objects need to be converted to a blob so they can be used as image
      //https://www.youtube.com/watch?v=tc8DU14qX6I&t=356s
  })
  .then(res => {
      console.log(res)
      document.getElementById('qr').src = URL.createObjectURL(res)

      
  })
}

function toPdf(){
    const url = "https://jsonplaceholder.typicode.com/todos";
const options = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
  body: JSON.stringify({
    a: 10,
    b: 20,
  }),
};
fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
}




// let test2 = document.getElementsByTagName('h2')
// test2.innerHtml = "hola"
// let element = document.getElementById('nose');    

// html2pdf(element)




// New Promise-based usage:
// html2pdf().set(opt).from(element).save();

// Old monolithic-style usage:


// html2pdf(element, opt);
// --------------------------- form html

function createform(){
    let createform = document.createElement('form')
    createform.id ='createResume'
    createform.actiom =""
    createform.method = "GET"
    createform.innerHTML = `      <div id="form_Conctact_info">
    <h2>
        contact Information
    </h2>
    <div class="inside_form">
    <div>
    <label for="name">Full name:</label>
    <input id="name" name="name" ></div>
    <div><label for="phone">phone:</label>
    <input id="phone" name="phone" ></div>
    <div><label for="email">email:</label>
    <input id="email" name="email" ></div>
    </div>
    <div class="inside_form">
    <div>
    <label for="site">site:</label>
    <input id="site" name="site" ></div>
    <div>
    <label for="git">github:</label>
    <input id="git" name="git" ></div>
    <div><label for="link">linkin:</label>
    <input id="link" name="link" ></div>
</div>
<div class="inside_form">
    <label for="qbcode">qbcode:</label>
    <input id="qbcode" name="qbcode" >

</div>

</div> 
<div class="form_education">
    <h2>
        Education
    </h2>
    <div class="inside_form">
        <label for="time"> dates1 : </label>
        <input id="time" name="time" >
        <label for="curriculum">curriculum:</label>
        <input id="curriculum" name="curriculum" >
        <label for="school">school:</label>
        <input id="school" name="school" >
        </div>
         
    </div>
    <div class="inside_form">
        <label for="time2">dates2:</label>
        <input id="time2" name="time2" >
        <label for="curriculum2">curriculum:</label>
        <input id="curriculum2" name="curriculum2" >
        <label for="school2">school:</label>
        <input id="school2" name="school2" >
        </div>
         
    </div>
</div>
<div class="form_profile">
    <h2>
        Profile
    </h2>
    <textarea name="profile" id="profile_form" rows="10" cols="30">
        Tell me about you</textarea>
</div>
<div class="form_Experience">
    <h2>
        Experince
    </h2>
    <div class="inside_form">
        <label for="job1date">dates:</label>
        <input id="job1date" name="job1date" >
        <label for="company1">company1:</label>
        <input id="company1" name="company1" >
        <label for="position1">position1:</label>
        <input id="position1" name="position1" >
    </div>
    <textarea name="experience" id="experience_form1" rows="10" cols="30">
        what did you do in that job?</textarea>
   
</div>
<div class="form_Experience">
    <div class="inside_form">
        <label for="job2date">dates:</label>
        <input id="job2date" name="job2date" >
        <label for="company2">company2:</label>
        <input id="company2" name="company2" >
        <label for="position2">position2:</label>
        <input id="position2" name="position2" >
    </div>
    <textarea name="experience" id="experience_form2" rows="10" cols="30">
        what did you do in that job?</textarea>
   
</div>
<div class="form_Experience">
    <div class="inside_form">
        <label for="job3date">dates:</label>
        <input id="job3date" name="job3date" >
        <label for="company3">company3:</label>
        <input id="company3" name="company3" >
        <label for="position3">position3:</label>
        <input id="position3" name="position3" >
    </div>
    <textarea name="experience" id="experience_form3" rows="10" cols="30">
        what did you do in that job?</textarea>
   
</div>
<div class="professional_skills">
    <h2>
        Skills
    </h2>
    <label for="skill1">skill1:</label>
    <input id="skill1" name="skill1">

    <label for="skill2">skill2:</label>
    <input id="skill2" name="skill2">

    <label for="skill3">skill3:</label>
    <input id="skill3" name="skill3">

    <label for="skill4">skill4:</label>
    <input id="skill4" name="skill4">

    
</div>
<div class="professional_skills">
    <label for="skill5">skill5:</label>
    <input id="skill5" name="skill5">

    <label for="skill6">skill6:</label>
    <input id="skill6" name="skill6">

    <label for="skill7">skill7:</label>
    <input id="skill7" name="skill7">

    <label for="skill8">skill8:</label>
    <input id="skill8" name="skill8">

    
</div>

<input type="submit" value="submit" class="button">
`
document.body.appendChild(createform)
}

});