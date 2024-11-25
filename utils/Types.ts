export type ProjectType = {
    title:string,
    image:string,
    technologies:string[],
    description:string,
    links:{
        live:string,
        repos:{
            frontend:string,
            backend?:string
        }
    }
}