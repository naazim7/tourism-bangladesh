import { useEffect, useState } from "react";

const useServices = () => {
    
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://frightful-flesh-29607.herokuapp.com/packages")
            .then(res => res.json())
          .then(data=>setServices(data))

    }, [])
    


return [services];

}
export default useServices;