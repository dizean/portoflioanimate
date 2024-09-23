import React from 'react';
import './css/footer.css'
function Footer (){
    return(
        <>
       <footer class="footer-distributed">

<div class="footer-right">

    <a href="#"><i class="fa fa-facebook"></i></a>
    <a href="#"><i class="fa fa-twitter"></i></a>
    <a href="#"><i class="fa fa-linkedin"></i></a>
    <a href="#"><i class="fa fa-github"></i></a>

</div>

<div class="footer-left">

    <p class="footer-links">
        <a class="link-1" href="#">Home</a>

        <a href="#">About me</a>

        <a href="#">Resume</a>

        <a href="#">Works</a>
    </p>

    <p>Torres Portfolio&copy; 2015</p>
</div>

</footer>
        </>
    )
}
export default Footer;