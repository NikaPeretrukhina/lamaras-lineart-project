import { LINKS_COMPONENT_MAPPING } from "@/constants";

export default async function Page(props) {
    const params = await props.params
    return <div>
        {LINKS_COMPONENT_MAPPING[params.slug]?.component || `${params.slug}: Not yet implemented`}
    </div>
}