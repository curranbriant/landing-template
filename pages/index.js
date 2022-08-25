import Head from 'next/head'
import { Menu } from '@headlessui/react'
import DropDown from '../components/Menu'
import Form from '../components/Mailchimp'
import React, { useEffect } from "react";
import Link from 'next/link'


export default function Home() {
  function btnTrigger(e) {
    const btn = document.getElementById('btn-trigger');
    const contain = document.getElementById('btn-contain');
    btn.classList.toggle('active');
    contain.classList.toggle('active-contain');
  }
  return (
    <div className="container">
      <Head>
        <title>Entropy</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/nyg7ghy.css" />
      </Head>

      <main>
        <div>
          <DropDown />
        </div>
        <div id="btn-contain" className="btn-contain">
          <p onClick={() => btnTrigger()} className="powered-by">Powered by<strong>&nbsp;Entropy</strong></p>
        </div>

        <div className="form-reveal" id="btn-trigger">
          <div className="form-contain">
            <h1 className="hello">Entropy is a zeitgeist company.</h1>
            <p className="reveal-paragraph">
              Entropy is a new age media company that documents the zeitgeist. Through collaboration, we design, develop, and launch ideas with visionary thinkers, strategists, innovators, technicians, technologists, and artists
            </p>

            <div className='beta-form'>
              <h1 className="contact">inquires: office@ennntropy.com</h1>
            </div>
          </div>

        </div>
      </main >

      <style jsx>{`
      @import url("https://use.typekit.net/nyg7ghy.css");
        .form button {
          background-color: #fafafa;
        }
      .animate-ping {
          animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .menu {
          z-index: 999;
        }
        .beta-form {
          color: #fff;
          padding: 5% 0;
          font-weight: 400;
          font-style: normal;
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
        .form-contain {
          width: 70vw;
          margin: 0 auto;
          padding-top: 10%;
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
          background: rgb(23,0,255);
          background: radial-gradient(circle, rgba(23,0,255,1) 0%, rgba(255,0,191,1) 100%);
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
        .btn-contain {
          margin: auto;
          width: 25%;
        }
        .MailchimpStyle button {
          clear: left;
          color: black;
          background-color: yellow;
          margin: 2px;
        }
        .MailchimpStyle input {
        }
        @keyframes fadein {
        from {opacity:0}
      to {opacity:1}
    }
       
        .btn-contain:hover {
          cursor: pointer;
          filter: brightness(0.8);
        }
      .menu-container {
          display: flex;
          flex-direction: column;
        }
        .powered-by {
          background-color: #1700ff;
          align-content: center;
          margin: auto;
          display: flex;
          justify-content: center;
          padding: 7%;
          border-radius: 5px;
          font-size: 1.5rem;
          color: #fff;
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
        .description {
        }

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
       button, [type='submit'] {
          background-color: yellow !important;
       }
       .logo {
         width: 1.5rem;
         height: 1.5rem;
         border-radius: 100%;
         background-color: #1700ff;
         color: #1700ff;
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
          .beta-form {
            padding: 10% 0;
          }
          .contact {
            font-size: 6vw;
          }

        .MailchimpStyle input {

        }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
        .MailchimpStyle  {
                width: 100%;
                padding-top: 5%;
            }
        .MailchimpStyle button {
                color: #fff;
                padding: 3%;
                width: 50%;
                border: 1px solid  #fff;
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
            }
            .MailchimpStyle button:hover {
              background-color: #ff00bf;
              border: 1px solid  #ff00bf;
            }
            @keyframes pulse {
              0%, 100% {
                opacity: 1;
              }
              50% {
                opacity: .5;
              }
            }
            .MailchimpStyle input {
                padding: 3%;
                width: 50%;
                background-color: transparent;
                color: #000;
                border: 1px solid #fff;
                border-right: none;
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
            }
            .MailchimpStyle .msg-alert {
              font-size: 4vw;
            }
            .MailchimpStyle .msg-alert  p{
              color: #fff !important;
              text-align: center;
            }
            .dot {
              height: .8rem;
              width: .8rem;
              background-color: #000;
              border-radius: 50%;
              margin-right: 3%;
            }
            .bg-en-blue-500 {
            background-color: #1700ff;
            }
      `}</style>
    </div >
  )
}
