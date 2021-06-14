import type { NextPageContext } from 'next'

export default function Home() {
	return null
}

Home.getInitialProps = async (ctx: NextPageContext) => {
	ctx.res.writeHead(302, { Location: '/articles' }).end()
}
