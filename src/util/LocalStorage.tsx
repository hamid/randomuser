const LS = {

    maxItemsStore :25,

    push : (key:string,value:any) => {
        try{
            let list = LS.get(key,LS.maxItemsStore);
            if(list && list.length)
                list.push(value);
            else
                list = [value]    
            return LS.save(key, list);
        }catch(e){
            console.error('Local Storage Error', e);
            return false;
        }
            
    },
    get: (key: string,max=100) => {
        try {
            let list = JSON.parse(localStorage.getItem(key) ?? "");
            if(list && list.length)
                list = list.slice(-max);
            else
                list = [];
            return list;
        } catch (e) {
            console.error('Local Storage Error', e);
            return [];
        }
    },
    save:(key:string,value:any)=>{
        let valString = JSON.stringify(value);
        return localStorage.setItem(key,valString);
    }
}
export default LS;