import {useEffect, useState} from 'react'
import useHttp from '../hooks/use-http';
import { useParams } from 'react-router-dom';

const BlockUser = () => {
    const params = useParams();
    const {sendRequest } = useHttp();
    const [block, setBlock] = useState([]);

    useEffect(() => {
        const schedule = (data) => {
        setBlock(data);
        };
        sendRequest({ url: 'http://localhost:8000/api/workSchedule' }, schedule);
    }, [sendRequest]);

    
}

export default BlockUser;
