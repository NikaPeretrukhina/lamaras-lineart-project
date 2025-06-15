import Link from 'next/link'

import { GQL_GET_MEDIA_ITEM_BY_ID, LINKS_COMPONENT_MAPPING_NAV, MEDIA_ITEMS_LOGO } from '../constants'
import { getDataParallel } from '../helpers'
import Image from 'next/image'
import { Suspense } from 'react'

export default async function Navigation() {
    return <Suspense fallback={<div>Nav...</div>}>
        <NavigationContent />
    </Suspense>
}

async function NavigationContent() {
    const [navLogo] = await getDataParallel([
        [GQL_GET_MEDIA_ITEM_BY_ID, { variables: { id: MEDIA_ITEMS_LOGO } }]
    ])

    return (
        <div className="nav">
            <div className="nav-logo">
                <Image
                    priority={true}
                    aria-hidden
                    src={navLogo.mediaItem.sourceUrl}
                    alt={navLogo.mediaItem.title}
                    width={520}
                    height={520}
                />
            </div>
            <div className="nav-links">
                {Object.keys(LINKS_COMPONENT_MAPPING_NAV).map((path) => {
                    return <Link key={path} href={`/${path}`}>{LINKS_COMPONENT_MAPPING_NAV[path].name}</Link>
                })}
                {/* <Link href="/about-me">Über mich</Link>
                <Link href="/portfolio">Referenzen</Link>
                <Link href="/reviews">Bewertungen</Link>
                <Link href="/contact">Termin Vereinbaren</Link> */}
            </div>
        </div>
    )
}