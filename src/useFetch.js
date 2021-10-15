import { useEffect ,useState } from "react";

const useFetch = (url) => {
    const [data,setData]=useState(null);
    const [isPending,setIsPending]= useState(true);
    const [isError,setIsError] =useState(null);

    useEffect(() =>{
        const abortC=new AbortController();
       setTimeout(() =>{
        fetch(url,{signal:abortC.signal})
            .then(res =>{
                if(!res.ok){
                    throw Error('Sorry could not fetch the data from the resource');
                }
                return res.json();
            })
            .then(data =>{
                setIsError(null);
                setData(data);
                setIsPending(false);
            })
            .catch(err =>{
                if(err.name ==='AbortError')
                {
                    console.log('fetch aborted');
                }
                else{
                setIsError(err.message);
                setIsPending(false);
                }
            })

       },1000)
       return () => abortC.abort();
    },[url]);
    return{data,isError,isPending}
}
 
export default useFetch;