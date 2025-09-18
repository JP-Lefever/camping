

export default async function DetailMhPage(props : {params : Promise<{slug : string}>}){

    const params = await props.params;
    const slug = params.slug

    return (
        <>


        </>
    )
}