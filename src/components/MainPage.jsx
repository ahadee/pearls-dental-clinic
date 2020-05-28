import React from 'react'
import '../css/bootstrap.min.css'
import '../css/flexslider.css'
import '../css/jquery.fancybox.css'
import '../css/main.css'
import '../css/responsive.css'
import '../css/font-icon.css'
import '../css/animate.min.css'
import Header from './Header'
import Intro from './Intro'
import Services from './Services'
import Why from './Why'
import ContentVideo from './ContentVideo'
import Gallery from './Gallery'
import Teams from './Teams'
import Testimonial from './Testimonial'
import Contact from './Contact'
import Footer from './Footer'

export default function MainPage() {
    return (
        <div>
            <Header />
            <Intro />
            <Services />
            <Why />
            <ContentVideo />
            <Gallery />
            <Teams />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    )
}
