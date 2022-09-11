import { Info } from 'react-feather';
import toast from 'react-hot-toast';

export function showSuccess(msg) {
    toast.success(msg, {
        iconTheme: {
            primary: '#19afdf',
            secondary: '#fff',
        },
        style: {
            maxWidth: "500px",
            borderRadius: '10px',
            background: '#2B354D',
            border: "1px solid #19afdf",
            color: '#fff',
        },
        duration: 8000
    });
}

export function showError(msg) {
    toast.error(msg, {
        style: {
            maxWidth: "500px",
            borderRadius: '10px',
            background: '#2B354D',
            border: "1px solid #F55F44",
            color: '#fff',
        },
    });
}

export function showMessage(msg) {
    toast(msg,
    {
        icon: <Info color="#19afdf" />,
        style: {
            maxWidth: "500px",
            borderRadius: '10px',
            background: '#2B354D',
            border: "1px solid #19afdf",
            color: '#fff',
        },
    }
    );
}