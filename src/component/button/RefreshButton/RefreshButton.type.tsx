export default interface RefreshButtonProps {
    label:string,
    loading?:boolean,
    disable?:boolean,
    onClick?: (e:any)=>void,
}