import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";


import { IService, ILink } from "../scripts/types";
import { DEFAULT_PLAN_COLUMNS_ARRAY, DEFAULT_PLAN_KEYS_ARRAY } from "../scripts/constants";
import { getStrategyResult } from "../scripts/helpers";
// const TELEGRAM_WRAPPER = require('./telegram.js');
// let telegramWraper = new TELEGRAM_WRAPPER({ddcabotParent: dcaBot})

async function test() {
    console.log("test");
    let result = getBotUpdates();
}

const getBotUpdates = () =>
    fetch(
        "https://api.telegram.org/bot5389030729:AAF9fnNmzr2wf-B0PMgax0yDowu0DUILZYQ/getUpdates"
    ).then((response) => {
        console.log("response", response);
        return response.json();
    });

    // const getUserTelegramId = async (uniqueString) => {
    //   const { result } = await getBotUpdates();

    //   const messageUpdates = result.filter(
    //     ({ message }) => message?.text !== undefined
    //   );

    //   const userUpdate = messageUpdates.find(
    //     ({ message }) => message.text === `/start ${uniqueString}`
    //   );

    //   return userUpdate.message.from.id;
    // };


function Gallery({
    links, services, example,
}: { links: ILink[], services: IService[], example:any }) {
// new TELEGRAM_WRAPPER({});
    useEffect(()=>{
        console.log(services)
    },[])
    return (<>
    <div className="body pos-rel flex-col flex-justify-start">
        <div className="mt-100 Q_md_x"></div>
        <div className="tx-white my-4 flex">
            <div className="flex-align-self-center tx-lgx">
                CSSCSS
            </div>
            <div className="pr-1 bg-w-10 mx-8">
            </div>
            <div className="flex-col flex-align-start">
                <div className="flex-col tx-smd">Utility First CSS</div>
                <div className="flex-col tx-lgx">Framework</div>
            </div>
        </div>
        <div className="bg-glass-6 ma-2 bord-r-10 tx-white py-8 z-999 fade-in px-8 w-max-700px flex-col"
            style={{
                border:"1px solid #777",
                boxShadow:"0 10px 50px -20px #00000077"
            }}
        >
            <div className="flex-center Q_xs_sm_flex-col flex-justify-between w-100">
                
                <div className=" huerotate-1 pos-rel scale-200">
                    <div className="spin-5 flex tx-green " style={{filter:"brightness(200%) saturate(250%)"}}>
                        
                        <div className="spin-10 paci-50 flex tx-red px-1">
                            .
                            <div className="tx-lgtx-bold-8 spin-2 paci-50 px-2 tx-blue">. <i className="paci-10 tx-green">.</i> .</div>
                            .
                        </div>
                        .
                    </div>
                    <div className=" blur-4"  >
                        <div className=" huerotate-1  pos-abs scale-150"  >
                            <div className="spin-4 flex tx-green " style={{filter:"brightness(200%) saturate(250%) hue-rotate(180deg) "}}> {/* blur is wip */}
                                .
                                <div className="spin-60 paci-50 flex tx-red px-1">
                                    .
                                    <div className="tx-lgtx-bold-8 spin-5 paci-50 px-2 tx-blue">. <i className="paci-10 tx-green">.</i> .</div>
                                    .
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className=" huerotate-1 opaci-25 pos-abs scale-150"  >
                        <div className="spin-3 flex tx-green " style={{filter:"brightness(200%) saturate(250%) hue-rotate(180deg) "}}> {/* blur is wip */}
                            .
                            <div className="spin-60 paci-50 flex tx-red px-1">
                                .
                                <div className="tx-lgtx-bold-8 spin-5 paci-50 px-2 tx-blue">. <i className="paci-10 tx-green">.</i> .</div>
                                .
                            </div>
                            
                        </div>
                    </div>
                </div>
                {/* <div className="inner-body">
                    test
                </div> */}
                <h1 className="tx-xl  flex-col flex-align-start mr-8 flex-1" >
                    <span className="tx-bold-2 mb-2">Build fast, <br /> use CSS.</span>
                    {/* <span className="tx-bold-3 mb-4">DCA</span> */}
                </h1>
                <a className="duno-btn tx-white py-4 px-8 bord-r-50 tx-lg" target="_blank"
                    href="https://3dunoabraham.github.io/csscss/"
                    style={{boxShadow:"0px 0px 25px #CF589433"}}
                >
                    View Demo
                </a>
            </div>

            <span className="tx-sm tx-bold-5 ma-2 opaci-50 tx-ls- tx-center">
                A consistent & intuitive styling framework fully based on CSS.
            </span>
            {/* <hr className="opaci-10 w-50 mt-4 mb-8" /> */}

            <hr className="opaci-10 w-50  mt-100" />
            <div className="flex-col  ">
                <a href="https://unpkg.com/csscss@latest/index.css" target="_blank" className="tx-lx tx-bold-3 tx-white opaci-chov--25 tx-bold tx-ls-3 py-6 tx-center">
                    Download
                </a>
            </div>
            {/* <hr className="opaci-10 w-50 mt-4 mb-8" /> */}
            <a href="https://www.npmjs.com/package/csscss" target="_blank" className="tx-l tx-bold-3 tx-white opaci-chov--25 opaci-75 tx-ls-1 py-2 nodeco tx-center">
                Download from NPM
            </a>
            <a href="https://tresd1.gitbook.io/csscss/" target="_blank" className="tx-l tx-bold-3 tx-white opaci-chov--25 opaci-75 tx-ls-1 py-2 nodeco tx-center">
                Docs
            </a>
        </div>

        {/* Images will go here */}
        <div className="flex-col flex-justify-center huerotate-1  tx-white" >
            {/* <div className="w-400px  ">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" >
                      <path  fill="#CF5894"
                          d={
"M44.8,-72.3C56.8,-70.6,64.5,-56.1,70.7,-41.9C76.9,-27.8,81.7,-13.9,81.3,"+
"-0.2C80.9,13.4,75.3,26.9,64.3,32.7C53.3,38.5,36.8,36.8,25.1,41.5C13.5,46.2,6.8,57.4,-2.7,"+
"62C-12.1,66.6,-24.2,64.7,-35.6,59.9C-47,55,-57.7,47.3,-58.5,36.8C-59.3,26.4,-50.2,13.2,-50.3,-0.1C-50.4,-13.3,-59.7,-26.6,-58,"+
"-35.4C-56.2,-44.2,-43.4,-48.6,-31.9,-50.6C-20.4,-52.5,-10.2,-52.1,3.1,-57.5C16.4,-62.8,32.7,-74,44.8,-72.3Z"
                          }
                          transform="translate(100 100)"
                          />
                </svg>
            </div> */}






            <div className="mt-200"></div>


            {/* <hr className="opaci-10 w-100 mt-4 mb-8" /> */}
            {/* |{JSON.stringify(example)}| */}
            <h1 className="  opaci-25  flex-col mb-" onClick={() => { test(); }}>
                <span className="tx-xxxl">Utilities</span>
                {/* <span className="tx-xxxl tx-ls-8">API</span> */}
            </h1>

{/*             
<div className=" flex-col gap-2 my-8 ">
    <a target="_blank" href="https://gamearteesan.gitbook.io/arteesan/styles/core-css"
        className="opaci-chov--50 tx-lg pa-2 tx-white py-2">
        Creational Classes
    </a>
    <a target="_blank" href="https://github.com/3dunoabraham/csscss"
        className="opaci-chov--50 tx-lg pa-2 tx-white py-2">
        Structural Classes
    </a>
    <a target="_blank" href="https://www.npmjs.com/package/csscss"
        className="opaci-chov--50 tx-lg pa-2 tx-white py-2">
        Behavioural Classes
    </a>
</div> */}
            <div className=" w-max-1080px pos-rel flex-col ">

                <div className="flex-row">
                    <div className="flex-col">
                        <div className="flex tx-lgx mt-8 mb-2 opaci-10 tx-ls-5">CREATE</div>
                        <div className="flex-wrap gap-3">
                            <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">POSITION</button>
                            <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">SIZE</button>
                            <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">INDEX</button>
                            <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">SPACING</button>
                        </div>
                        <div className="flex-wrap gap-3 mt-8">
                            <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">DISPLAY</button>
                        </div>
                        <div className="flex tx-lgx mt-8 mb-2 opaci-10 tx-ls-5">UPDATE</div>
                        <div className="flex-wrap gap-3">
                            <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">TEXT</button>
                            <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">BACKGROUND</button>
                            <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">FILTER</button>
                        </div>
                        <div className="flex-wrap gap-3 mt-8">
                            <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">OPACITY</button>
                        </div>
                        <div className="flex tx-lgx mt-8 mb-2 opaci-10 tx-ls-5">BEHAVE</div>
                        <div className="flex-wrap gap-3">
                            <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">CURSOR</button>
                            <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">MEDIA QUERY</button>
                            <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">ANIMATION</button>
                            <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">EXTRA</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>

        <div className="mt-100 pt-100"></div>


        {/* <div className="flex-col gap-3 mt-4 pb-200 ">
            <div className="tx-xl tx-white tx-ls-2 opaci-chov--10 ">
                <Link href="/dashboard?token=btc" target="_blank">
                    <a className="tx-white">DASHBOARD</a>
                </Link>
            </div>
            <div className="tx-xl tx-ls-5 tx-white tx-ls-2 opaci-chov--10 mt-3">
                <Link href="/faq" target="_blank">
                    <a className="tx-white nodeco">FAQ</a>
                </Link>
            </div>
            <div className="tx-lgx tx-white tx-ls-2 opaci-chov--10 ">
                <Link href="/contact" target="_blank">
                    <a className="tx-white nodeco">Contact</a>
                </Link>
            </div>
            <div className="tx-lgx tx-white tx-ls-2 opaci-chov--10 ">
                <Link href="/contact" target="_blank">
                    <a className="tx-white nodeco">Blog</a>
                </Link>
            </div>
        </div> */}

    </div>





    <div className="second-body pos-rel flex-col flex-justify-start tx-white py-100">
        
        <div className=""></div>
            
            <h1 className="  opaci-25  flex-col mb-" onClick={() => { test(); }}>
                <span className="tx-xxxl">CheatSheet</span>
            </h1>
            <div className=" w-max-1080px pos-rel flex-col ">

                <div className="flex-row">
                        <div className="flex-col">
                            <div className="flex tx-lgx mt-8 mb-2 opaci-10 tx-ls-5">CREATE</div>
                            <div className="flex-wrap gap-3">
                                <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">
                                    POSITION
                                </button>
                                <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">
                                    SIZE
                                </button>
                                <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">
                                    INDEX
                                </button>
                                <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">
                                    SPACING
                                </button>
                            </div>
                            <div className="flex-wrap gap-3 mt-8">
                                <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">
                                    DISPLAY
                                </button>
                            </div>
                            <div className="flex tx-lgx mt-8 mb-2 opaci-10 tx-ls-5">
                                UPDATE
                            </div>
                            <div className="flex-wrap gap-3">
                                <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">
                                    TEXT
                                </button>
                                <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">
                                    BACKGROUND
                                </button>
                                <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">
                                    FILTER
                                </button>
                            </div>
                            <div className="flex-wrap gap-3 mt-8">
                                <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">
                                    OPACITY
                                </button>
                            </div>
                            <div className="flex tx-lgx mt-8 mb-2 opaci-10 tx-ls-5">
                                BEHAVE
                            </div>
                            <div className="flex-wrap gap-3">
                                <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">
                                    CURSOR
                                </button>
                                <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">
                                    MEDIA QUERY
                                </button>
                                <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">
                                    ANIMATION
                                </button>
                                <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">
                                    EXTRA
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            
            <div className=" flex gap-2 mt-100 ">
                <a target="_blank" href="https://thrue.gitbook.io/thrue/"
                    className="opaci-chov--50 pa-2 tx-white py-8">
                    API DOCS
                </a>
                <a target="_blank" href="https://github.com/3dunoabraham/thrue"
                    className="opaci-chov--50 pa-2 tx-white py-8">
                    GITHUB
                </a>
                <a target="_blank" href="https://thrue-beta.vercel.app/"
                    className="opaci-chov--50 pa-2 tx-white py-8">
                    DEMO
                </a>
            </div>
    </div>


    
    <div className="body pos-rel flex-col flex-justify-start pt-8 noverflow">
        
        <img style={{transform:"translateY(150px)"}} src="/img/ibis.png"/>
        
    </div>
    </>)
}

function HrH() {
    return (
        <hr/>
    )
}
function Service({ service }: { service: IService }) {
    const theArray = []
    return (
        <div className="text-bold-4 tx-lg  bord-r-10 noverflow block flex-col mx-1">
            <div className="flex-1 mt-1 px-8 hov-bord-1-w box-shadow-hov-5 mr-1 bg-w-10 bg-w-opaci-10 opaci-chov--50 pb-2 pt-4 bord-r-8">
                {/*<div>domain:</div>*/}
                <div>{service.token}</div>
            </div>
            <div className="flex-1 mt-1 px-8  box-shadow-hov-5 mr-1 bg-w-opaci-10 opaci-chov--50 pb-2 pt-4 bord-r-8">
                <div>{service.timeframe}</div>
            </div>
            <div className="flex-1 mt-1 px-8  box-shadow-hov-5 mr-1 bg-w-opaci-10 opaci-chov--50 pb-2 pt-4 bord-r-8">
                <div>{service.min}</div>
            </div>
            <div className="flex-1 mt-1 px-8  box-shadow-hov-5 mr-1 bg-w-opaci-10 opaci-chov--50 pb-2 pt-4 bord-r-8">
                <div>{service.max}</div>
            </div>
            <div className="flex-1 mt-1 px-8  box-shadow-hov-5 mr-1 bg-w-opaci-10 opaci-chov--50 pb-2 pt-4 bord-r-8">
                <div>{service.minMedian}</div>
            </div>
            <div className="flex-1 mt-1 px-8  box-shadow-hov-5 mr-1 bg-w-opaci-10 opaci-chov--50 pb-2 pt-4 bord-r-8">
                <div>{service.maxMedian}</div>
            </div>
            <div className="flex-1 mt-1 px-8  box-shadow-hov-5 mr-1 bg-w-opaci-10 opaci-chov--50 pb-2 pt-4 bord-r-8">
                <div>{service.ceil}</div>
            </div>
            <div className="flex-1 mt-1 px-8  box-shadow-hov-5 mr-1 bg-w-opaci-10 opaci-chov--50 pb-2 pt-4 bord-r-8">
                <div>{service.floor}</div>
            </div>
            <div className="flex-1 mt-1 px-8 hov-bord-1-w box-shadow-hov-5 mr-1 bg-w-10 bg-w-opaci-10 opaci-chov--50 pb-2 pt-4 bord-r-8">
                {/*<div>domain:</div>*/}
                <div>{getStrategyResult(service, 0)}</div>
            </div>
        </div>
    )
}




function Image2() {
    return <i>Text</i>;
}
function ContactLink({ link }: { link: ILink }) {
    return (
    <div className="flex-center opaci-75">
        <a
            href={link.href}
            className="text-bold-4 tx-lg py-2 px-4 block opaci-chov--50 tx-primary"
            target="_blank"
        >
            {link.name}
        </a>
    </div>
    )
}

export default Gallery;

export const getStaticProps = async () => {
    // const example = await import('./api/example.json');
    // const supabaseAdmin = createClient(
    //     process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    //     process.env.SUPABASE_SERVICE_ROLE_KEY || ""
    // );
    // let links = (await supabaseAdmin.from("links").select("*").order("id")).data || []
    // let services = (await supabaseAdmin.from("strats").select("*").order("id")).data || []

    

    return {
        props: {
            // links: links,
            // services: services,
            links: [],
            services: [],
            example: {},
        },
    };
};
