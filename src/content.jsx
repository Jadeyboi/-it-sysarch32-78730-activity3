import { useEffect, useState } from "react";
import Card from "./Card";

function Content()  {

    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('https://us-central-it-sysarch32.cloudfunctions.net/api/movie')
        .then(response => response.json())
        .then(data => {
            setList(data);
        });
    }
    
    )
}