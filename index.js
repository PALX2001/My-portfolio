var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function Opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");

        }



var sidemenu = document.getElementById("sidemenu");
function openMenu(){
    sidemenu.style.right = "0";
}
function closeMenu(){
    sidemenu.style.right = "-250px";
}





  const scriptURL = 'https://script.google.com/macros/s/AKfycbxy6i1JN2BpFK3C0FQj0fpFuEBjCg-jHeGB8-xa1nZXDF0B5tn54rOnI6Yav-zd8B8/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML = "Message sent"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })
