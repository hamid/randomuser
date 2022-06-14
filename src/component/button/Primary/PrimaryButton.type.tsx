export default interface PrimaryButtonProps{
    label:string,
    loading?:boolean,
    disable?:boolean,
    onClick?: (e:any)=>void,
}