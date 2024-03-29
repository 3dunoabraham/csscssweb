import { useState, useEffect, useMemo } from "react";
import { useLocalStorage } from "usehooks-ts";
import { useRouter } from "next/router";
import { useQuery } from '@tanstack/react-query'
import { BsFillGearFill } from "react-icons/bs"

import { fetchJsonArray, fetchMultipleJsonArray, getComputedLevels, getStrategyResult, parseDecimals, parseUTCDateString, timeDifference
} from "../../scripts/helpers";
import { ChartHigherLine, ChartLowerLine, ChartMiddleLine, ChartTopBottomLine, ChartLowerLastLine, ChartHigherLastLine, ChartLiveLastLine, ChartSinLine
} from "../../components/chart/lines";
import { DEFAULT_TIMEFRAME_ARRAY, DEFAULT_TOKENS_ARRAY } from "../../scripts/constants";
import { TokenConfigStateButtons } from "../../components/chart/tokenConfig";
import { StrategyState } from "@/components/dashboard/StrategyState";
export function ChartDashboard({query}) {
    /********** CREATE **********/
    // const DEFAULT_TIMEFRAME = _timeframe // "4h"
    const [timeframe,s__timeframe] = useState<any>(query.timeframe)
    const [counter, s__counter] = useState(0);
    const [loadings, s__loadings] = useState('all');
    const getKlineArray = async(t,token) => {
        // console.log("fetching getKlineArray",t,token)

        s__loadings("klinesArray")
        let urlBase = `https://api.binance.com/api/v3/klines?interval=${t}&symbol=`
        const theArray = await fetchJsonArray(urlBase+token.toUpperCase()+"USDT")
        let lastIndex = theArray.length - 1
        while (lastIndex < 499)
        {
            theArray.unshift(theArray[0])
            lastIndex++
        }

        s__klinesArray(theArray)
        s__loadings("")
    }
    const cryptoToken = useMemo(()=>{

        return query.token && DEFAULT_TOKENS_ARRAY.includes(query.token.toLowerCase()) ? query.token.toLowerCase() : ""
    },[query]) 
    const [selectedToken,s__selectedToken] = useState<any>(cryptoToken)
    useEffect(()=>{
        if (cryptoToken != selectedToken) {
            getKlineArray(timeframe,query.token)
        } else {
            if (counter == 1)
            {
            }
        }
    },[counter,selectedToken,cryptoToken])
    useEffect(()=>{
        s__counter(counter+1)
        s__tokensArrayObj(JSON.parse(LS_tokensArrayObj))
        s__uid(LS_uid)
        s__clientIP(LS_uid.split(":")[0])
        // if (counter > 0)
        {
            getKlineArray(timeframe,cryptoToken)
        }
    },[])



    /********** DATA **********/
    const API_PRICE_BASEURL = "https://api.binance.com/api/v3/ticker/price?symbol="
    const baseToken = "usdt"
    const tokensReqObj:any = (
    DEFAULT_TOKENS_ARRAY.reduce((acc, aToken) => (
        { ...acc, [aToken]: [`${API_PRICE_BASEURL}${(aToken+baseToken).toUpperCase()}`] }
    ), {}))
    const [LS_tokensArrayObj, s__LS_tokensArrayObj] = useLocalStorage('localTokensArrayObj', "{}")
    const [LS_uid, s__LS_uid] = useLocalStorage('uid', "")
    const [uid, s__uid] = useState("")
    const [isUIReversed,s__isUIReversed] = useState<any>(true)
    const [showAllTokens,s__showAllTokens] = useState<any>(true)
    const [chopAmount,s__chopAmount] = useState<any>(0)
    const [wavelength,s__wavelength] = useState<any>(-300)
    const [tokensArrayObj,s__tokensArrayObj] = useState<any>({})
    const [klinesArray,s__klinesArray] = useState<any[]>([])
    const [clientIP, s__clientIP] = useState('');
    const DEFAULT_TOKEN_OBJ = {
        mode:0,state:0,buy:0,sell:0, floor:0,ceil:0,
        min:0,max:0,minMaxAvg:0,minMedian:0,maxMedian:0,
    }
    const parsedKlines = useMemo(()=>{
        let parsedKlinesArray:any = []
        parsedKlinesArray = klinesArray
        return parsedKlinesArray
    },[klinesArray])
    const p__klinesArray = useMemo(()=>{
        let slicedArray = [...klinesArray]
        
        let lastIndex = slicedArray.length
        for (let index = 0; index < chopAmount; index++) {
            slicedArray.push(klinesArray[499])            
        }

        return slicedArray.slice(slicedArray.length-500,slicedArray.length)
    },[klinesArray,chopAmount])
    
    const queryUSDT:any = useQuery({
        queryKey: ['usdt'],
        queryFn: async () => {
            // console.log("fetching now")
            return online ? (await fetchMultipleJsonArray(tokensReqObj)) : DEFAULT_TOKEN
        },        
        refetchInterval: 3000,
    })
    const online = true
    const DEFAULT_TOKEN = {}
    const klinesStats = useMemo(()=>{
        if (!tokensArrayObj[cryptoToken]) return {}
        // console.log("tokensArrayObj,cryptoToken,DEFAULT_TIMEFRAME_ARRAY,timeframe")
        // console.log(tokensArrayObj,cryptoToken,DEFAULT_TIMEFRAME_ARRAY,timeframe)
        let tokenConfirg = tokensArrayObj[cryptoToken][DEFAULT_TIMEFRAME_ARRAY.indexOf(timeframe)]

        let maxPrice = 0
        let minPrice = p__klinesArray.length ? p__klinesArray[0][3] : 99999999999
        for (let kline of p__klinesArray)
        {
            maxPrice = parseFloat(kline[2]) > maxPrice ? parseFloat(kline[2]) : maxPrice
            minPrice = parseFloat(kline[3]) < minPrice ? parseFloat(kline[3]) : minPrice
        }
        let min = parseFloat(`${parseDecimals(minPrice)}`)
        let max = parseFloat(`${parseDecimals(maxPrice)}`)
        let startDate = parseUTCDateString(new Date(p__klinesArray.length ? p__klinesArray[0][0] : 0))
        let midDate = parseUTCDateString(new Date(p__klinesArray.length ? p__klinesArray[250][0] : 0))
        let endDate = parseUTCDateString(new Date(p__klinesArray.length ? p__klinesArray[499][0] : 0))
        let range = parseFloat(`${parseDecimals(tokenConfirg.ceil-tokenConfirg.floor)}`)
        
        let dropPercent = parseFloat(100-parseInt(`${p__klinesArray.length ? min/max*100 : 0}`)+"")
        let timeDiff = p__klinesArray.length ? timeDifference(p__klinesArray[499][0], p__klinesArray[0][0]) : ""
        let minMaxAvg = parseDecimals((parseFloat(tokenConfirg.ceil)+parseFloat(tokenConfirg.floor))/2)
        let minMedian = (parseFloat(tokenConfirg.floor)+parseFloat(`${minMaxAvg}`))/2
        let maxMedian = (parseFloat(tokenConfirg.ceil)+parseFloat(`${minMaxAvg}`))/2
        return {
            minMaxAvg,minMedian,maxMedian,range,minPrice: min,maxPrice: max,
            min: parseFloat(tokenConfirg.floor),
            max: parseFloat(tokenConfirg.ceil),
            endDate,midDate,startDate,dropPercent,timeDiff,
        }
    },[p__klinesArray, tokensArrayObj])

    
    /********** UPDATE **********/
    const getData = async (randomThousand:any) => {
        // const res:any = await fetch('https://geolocation-db.com/json/')
        // let awaited = await res.json()
        // s__clientIP(awaited.IPv4)
        // let new_uid = `${awaited.IPv4}:${randomThousand}`
        s__uid("user:"+randomThousand)
        s__LS_uid("user:"+randomThousand)
    }
    const leave = () => {
        s__LS_uid("")
        s__LS_tokensArrayObj("{}")
        window.location.reload()
    }
    const register = () => {
        let randomThousand = parseInt(`${(Math.random()*9000) + 1000}`)
        if (confirm(`Create local account #${randomThousand}\nWould you like to Register? (${randomThousand})`)) {
            getData(randomThousand)
        }
    }
    const clickImportConfig = () => {
        let backup = prompt("Backup:")
        if (!backup) return
        importConfig(backup)
    }
    const importConfig = (strTokensArrayObj) => {
        try {
            let theObj:any = JSON.parse(strTokensArrayObj)
            s__LS_tokensArrayObj(strTokensArrayObj)
            window.location.reload()

        } catch (e:any) {
            alert("invalid database format")
        }
    }
    const exportConfig = () => {
        console.log("******************************************************")
        console.log("EXPORT BELOW")
        console.log(JSON.stringify(tokensArrayObj))
        console.log("EXPORT ABOVE")
        console.log("******************************************************")
        alert("Export will also be available in the development console \n\n"+JSON.stringify(tokensArrayObj))
    }
    const joinToken = (token:string) => {
        // console.log("queryUSDT.data",queryUSDT.data,DEFAULT_TOKENS_ARRAY)
        // console.log("queryUSDT.data",queryUSDT.data[DEFAULT_TOKENS_ARRAY.indexOf(`${token}`)])
        let thePrice = parseFloat(queryUSDT.data[DEFAULT_TOKENS_ARRAY.indexOf(`${token}`)].price)
        addToken(token,thePrice)
    }
    const addToken = (token:string,price:number) => {
        if (!token) return
        // console.log(getComputedLevels({floor:price*0.8,ceil:price*1.2}))
        // console.log({...DEFAULT_TOKEN_OBJ,...{
            // ...getComputedLevels({floor:price*0.8,ceil:price*1.2})
        // }})
        let new_tokensArrayObj = {
            ...tokensArrayObj, ...
            {
                [`${token}`]: DEFAULT_TIMEFRAME_ARRAY.map((aTimeframe, index)=> (
                    {...DEFAULT_TOKEN_OBJ,...{
                        ...getComputedLevels({floor:price*0.8,ceil:price*1.2})
                    }}
                ) )
            }
        }
        // console.log("new_tokensArrayObj", tokensArrayObj, new_tokensArrayObj)
        s__tokensArrayObj(new_tokensArrayObj)
        s__LS_tokensArrayObj((prevValue) => JSON.stringify(new_tokensArrayObj))
    }
    const updateTokenOrder = (token:string, timeframe:any, substate:string,val:any="") => {
        if (!token) return
        let promptVal = !val ? prompt("Enter Value") : val
        if (substate == "floor" || substate == "ceil") {
            if (!promptVal) return
        }
        let value = !promptVal ? 0 : parseFloat(promptVal)
        let timeframeIndex = timeframe
        // console.log("timeframe,", timeframeIndex, value, token)
        let old_tokensArrayObj = tokensArrayObj[token][timeframeIndex]
        // console.log("egfrh", old_tokensArrayObj, tokensArrayObj)

        let old_tokensArrayObjArray = [...tokensArrayObj[token]]
        let newCrystal = {
            ...{[substate]:value},
            ...getComputedLevels({
                ...old_tokensArrayObjArray[timeframeIndex],
                ...{[substate]:value}
            }),
        }
        old_tokensArrayObjArray[timeframeIndex] = {...old_tokensArrayObj,...newCrystal}
        // console.log("zzzzzz",newCrystal, value)
        let bigTokensObj = {...tokensArrayObj, ...{[token]:old_tokensArrayObjArray}}
        s__tokensArrayObj(bigTokensObj)
        s__LS_tokensArrayObj((prevValue) => JSON.stringify(bigTokensObj))
        // console.log("rgwrgwg",bigTokensObj)
    }
    const updateTokenState = (token:string, timeframe:any, substate:string, value:number) => {
        if (!token) return
        // let promptVal = prompt("Enter Value")
        // let value = !promptVal ? 0 : parseFloat(promptVal)
        let timeframeIndex = timeframe
        let old_tokensArrayObj = tokensArrayObj[token][timeframeIndex]

        let old_tokensArrayObjArray = [...tokensArrayObj[token]]
        let newCrystal = {...{
            [substate]:value
        },...getComputedLevels(old_tokensArrayObjArray[timeframeIndex])}
        old_tokensArrayObjArray[timeframeIndex] = {...old_tokensArrayObj,...newCrystal}
        let bigTokensObj = {...tokensArrayObj, ...{[token]:old_tokensArrayObjArray}}
        s__tokensArrayObj(bigTokensObj)
        s__LS_tokensArrayObj((prevValue) => JSON.stringify(bigTokensObj))
    }
    const setNewTimeframe = async(aTimeframe:string) => {
        // if (!confirm("change timeframe and request new klines: "+aTimeframe)) return
        s__timeframe(aTimeframe)
        getKlineArray(aTimeframe,cryptoToken)
    }
    const removeToken = (token:string) => {
        if (!confirm("Confirm exit?")) return
        if (!token) return
        let new_tokensArrayObj:any = {...tokensArrayObj}
        delete new_tokensArrayObj[token]
        s__tokensArrayObj(new_tokensArrayObj)
        s__LS_tokensArrayObj((prevValue) => JSON.stringify(new_tokensArrayObj))
    }
    const buy_all = () => {
    }
    const buy_min = () => {
        updateTokenState(cryptoToken, DEFAULT_TIMEFRAME_ARRAY.indexOf(timeframe), "buy", 1)
    }
    const sell_min = () => {

    }
    const sell_all = () => {
        updateTokenState(cryptoToken, DEFAULT_TIMEFRAME_ARRAY.indexOf(timeframe), "buy", 0)
    }



    /********** HTML **********/
    if (!cryptoToken) return (
        <div className="">
            <div className="body h-800px pos-rel flex-col flex-justify-start noverflow">
                <div className="h-600px block flex-center tx-white tx-xl">. . .</div>
                <div className="h-600px block flex-center tx-white tx-xl">. . .</div>
            </div>
        </div>
    )

    return (
    <div className="body h-min-100  pos-rel flex-col flex-justify-start noverflow">
        {/* {!uid && <div className="h-100px w-100px z-999 "></div>} */}
        {(<div className="flex gap-2">
            <a className="flex-center  my-8 "  href="/">
                <button className="tx-lg  opaci-chov-50  hov-bord-1-w py-4 px-8 bord-r-50"
                    style={{boxShadow:"0px 0px 25px #CF589466"}}
                >
                    Go Back
                </button>
            </a>
            {!uid &&  <div className="flex-col my-8">
                <div className="flex-center   "  onClick={()=>{register()}}>
                    <button className="tx-lg tx-white opaci-chov-50 duno-btn hov-bord-1-w py-4 px-8 bord-r-50"
                        style={{boxShadow:"0px 0px 25px #CF589466"}}
                    >
                        Register
                    </button>
                </div>
                <div className="py-1 tx-white opaci-50 tx-sm">Local Storage Only *</div>
            </div>}
        </div>)}
        <div
            className={
                "bg-glass-6   bord-r-10 tx-white mt-4 py-2 z-999 fade-in w-95 noverflow flex flex-between"
            }
            style={{
                border:"1px solid #777",
                boxShadow:"0 10px 50px -20px #00000077"
            }}
        >
            <div className={` flex-row Q_xs_lg_flex-col w-100  `}>
                <div className="flex-wrap flex-align-start w-90  my-">

                    {/* <div className="flex Q_xs_md_flex-col flex-1"> */}
                        <div className="flex-col flex-1 pa-4 ">
                            {!!uid && <>
                                {!showAllTokens &&
                                    <div className={`flex pa-2 opaci-75 bord-r-8 mt-2 w-100 bg-b-50 opaci-chov--50   `}
                                        onClick={()=>{s__showAllTokens(true)}}
                                    >
                                        Show All Tokens
                                    </div>
                                }
                                {showAllTokens &&
                                    <div className={`flex pa-2 opaci-75 bord-r-8 mt-2 w-100 bg-b-50 opaci-chov--50   `}
                                        onClick={()=>{s__showAllTokens(false)}}
                                    >
                                        Hide Tokens
                                    </div>
                                }
                            </>}
                            {/*uid &&*/ DEFAULT_TOKENS_ARRAY.map((aToken,index)=>{
                                let isQ = true
                                if (queryUSDT.isLoading) { isQ = false }
                                if (queryUSDT.error) { isQ = false }
                                let isK = isQ
                                if (!tokensArrayObj[aToken] || (tokensArrayObj[aToken] && !tokensArrayObj[aToken][0])) { isQ = false }
                                let theToken = isQ ? tokensArrayObj[aToken][0] : null
                                if (!showAllTokens && aToken != cryptoToken) return
                                let aTokenCristayl = isQ ? tokensArrayObj[aToken][DEFAULT_TIMEFRAME_ARRAY.indexOf(timeframe)] : {}
                                let crystal = (
                                    queryUSDT.data
                                    ? getStrategyResult(aTokenCristayl,parseFloat(queryUSDT.data[index].price))
                                    : 0
                                )

                                return (
                                <div className={`flex pa-2 w-min-350px bord-r-8 mt-2 w-100  ${aToken == cryptoToken ? "bg-w-20 " : "bg-b-10 "} `}
                                    key={index}
                                >
                                    
                                    <div className="      flex-col w-100 " >
                                        
                                        {<div className="tx-lgx  w-100 flex flex-align-start  " >
                                            <a className={`opaci-chov--50 tx-white ${aToken == cryptoToken?"":"opaci-25 nodeco"} `} href={`/chart/${timeframe}?token=${aToken}`}>
                                                <span className="px-1">{aToken.toUpperCase()}:</span>
                                                <span className="tx-ls-2">{isK && parseDecimals(queryUSDT.data[index].price)}</span>
                                            </a>
                                        </div>}

                                        {/* <StrategyState /> */}
                                        
                                        <div className="w-100">
                                            <div className="flex  opaci-75 ">
                                                {!!tokensArrayObj[aToken] && (
                                                    <div className="flex-center  flex-justify-between w-100">
                                                        {!aTokenCristayl.state
                                                            ? <div className="opaci-25">Inactive</div>
                                                            : <div className="opaci-75 flex-center">
                                                                <div className="">
                                                                    Active
                                                                </div >
                                                                <div className="tx-bold-8 px-2 py-1 bg-w-50 bord-r-8 ma-1">
                                                                    {crystal}
                                                                </div >
                                                            </div>
                                                        }
                                                        
                                                        {!isQ || !aTokenCristayl.state
                                                            ? (<div className="opaci-25 tx-xs ">
                                                                    offline
                                                                </div>
                                                            )
                                                            : (
                                                                <div className="opaci-75 ">
                                                                    
                                                                    {crystal == 2 && <>
                                                                        <div className="bg-w-50 opaci-chov--50 tx-black bord-r-8 pa-1"
                                                                            onClick={()=>{
                                                                                buy_all()                                                                                        
                                                                            }}
                                                                        >
                                                                            buy all
                                                                        </div>
                                                                    </>}
                                                                    {crystal == 1 && <>
                                                                        <div className="bg-w-50 opaci-chov--50 tx-black bord-r-8 pa-1"
                                                                            onClick={()=>{
                                                                                buy_min()                                                                                        
                                                                            }}
                                                                        >
                                                                            buy min
                                                                        </div>
                                                                    </>}
                                                                    {crystal == -1 && <>
                                                                        <div className="bg-w-50 opaci-chov--50 tx-black bord-r-8 pa-1"
                                                                            onClick={()=>{
                                                                                sell_min()                                                                                        
                                                                            }}
                                                                        >
                                                                            sell min
                                                                        </div>
                                                                    </>}
                                                                    {crystal == -2 && <>
                                                                        <div className="bg-w-50 opaci-chov--50 tx-black bord-r-8 pa-1"
                                                                            onClick={()=>{
                                                                                sell_all()                                                                                        
                                                                            }}
                                                                        >
                                                                            sell all
                                                                        </div>
                                                                    </>}
                                                                    {crystal == 0 && <>
                                                                        <div>
                                                                            {aTokenCristayl.buy == 0 && <div>wait to buy</div>}
                                                                            {aTokenCristayl.buy == 1 && <div>wait to sell</div>}
                                                                        </div>
                                                                    </>}
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        
                                        {aToken == cryptoToken &&
                                            <div className="flex-center w-100">
                                                
                                                {!(cryptoToken in tokensArrayObj) && !!uid &&
                                                    <div className="flex-1 w-100  ">

                                                    </div>
                                                }
                                                <div className="flex-center mt-1">
                                                    {/* <div onClick={()=>{updateTokenOrder(aToken,DEFAULT_TIMEFRAME_ARRAY.indexOf(timeframe) ,"mode")}}
                                                        className="opaci-chov--50 bg-w-90  tx-black px-3 py-1 bord-r-15 mx-1 ma-1"
                                                    >
                                                        Mode: {theToken && theToken.mode}
                                                    </div> */}
                                                    {/* <div className="flex-center px-4">
                                                        <div onClick={()=>{getKlineArray(timeframe,cryptoToken)}} className="px-2 py-1 bg-b-50 opaci-chov--50 bord-r-8 ">
                                                            Refresh
                                                        </div>
                                                    </div> */}
                                                    
                                                    <div className="flex-row Q_xs_flex-col">
                                                        {(cryptoToken in tokensArrayObj) && 
                                                            <div className="tx-bold flex-center   " >
                                                                <button className="clickble tx-ls-5  opaci-50 opaci-chov-50 duno-btn hov-bord-1-w py-2 px-3 bord-r-50 tx-lg"
                                                                    onClick={()=>{removeToken(cryptoToken)}}
                                                                    style={{boxShadow:"0px 0px 25px #CF589433"}}
                                                                >
                                                                    LEAVE
                                                                </button>
                                                            </div>
                                                        }
                                                        {!(cryptoToken in tokensArrayObj) && !!uid &&
                                                            <div className={`tx-bold flex-center  invert ${!uid && "opaci-50"}`}
                                                            >
                                                                <button className="clickble tx-ls-5 opaci-50 opaci-chov-50 duno-btn hov-bord-1-w py-2 px-4 bord-r-50 tx-lg"
                                                                    onClick={()=>{!!uid && joinToken(cryptoToken)}} 
                                                                    style={{boxShadow:"0px 0px 25px #CF589433"}}
                                                                >
                                                                    JOIN
                                                                </button>
                                                            </div>
                                                        }
                                                    
                                                        {tokensArrayObj &&  tokensArrayObj[cryptoToken] && tokensArrayObj[cryptoToken][0] &&
                                                            <div className="flex-wrap w- mx-3  ">
                                                                <TokenConfigStateButtons 
                                                                    timeframe={timeframe}
                                                                    index={DEFAULT_TOKENS_ARRAY.indexOf(cryptoToken)}
                                                                    tokensArrayObj={tokensArrayObj}
                                                                    queryUSDT={queryUSDT}
                                                                    aToken={cryptoToken}
                                                                    theToken={tokensArrayObj[cryptoToken][DEFAULT_TIMEFRAME_ARRAY.indexOf(timeframe)]}
                                                                    updateTokenOrder={updateTokenOrder}
                                                                />
                                                            </div>
                                                        }
                                                    </div>

                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                                )
                            })}
                        </div>

                    {!!uid && 
                        <div className="mt-2 show-xs_md opaci-10 w-100"><hr className="w-100"/></div>
                    }
                    <div className="flex Q_xs_flex-col  w-100 flex-align-end">
                        {/* <div className="flex-col pa-2 ddb">
                            <div className="w-90 flex flex-align-end">
                                <div className="tx-sm pr-1 opaci-50">Wavelength:</div>
                                <div className="tx-lgx tx-bold-6">{wavelength}</div>
                            </div>
                            <div className="w-100">
                                <div className="w-100">
                                    <input className="w-100" type="range"
                                        min={-360} max={1200} step="5"
                                        value={wavelength}
                                        onChange={(e)=>{s__wavelength(e.target.value)}}
                                    />
                                </div>
                            </div>
                            <div className="flex-wrap w-250px ">
                                {["-300","250","630"].map((aWavelength,index)=>{
                                    return (
                                    <button className="fle-col ma-1 pb-3 px-2 py-2  opaci-chov--50 bg-w-20  tx-lg bord-r-8 tx-white"
                                        style={{
                                            border: `2px solid rgb(${(200-parseInt(aWavelength))},99,99)`,
                                        }}
                                        key={index} onClick={()=>s__wavelength(aWavelength)}
                                    >
                                        {wavelength==aWavelength && <div className="tx-xs">wave:</div>}
                                        <div className="">{aWavelength}</div>
                                    </button>
                                    )
                                })}
                            </div>
                            <hr className="w-100 opaci-10 my-3" />
                            <div className="w-100 flex flex-align-end">
                                <div className="tx-sm pr-1 opaci-50">Scope:</div>
                                <div className="tx-lg tx-bold-6">
                                    {<div className="px-1 opaci-50">{chopAmount}</div>}
                                </div>
                            </div>
                            <div className="w-100">
                                <input className="w-100" type="range"
                                    min="-500" max={0} step="1"
                                    value={-chopAmount}
                                    onChange={(e)=>{s__chopAmount(-e.target.value)}}
                                />
                            </div>
                        </div> */}
                    </div>
                    
                    
                </div>
                
                {cryptoToken in tokensArrayObj &&
                    <div className="w-100 flex-col flex-align-stretch">
                        <div className="flex-col mt-8">
                            <div className="w-100 flex-center flex-align-end">
                                <div className="tx-sm pr-1 opaci-50">Timeframe:</div>
                                <div className="tx-lgx tx-bold-6">{timeframe}</div>
                            </div>
                            <div className="flex-wrap w-300px ">
                                {DEFAULT_TIMEFRAME_ARRAY.map((aTimeframe,index)=>{
                                    return (
                                    <button className="ma-1 pa-2  opaci-chov--50 bg-w-10 bord-r-8 tx-white"
                                        key={index} onClick={()=>setNewTimeframe(aTimeframe)}
                                    >
                                        {aTimeframe}
                                    </button>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="flex-center ma- flex-center ">
                            <a  className="px-2 tx-sm py-1 bg-w-50 ma-1  opaci-chov--50 bord-r-8 tx-white" target={"_blank"}
                                href={`https://www.tradingview.com/chart/?symbol=BINANCE%3A${cryptoToken.toUpperCase()}${baseToken.toUpperCase()}`}
                            >
                                <div className="nowrap">
                                    Tradigview
                                </div>
                                <div className="nowrap">
                                    {cryptoToken.toUpperCase()}{baseToken.toUpperCase()} @{timeframe}
                                </div>
                            </a>
                            <div onClick={()=>{getKlineArray(timeframe,cryptoToken)}} className="px-2 py-1 bg-b-20 ma-1 opaci-50 opaci-chov-50 bord-r-8 ">
                                Refresh
                            </div>
                            <div onClick={()=>{exportConfig()}} className="px-2 py-1 bg-b-20 ma-1 opaci-50 opaci-chov-50 bord-r-8 ">
                                export
                            </div>
                            <div onClick={()=>{clickImportConfig()}} className="px-2 py-1 bg-b-20 ma-1 opaci-50 opaci-chov-50 bord-r-8 ">
                                import
                            </div>
                        </div>
                        {klinesArray.length > 0  && <div className="flex-1 w-100 flex-col mt-4">
                            <div className=" flex  flex-justify-between w-90">
                                <div className="flex-1 px-2 opaci-10"><hr/></div>
                                <div className="opaci-50"><div className=" left-0 top-0">{klinesStats.timeDiff}</div></div>
                                <div className=" opaci-10 px-2 "><hr className="px-2"/></div>
                                <div className="opaci-50"><div className=" left-0 top-0">{klinesStats.dropPercent}%</div></div>
                            </div>
                        
                            {loadings == "" &&  tokensArrayObj[cryptoToken] && queryUSDT.data && 
                                <div
                                    className="flex pos-rel w-90 box-shadow-5 bg-w-10 hov-bord-1-w autoverflow  my-3 bord-r-8"
                                    style={{ resize:"both", height:"400px", }}
                                >
                                    
                                    <div className="pa-1 pos-abs right-0 tx-green bottom-0">{klinesStats.min}</div>
                                    <div className="pa-1 pos-abs right-0 tx-orange top-50p">{klinesStats.minMaxAvg}</div>
                                    <div className="pa-1 pos-abs right-0 opaci-50 top-0">{klinesStats.max}</div>
                                    
                                    <div className="pa-1 pos-abs right-0 tx-green-25 top-75p">{parseDecimals(klinesStats.minMedian)}</div>
                                    <div className="pa-1 pos-abs right-0 tx-red top-25p">{parseDecimals(klinesStats.maxMedian)}</div>

                                    <ChartHigherLine klinesArray={p__klinesArray} klinesStats={klinesStats}
                                        tokenConfig={tokensArrayObj[cryptoToken][DEFAULT_TIMEFRAME_ARRAY.indexOf(timeframe)]}
                                    />
                                    <ChartLowerLine klinesArray={p__klinesArray} klinesStats={klinesStats}
                                        tokenConfig={tokensArrayObj[cryptoToken][DEFAULT_TIMEFRAME_ARRAY.indexOf(timeframe)]}
                                    />
                                    <ChartHigherLastLine klinesArray={p__klinesArray} klinesStats={klinesStats}
                                        tokenConfig={tokensArrayObj[cryptoToken][DEFAULT_TIMEFRAME_ARRAY.indexOf(timeframe)]}
                                    />
                                    <ChartLowerLastLine klinesArray={p__klinesArray} klinesStats={klinesStats}
                                        tokenConfig={tokensArrayObj[cryptoToken][DEFAULT_TIMEFRAME_ARRAY.indexOf(timeframe)]}
                                    />
                                    <ChartLiveLastLine klinesArray={p__klinesArray} klinesStats={klinesStats}
                                        livePrice={queryUSDT.data[DEFAULT_TOKENS_ARRAY.indexOf(cryptoToken)].price}

                                        tokenConfig={tokensArrayObj[cryptoToken][DEFAULT_TIMEFRAME_ARRAY.indexOf(timeframe)]}
                                    />

                                    <ChartMiddleLine klinesArray={klinesArray} />
                                    <ChartTopBottomLine klinesArray={klinesArray} />
                                    {/* <ChartSinLine chopAmount={chopAmount} klinesArray={klinesArray} wavelength={wavelength} /> */}
                                            
                                </div>
                            }
                            <div className=" flex  flex-justify-between w-90">
                                <div className="">{klinesStats.startDate}</div>
                                <div className="flex-1 px-2 opaci-10"><hr/></div>
                                <div className="">{klinesStats.midDate}</div>
                                <div className="flex-1 px-2 opaci-10"><hr/></div>
                                <div className="">{klinesStats.endDate}</div>
                            </div>
                        </div>}

                    </div>
                }   

                {/* <div className="flex-1 px-2 w-100 mt-3 opaci-10"><hr/></div>
                <div className="flex-1 w-100    ">
                    {!!uid && 
                        <details className="tx-white flex flex-align-end ">
                            <summary className="flex    flex-justify-end">
                                <div className="tx-lg opaci-chov--50  py-2 mx-2 bord-r-8 px-2 bg-w-hov-20">
                                    <BsFillGearFill />
                                </div>
                            </summary>
                                
                            <div className="  flex flex-justify-end ma-2">
                                <div className="bg-w-50  bord-r-50 px-2 py-1 tx-sm ">
                                    {uid}
                                </div>
                            </div>
                        </details>
                    }

                </div> */}

            </div>
        </div>
        <div className=" pt-200"></div>
        
        {uid && (<div className="flex-warp gap-2">
            <a className="flex-center  my-8 "  href="/">
                <button className="tx-lg  opaci-chov-50  hov-bord-1-w py-4 px-8 bord-r-50"
                    style={{boxShadow:"0px 0px 25px #CF589466"}}
                >
                    Go Back
                </button>
            </a>
            <div className="flex-center  my-8 "  onClick={()=>{leave()}}>
                <button className="tx-lg tx-white opaci-chov-50 duno-btn hov-bord-1-w py-4 px-8 bord-r-50 flex-col"
                    style={{boxShadow:"0px 0px 25px #CF589466"}}
                >
                    Leave
                    <small className="tx-smd opaci-50">Delete local account</small>
                </button>
            </div>
        </div>)}
        {uid && 
            <div>
                <a href="https://gtabtc.vercel.app/" className="tx-xl tx-white py-4 my-8 block tx-center opaci-chov--50"
                    target="_blank"
                >
                    <div className="tx-sm">
                        <span className="opaci-50">Open</span> <span>G</span><span className="opaci-50">amified</span>  <span>T</span><span className="opaci-50">rading</span>  <span>A</span><span className="opaci-50">pp</span> 
                    </div>
                    <div>GTA ByteCity</div>
                    {/* <div>Bit Token Capital</div> */}
                </a>
            </div>
        }
        {uid && 
            <div>
                <a href="https://tresduno.vercel.app/" className="tx-xl tx-white py-4 my-8 block tx-center opaci-chov--50"
                    target="_blank"
                >
                    <div className="tx-sm"><span className="opaci-50">Open</span> <span>Live Trading-Simulation</span> <span className="opaci-50">App</span> </div>
                    <div>Tres Duno Capital</div>
                    {/* <div>Bit Token Capital</div> */}
                </a>
            </div>
        }
    </div>
    )
}
// export default ({query}) => {
//     const router = useRouter()
//     let __token = router.query.token || ""
//     return (
//     <div className="">
//         <TokenPage  query={{token:__token}} />
//     </div>
//     )
// }