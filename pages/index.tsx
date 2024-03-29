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
            <img width={40} src="/img/orb.png" className="pa-2"
                style={{filter:"saturate(0.75)"}}
            />
            <div className="flex-align-self-center tx-lgx">
                CSSCSS
            </div>
            <div className="pr-1 bg-w-10 mx-5">
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
                <a className="nodeco duno-btn tx-white py-4 px-8 bord-r-50 tx-lg opaci-chov--75" target="_blank"
                    href="https://3dunoabraham.github.io/csscss/"
                    style={{boxShadow:"0px 0px 25px #CF589433"}}
                >
                    View Demo <small className="tx-sm opaci-50">(Github)</small>
                </a>
            </div>
            {/* <hr className="opaci-10 w-50 mt-4 mb-8" /> */}

            <span className="tx-sm tx-bold-5 ma-2 opaci-50 tx-ls- tx-center">
                A consistent & intuitive styling framework fully based on CSS.
            </span>


            <br className="mt-8" />

            <a href="/chart/4h?token=btc" 
                className="tx-l tx-bold-3 tx-white opaci-chov--50 tx-bold-6  py-2 tx-center tx-lx px-3 box-shadow-2-b bord-r-5 bg-w-10 nodeco"
                style={{color:"#80E3B9"}}
            >
                Enter Dashboard Demo
            </a>
            

            <hr className="opaci-10 w-50  mt-4" />

            
            <div className="flex-col  ">
                <a href="https://unpkg.com/csscss@latest/index.css" target="_blank" className="tx-lx tx-bold-3 tx-white opaci-chov--25 tx-bold tx-ls-3 py-6 tx-center">
                    Download
                </a>
            </div>
            {/* <hr className="opaci-10 w-50 mt-4 mb-8" /> */}
            <a href="https://www.npmjs.com/package/csscss" target="_blank" className="opaci-50 tx-l tx-bold-3 tx-white opaci-chov--25 tx-ls-1 py-1 pt-2 nodeco tx-center">
                Download from NPM
            </a>
            <a href="https://github.com/3dunoabraham/csscss" target="_blank" className="tx-l tx-bold-3 tx-white opaci-chov--25 opaci-75 tx-ls-1 py-1 pt-2 nodeco tx-center">
                Github Repository
            </a>
            <a href="https://3duno.gitbook.io/csscss" target="_blank" className="tx-l tx-bold-3 tx-white opaci-chov--25 tx-bold-5 tx-ls-1 py-1 pt-2 nodeco tx-center">
                Documentation
            </a>
        </div>
        
        <div className="pos-abs bottom-0 z-1000 translate-y-50" style={{left:"0"}}  >
            <div className="flex-col tx-xxxl tx-white " >
                {/* <div className="shake-3">
                    <div className="pin-60">|</div>
                </div>
                <div className="shake-5">
                    <div className="pin-120">|</div>
                </div>
                <div className="shake-4">
                    <div className="pin-10">|</div>
                </div>
                <div className="shake-3">
                    <div className="pin-6">|</div>
                </div>
                <div className="shake-2">
                    <div className="pin-4">|</div>
                </div>
                <div className="shake-5">
                    <div className="pin-20">|</div>
                </div> */}
                {/* <div className="shake-1">
                    |
                </div> */}
                {/* <div className="bg-b-30 px-8 pl-100 py-2 blur-5 bord-r-100p translate-y--100  bottom-0 pos-abs"></div> */}
                <img width={150} src="/img/ibis2.png" className="pos-rel translate-x--25"/>
                {/* <img width={300} src="/img/ibis3.png"/>
                 */}
                 <div className="flex pl-1 opaci-75"> 
                    <a className="ml- duno-btn bord-r-50 tx-white py-2 px-8  tx-lg opaci-chov--75" target="_blank"
                        href="https://3duno.gitbook.io/csscss/"
                        style={{boxShadow:"0px 0px 25px #CF589433", filter:"hue-rotate(135deg)"}}
                    >
                        Docs
                    </a>    
                </div>
                 
            </div>
        </div>


        {/* Images will go here */}
        <div className="flex-col flex-justify-center huerotate-1  tx-white " >
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
                <span className="tx-xxxl tx-ls-8">API</span>
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

                <div className="flex-wrap gap-8 pa-4">
                    <div className="flex-col">
                        <div className="flex tx-lgx mt-4 mb-2 opaci-10 tx-ls-5">CREATE</div>
                        <div className="flex-wrap gap-3">
                            <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">POSITION</button>
                            <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">SIZE</button>
                            <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">INDEX</button>
                        </div>
                    </div>
                    <div className="flex-col">
                        <div className="flex tx-lgx mt-4 mb-2 opaci-10 tx-ls-5">STRUCTURE</div>
                        <div className="flex-wrap gap-3">
                            <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">SPACING</button>
                            <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">DISPLAY</button>
                            <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">TEXT</button>
                        </div>
                    </div>
                    <div className="flex-col">
                        <div className="flex tx-lgx mt-4 mb-2 opaci-10 tx-ls-5">UPDATE</div>
                        <div className="flex-wrap gap-3">
                            <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">BACKGROUND</button>
                            <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">OPACITY</button>
                            <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">FILTER</button>
                        </div>
                    </div>
                    <div className="flex-col">
                        <div className="flex tx-lgx mt-4 mb-2 opaci-10 tx-ls-5">BEHAVE</div>
                        <div className="flex-wrap gap-3">
                            <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">CURSOR</button>
                            <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">MEDIA QUERY</button>
                            <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">ANIMATION</button>
                            <button className="tx-white flex bg-w-10 px-3 py-2 opaci-chov--50 bord-r-8">EXTRA</button>
                        </div>
                    </div>
                </div>
                <div className="flex-wrap gap-3 my-8"></div>
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
        
        <div className="pt-8"></div>
            
            <h1 className="  opaci-25  flex-col mb-" onClick={() => { test(); }}>
                <span className="tx-xxxl">Cheat <br /> Sheet</span>
            </h1>
            <div className=" w-max-1080px pos-rel flex-col ">

                <div className="flex-row py-8 mb-8">
                        <div className="flex-col pa-4">
                            <div className="flex tx-lgx mt-8 mb-2 opaci-10 tx-ls-5">CREATE</div>
                            <div className="flex-wrap gap-3">
                                <button className="tx-white bg-w-10 bord-r-8 flex-wrap gap-2">
                                    <div className="pa-2">.pos-rel</div>
                                    <div className="pa-2">.pos-fix</div>
                                    <div className="pa-2">.top-0</div>
                                    <div className="pa-2">.left-50p</div>
                                </button>
                                <button className="tx-white bg-w-10 bord-r-8 flex-wrap gap-2">
                                    <div className="pa-2">.w-50 h-min-100vh</div>
                                    <div className="pa-2">.h-80px</div>
                                    <div className="pa-2">.w-max-200px</div>
                                </button>
                                <button className="tx-white bg-w-10 bord-r-8 flex-wrap gap-2">
                                    <div className="pa-2">.z-10</div>
                                    <div className="pa-2">.z-100</div>
                                    <div className="pa-2">.z--1</div>
                                </button>
                            </div>
                            <div className="flex tx-lgx mt-8 mb-2 opaci-10 tx-ls-5">
                                STRUCTURE
                            </div>
                            <div className="flex-wrap gap-3 mt-8">
                                <button className="tx-white bg-w-10 bord-r-8 flex-wrap gap-2">
                                    <div className="pa-2">.pa-0</div>
                                    <div className="pa-2">.px-8</div>
                                    <div className="pa-2">.Q_xs_px-2</div>
                                    <div className="pa-2">.my-100 </div>
                                </button>
                                <button className="tx-white bg-w-10 bord-r-8 flex-wrap gap-2">
                                    <div className="pa-2">.block</div>
                                    <div className="pa-2">.flex</div>
                                    <div className="pa-2">.hidden</div>
                                </button>
                                <button className="tx-white bg-w-10 bord-r-8 flex-wrap gap-2">
                                    <div className="pa-2">.tx-sm</div>
                                    <div className="pa-2">.tx-lg</div>
                                    <div className="pa-2">.tx-lgx</div>
                                    <div className="pa-2">.tx-xxxl</div>
                                    <div className="pa-2">.tx-ls-3</div>
                                    <div className="pa-2">.tx-bold-6</div>
                                    <div className="pa-2">.tx-sans</div>
                                    <div className="pa-2">.nodeco</div>
                                    <div className="pa-2">.tx-shadow-3</div>
                                    <div className="pa-2">.tx-white</div>
                                </button>
                            </div>
                            <div className="flex tx-lgx mt-8 mb-2 opaci-10 tx-ls-5">
                                UPDATE
                            </div>
                            <div className="flex-wrap gap-3">
                                <button className="tx-white bg-w-10 bord-r-8 flex-wrap gap-2">
                                    <div className="pa-2">._ddg</div>
                                    <div className="pa-2">.bg-b-50</div>
                                    <div className="pa-2">.bg-green-50</div>
                                    <div className="pa-2">.bg-glass-1</div>
                                </button>
                                <button className="tx-white bg-w-10 bord-r-8 flex-wrap gap-2">
                                    <div className="pa-2">.invert</div>
                                    <div className="pa-2">.blur-1</div>
                                    <div className="pa-2">.scale-50</div>
                                    <div className="pa-2">.scale-200</div>
                                    <div className="pa-2">.rot-50</div>
                                    <div className="pa-2">.box-shadow-2</div>
                                </button>
                            </div>
                            <div className="flex-wrap gap-3 mt-8">
                                <button className="tx-white bg-w-10 bord-r-8 flex-wrap gap-2">
                                    <div className="pa-2">.opaci-50</div>
                                    <div className="pa-2">.opaci-chov--50</div>
                                    <div className="pa-2">.opaci-cahov-75</div>
                                    <div className="pa-2">.opaci-cbhov-75</div>
                                </button>
                            </div>
                            <div className="flex tx-lgx mt-8 mb-2 opaci-10 tx-ls-5">
                                BEHAVE
                            </div>
                            <div className="flex-wrap gap-3">                                
                                <button className="tx-white bg-w-10 bord-r-8 flex-wrap gap-2">
                                    <div className="pa-2">.noclick</div>
                                    <div className="pa-2">.grab</div>
                                    <div className="pa-2">.clickble</div>
                                    <div className="pa-2">.pointer</div>
                                    <div className="pa-2">.waitcursor</div>
                                </button>
                                <button className="tx-white bg-w-10 bord-r-8 flex-wrap gap-2">
                                    <div className="pa-2">.Q_xs_md_flex-1</div>
                                    <div className="pa-2">.Q_xs_xl_flex-row</div>
                                    <div className="pa-2">.Q_xs_w-10</div>
                                    <div className="pa-2">.Q_sm</div>
                                    <div className="pa-2">.Q_md_x</div>
                                    <div className="pa-2">.Q_xs_pa-4</div>
                                </button>
                                <button className="tx-white bg-w-10 bord-r-8 flex-wrap gap-2">
                                    <div className="pa-2">.spin-2</div>
                                    <div className="pa-2">.hover-4</div>
                                    <div className="pa-2">.appear-appear</div>
                                    <div className="pa-2">.appear-once-1</div>
                                    <div className="pa-2">.huerotate-1</div>
                                    <div className="pa-2">.shake-2</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

    </div>


    
    <div className="body pos-rel flex-col flex-justify-start pt-8 noverflow">

            
        <div className=" flex-col gap-2 my-100 ">
            <a target="_blank" href="https://3duno.gitbook.io/csscss/about/blog/"
                className="opaci-chov--50 pa-2 tx-lx tx-white py-4 tx-center tx-ls-8 gap-4 flex-col">
                <div>CSSCSS</div>
                <div>BLOG</div>
            </a>
            {/* <a target="_blank" href="https://3dunoabraham.github.io/csscss"
                className="opaci-chov--50 pa-2 tx-lg tx-white py-8">
                DEMO
            </a> */}
        </div>
        
        {/* <img style={{transform:"translateY(100px)"}} width={300} src="/img/ibis.png"/> */}
        
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
