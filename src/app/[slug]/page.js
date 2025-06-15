import { LINKS_COMPONENT_MAPPING } from "@/constants";

export default async function Page({ params }) {
    return <div>
        {LINKS_COMPONENT_MAPPING[params.slug].component || `${params.slug}: Not yet implemented`}
    </div>
}