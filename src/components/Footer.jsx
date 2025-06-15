import Image from 'next/image'
import { GQL_GET_MEDIA_ITEM_BY_ID, LINKS_COMPONENT_MAPPING_FOOTER, MEDIA_ITEMS_LAMA_WEISS } from '../constants'
import { getDataParallel } from '../helpers'
import Link from 'next/link'
import { Suspense } from 'react'

export default async function Footer() {
    return <Suspense fallback={<div>Footer...</div>}>
        <FooterContent />
    </Suspense>
}

async function FooterContent() {
    const [footerLogo] = await getDataParallel([
        [GQL_GET_MEDIA_ITEM_BY_ID, { variables: { id: MEDIA_ITEMS_LAMA_WEISS } }]
    ])

    return (
        <div className="footer">
            <div className="footer-logo">
                <Image
                    priority={true}
                    aria-hidden
                    src={footerLogo.mediaItem.sourceUrl}
                    alt={footerLogo.mediaItem.title}
                    height={200}
                    width={200}
                />
            </div>
            {/* <div className="footer-nav">
                <Link href="/ueber-mich">Über mich</Link>
                <Link href="/referenzen">Referenzen</Link>
                <Link href="/reviews">Bewertungen</Link>
                <Link href="/kontakt">Kontakt</Link>
            </div> */}
            <div className="footer-copyright">
                <Link href="mailto:lamaraslineart@gmail.com">Copyright: lamaraslineart@gmail.com</Link>
                {Object.keys(LINKS_COMPONENT_MAPPING_FOOTER).map((path) => {
                    return <Link key={path} href={`/${path}`}>{LINKS_COMPONENT_MAPPING_FOOTER[path].name}</Link>
                })}
                {/* <Link href="/impressum">Impressum</Link>
                <Link href="/datenschutzerklärung">Datenschutzerklärung</Link>
                <Link href="/cookie-einstellungen">Cookie Einstellungen</Link> */}
            </div>
        </div>
    )
}