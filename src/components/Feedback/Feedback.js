import './Feedback.css'
import hobbiesBg from '../../assets/hobbies_bg.jpeg'
import {useState, useEffect, useRef} from 'react'

const Feedback = () => {


    const [formVal, setFormVal] = useState({name:'', email:'', feedback:''})
    const [isDisabled, setDisabled] = useState(true)
    const [submitted, setSubmitted] = useState("SUBMIT")
    const changeColor = useRef();

    

    const handleSubmit = (e) => {
        e.preventDefault();    

        fetch('https://www.hello.com', {method:"POST", body: JSON.stringify(formVal)})
            .then(()=>{
                setFormVal({name:'', email:'', feedback:''}); // clear the color
                changeColor.current.style.color = "green"; // change the style
                changeColor.current.style.borderColor = "green"; // change the style
                console.log("Form Submitted"); // console message
                setSubmitted("SUBMITTED!"); // display message
                setDisabled(true);
            })
            .catch(err =>{
                setSubmitted("API is still building. Check back Later!"); // display message
                changeColor.current.style.color = "red"; // change the style
                changeColor.current.style.borderColor = "red"; // change the style
                console.log(err); // console message
                setDisabled(true);
            })
    }

    var hasDisabled = false;
    useEffect(()=>{
        if(!hasDisabled){
            setDisabled(!(formVal.name.length >= 3 && formVal.email.length >= 5 && formVal.feedback.length > 3));
        }

        else{
            setDisabled(true);
        }
        
    }, [formVal, hasDisabled])

    


    return (
    <div style={{textAlign:"center", color:"#232323", border:"0.1px black solid", backgroundImage:`url(${hobbiesBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat'}}>
        <h1>Your Feedback is Valued.</h1>
        <form className='feedback-form' onSubmit={handleSubmit}>
            <div className = 'content name-content'>
                <label htmlFor='name-input'>Your Name: </label>
                <input id='name-input' type='text' value={formVal.name} onChange={(e)=>{setFormVal({...formVal, name:e.target.value});}}></input>
            </div>
            <div className = 'content email-content'>
                <label htmlFor='email-input'>Your Email: </label>
                <input id="email-input"type='email' value={formVal.email} onChange={(e)=>{setFormVal({...formVal, email:e.target.value});}}></input>
            </div>
            <div className = 'content feedback-content'>
                <label htmlFor='feedback-input'>Any Suggestions, feedback, etc.:</label>
                <textarea id='feedback-input' value={formVal.feedback} onChange={(e)=>{setFormVal({...formVal, feedback:e.target.value});}}></textarea>
            </div>
            <div className='content submit-button'>
                <button id="button" disabled={isDisabled} ref={changeColor}>{submitted}</button>
            </div>
        </form>
    </div>
    )
}


export default Feedback;