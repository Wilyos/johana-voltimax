let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let contacto = document.querySelector('#btn-contacto');
let sobreMi = document.querySelector('#btn-sobreMi')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


contacto.onclick = (e) => {
    e.preventDefault();
    const downloadLink = document.querySelector('#downloadContact');
    if (downloadLink) {
        downloadLink.click();
    }
};


sobreMi.onclick = () => {
    document.getElementById("solucion").scrollIntoView({
        behavior:"smooth"
    });
}

const vcardData = `
BEGIN:VCARD
VERSION:3.0
FN:Johanna Yepes Garcia
N:Yepes;Johanna;;;
TEL;TYPE=work:+573042485905
EMAIL:comercial@voltimax.com.co
URL:https://voltimax.com.co/
URL:https://www.facebook.com/profile.php?id=61556179106912&locale=es_LA
URL:https://www.instagram.com/voltimaxpro/
END:VCARD
`.trim();



  const blob = new Blob([vcardData], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);

  const downloadLink = document.getElementById('downloadContact');
  downloadLink.href = url;