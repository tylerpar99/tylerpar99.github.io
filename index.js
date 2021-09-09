$( document ).ready(function() {
    const container = document.querySelector('.imagecontain');
    const subcontainer = document.querySelector('.sub-container');
    const aboutmeimage = document.querySelector('.image');
    const paragraph = document.querySelector('.paragraph');
    const heading = document.querySelector('.heading');

    container.addEventListener('mouseenter', (e) => {
        subcontainer.style.transition = 'none';
        aboutmeimage.style.transform = 'translateZ(150px)';
    });

    container.addEventListener('mouseleave', (e) => {
        subcontainer.style.transition = 'all 0.5s ease';
        subcontainer.style.transform = `rotateX(0deg) rotateY(0deg)`
        aboutmeimage.style.transform = 'translateZ(0px)';
    });
});

function contactMe() {
    subject = $("#subject").val()
    message = $("#message").val()
    mailFrom = $("#name").val()
    var link = "mailto:parton1999@yahoo.com"
    + "&subject=" + encodeURIComponent(subject + " : " + mailFrom)
    + "&body=" + encodeURIComponent(message);

    window.location.href = link;

    subject = $("#subject").val('')
    message = $("#message").val('')
    mailFrom = $("#name").val('')
};