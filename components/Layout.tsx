import Head from "next/head"
import Link from "next/link"
import { ReactNode } from "react"

export interface ComponentProps {
    children: ReactNode
    title?: string
  }

export default ({
    children,
    title,
  }: ComponentProps) => {
    return (<>
	<Head>
		<title>{title ? `${title} | TRESWEB` : 'TRESWEB'}</title>
		<meta name="description" content="ServicePad Inventory Management System" />
		{/* <link rel="icon" href={"/icons/favicon.ico"} /> */}
		<link rel="icon" href={"/favicon.ico"} />
	</Head>
	<div className="flex-1 w-100">
		{children}    
	    <div className=" py-8 flex-center  tx-white footer z-999 block w-100 pos-rel">
			<div className="tx-lg tx-white  clickble underline">
				{/* <Link href="/">
					<a className="pa-2 tx-white py-8">Go Home</a>
				</Link> */}
				{/* <Link target="_blank" href="https://gamearteesan.gitbook.io/arteesan/styles/core-css"> */}
					<a target="_blank" href="https://abrahamduno.vercel.app/" className="pa-2 tx-white py-8">PORTFOLIO</a>
					<a target="_blank" href="/cv.pdf" className="pa-2 tx-white py-8">CV</a>
				{/* </Link> */}
			</div>
	    </div>
	</div>
    </>)
}