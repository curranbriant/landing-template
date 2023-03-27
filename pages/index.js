import Head from 'next/head'
import { Menu } from '@headlessui/react'
import DropDown from '../components/Menu'
import React, { useEffect } from "react";
import Link from 'next/link'
import Script from 'next/script'
import Image from 'next/image'
import ReactPlayer from "react-player/lazy";





export default function Home() {
  function btnTrigger(e) {
    const btn = document.getElementById('revealContainer');
    btn.classList.toggle('active');
  }
  return (
    <div className="container">
      <Head>
        <title>Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='contain-all'>
        <div>
          <DropDown />
        </div>
        <div className="btn-contain">
          <p className="btn-text" onClick={() => btnTrigger()}>Push this for<strong>&nbsp;Overlay</strong></p>
        </div>
        <div className="text-contain">
          <p><span className="title-span">Introducing a new template for landing pages.</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div id="revealContainer" className="reveal-container">
          <div className="text-contain reveal-text">
            <p>This is an overlay example with a video.  But anything can go here.</p>
          </div>
          <ReactPlayer
            className={"reactPlayer"}
            id="reactPlayer"
            width="50%"
            height="50%"
            url="https://vimeo.com/810690373"
            controls
          />
        </div>
      </main >


      <style jsx>{`

      .reveal-container {
        position: relative;
        width: auto;
        height: 110vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        display: none;

      }
        .title-span {
          font-weight: 600;
          font-size: 2.5vw;
        }

        .contain-all {
          background-color: #fff;
          overflow: hidden;
          display: flex;
          justify-content: flex-start;
          padding-top: 5%;
        }
      .animate-ping {
          animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .menu {
          z-index: 999;
        }
        .video-contain {
          padding: 5% 0;
          width: 70vw;
          margin: 0 auto;
        }
       .text-contain {
          padding: 2% 0 10%;
          font-weight: 400;
          font-style: normal;
          width: 70vw;
          margin: 0 auto;
       }
        .text-contain p {
          font-size: 2vw;
          line-height: 150%;
          font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
          font-style: normal;
          font-weight: 400;
        }
        .reveal-text {
          padding-bottom: 5%;
          text-align: center;
        }
        .hide {
          display: none;
        }
        .active {
          width: 100vw;
          margin: 0 !important;
          border-radius: 0 !important;
          background: #fff;
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
        .btn-contain {
          margin: 0 auto;
          width: 70vw;
          pointer: cursor;
        }
      
        @keyframes fadein {
        from {opacity:0}
        to {opacity:1}
          }
      .menu-container {
          display: flex;
          flex-direction: column;
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

        a {
          color: inherit;
          text-decoration: none;
        }
        .btn-contain:hover {
          text-decoration: underline;
          cursor: pointer;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        // Mobile

        @media (max-width: 1000px) {
          .contain-all {
            height: 100vh;
            display: flex;
            justify-content: center;
          }
          .reveal-container {
            width: auto;
            height: 28vh;
            overflow: hidden;
          }
          .text-contain {
            width: 90vw;
            margin: 0 auto;
            padding-bottom: 22%;
          }
          .text-contain p {
            font-size: 1.5rem;
          }
          .title-span {
            font-size: 2rem;
          }
          .btn-contain {
            width: 90%;
            margin: 0 auto;
          }
          .active {
            min-height: 100vh;
            min-width: 100vw;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          background-color: #fff;
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
