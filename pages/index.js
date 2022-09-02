import Head from 'next/head'
import { Menu } from '@headlessui/react'
import DropDown from '../components/Menu'
import Form from '../components/Mailchimp'
import React, { useEffect } from "react";
import Link from 'next/link'
import Script from 'next/script'




export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Need</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/nyg7ghy.css" />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-85D5EB43JJ" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-85D5EB43JJ');
        `}
      </Script>

      <main>
        <div>
          <DropDown />
        </div>
        <div id="btn-contain" className="need-contain">
          <p className="need-main">need</p>
          <div className='beta-form'>
            <Form />
          </div>

        </div>

      </main >

      <style jsx>{`
    @import url("https://use.typekit.net/nyg7ghy.css");

@font-face {
  font-family: "TA Modern";
  src: url('/fonts/modernTimes.otf');
  font-weight: normal;
  font-style: normal;
}

 .form button {
     background-color: #fafafa;
 }

 .animate-ping {
     animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
 }
 .container {
  background-color: #ecead1
 }

 .box {
     width: 100vw;
     height: 100vw;
     border-radius: 50%;
     background: orange;
 }

 .img-1 {
     object-fit: cover;
     width: 100%;
     height: 100%;
 }
.form-contain {
  display: flex;
  justify-content: center;
  padding-top: 10%;
  align-items: center;
  margin: 0 auto;
}
 .form-contain .MailchimpStyle {
     display: none !important; 
 }
 form.MailchimpStyle {
  display: none;
 }

 .need-main {
     text-align: center;
     display: flex;
     justify-content: center;
     font-size: 3vw;
     font-family: TA Modern;
     font-weight: 500
     
 }

 .need-contain {
     width: 100vw;
     height: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
 }

 .menu {
     z-index: 999;
 }

 .beta-form {
     color: #252525;
     font-weight: 400;
     font-style: normal;
     position: absolute;
     bottom: 0;
     padding: 0;
 }
 .MailchimpStyle button {
          clear: left;
          color: black;
          margin: 2px;
        }
        .MailchimpStyle input {
        }

 .contact {
     font-size: 2vw;
 }

 .beta-h3 {
     font-size: 75px;
     padding: 5% 0 0;
 }

 .beta-p {
     font-size: 25px;
     padding-bottom: 5%;
 }

 .form-reveal {

     display: none;
     color: #fff;
     flex-direction: column;
 }

 .hello {
     font-size: 50px;
     color: #fff;
     line-height: 90%;
     font-family: roc-grotesk-wide;
     font-style: normal;
     font-weight: 600;
     animation: pulse 3s cubic-bezier(0.7, .3, 0.6, 1) infinite;
 }


 .reveal-paragraph {
     color: #fff;
     padding-top: 10%;
     font-size: 50px;

 }

 .active {
     width: 100vw;
     margin: 0 !important;
     border-radius: 0 !important;
     background: rgb(23, 0, 255);
     background: radial-gradient(circle, rgba(23, 0, 255, 1) 0%, rgba(78, 71, 150, 1) 50%, rgba(23, 0, 255, 1) 100%);
     color: #000;
     display: flex;
     position: absolute;
     top: 0;
     min-height: 100vh;
     animation: fadeInDown 500ms ease-in-out;

 }

 @keyframes fadeInDown {
     0% {
         opacity: 0;
         transform: translateY(-40px);
     }

     100% {
         opacity: 1;
         transform: translateY(0);
     }
 }

 .active-contain {
     display: none;
 }


 .need-main {
     text-align: center;
     display: flex;
     justify-content: center;
 }

 .need-contain {
     margin: auto;
     width: 25%;
 }

 .btn-contain {
     margin: auto;
     width: 25%;
 }
#mc-form {
  display: none;
}

 @keyframes fadein {
     from {
         opacity: 0
     }

     to {
         opacity: 1
     }
 }

 .btn-contain:hover {}

 .menu-container {
     display: flex;
     flex-direction: column;
 }

 .powered-by {
     align-content: center;
     margin: auto;
     display: flex;
     justify-content: center;
     padding: 7%;
     border-radius: 5px;
     font-size: 1.5rem;
     color: #000;
     align-items: center;
     transition: all .2s ease-in-out;
 }

 .container {
     min-height: 100vh;
     display: flex;
     flex-direction: column;
     color: #000;
     max-width: 100vw;
 }

 main {
     flex: 1;
     display: flex;
     flex-direction: column;
     justify-content: center;
     width: 100%;
 }

 footer {
     width: 100%;
     height: 100px;
     border-top: 1px solid #eaeaea;
     display: flex;
     justify-content: center;
     align-items: center;
 }

 footer img {
     margin-left: 0.5rem;
 }

 footer a {
     display: flex;
     justify-content: center;
     align-items: center;
 }

 a {
     color: inherit;
     text-decoration: none;
 }

 .title a {
     color: #0070f3;
     text-decoration: none;
 }

 .title a:hover,
 .title a:focus,
 .title a:active {
     text-decoration: underline;
 }

 .title {
     margin: 0;
     line-height: 1.15;
     font-size: 15rem;
 }

 .title,
 .description {}

 .description {
     line-height: 1.5;
     font-size: 1.5rem;
 }

 .nav {
     position: absolute;
     top: 0;
     width: 90vw;
     display: flex;
     justify-content: space-between;
 }

 code {
     background: #fafafa;
     border-radius: 5px;
     padding: 0.75rem;
     font-size: 1.1rem;
     font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
         DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
 }


 .grid {
     display: flex;
     flex-direction: column;
     justify-content: flex-start;
     flex-wrap: wrap;

     max-width: 800px;
     margin-top: 3rem;
 }

 .card {
     margin: 1rem;
     flex-basis: 45%;
     padding: 1.5rem;
     text-align: left;
     color: inherit;
     text-decoration: none;
     border-radius: 10px;
     transition: color 0.15s ease, border-color 0.15s ease;
 }

 .card:hover,
 .card:focus,
 .card:active {
     color: #0070f3;
     border-color: #0070f3;
 }

 .card h3 {
     margin: 0 0 1rem 0;
     font-size: 5rem;
 }

 .card-header {
     font-size: 5rem;
 }

 .card p {
     margin: 0;
     font-size: 1.25rem;
     line-height: 1.5;
 }

 .MailchimpStyle {
     color: #fff;
 }

 button,
 [type='submit'] {
     background-color: yellow !important;
 }

 .logo {
     width: 1.5rem;
     height: 1.5rem;
     border-radius: 100%;
     color: #000;
     position: absolute;
     left: 4%;
     top: 2.5%;
     z-index: 999
 }

 @media (max-width: 1000px) {
     .grid {
         width: 100%;
         flex-direction: column;
     }

     .btn-contain {
         width: 90%;
     }

     .logo {
         left: 5%;
         top: 3%;
     }

     .form-contain {
         padding-top: 30%;
         width: 90vw;
     }

     .reveal-paragraph {
         font-size: 25px;
     }

     .active {
         min-height: 100vh;
     }


     .contact {
         font-size: 6vw;
     }

     .MailchimpStyle input {}
      .need-main {
        font-size: 15vw;
      }
      
 }
      `}</style>
    </div >
  )
}
