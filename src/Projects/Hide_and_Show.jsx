import { useState } from 'react';
import './Hide_and_Show.css'
export default function HaS() {
    const [visible, setVisible] = useState(true);

    function Change() {
        if (visible) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    }

    return (
        <>
        <div className='container'>
            {visible && <p>Hello World</p>}
            
            <button className="btn" onClick={Change}>
                {visible ? "Hide" : "Show"}
            </button>
        </div>
        </>
    );
}