import React,{ useState,useEffect } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

import { notify } from './toast';
import { validate } from './validate';

import styles from "./SingUp.module.css"

const SingUp = () => {
    const [data,setData]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        isAccepted:false
    })

    const [errors,setErrors]=useState({});

    const [toched,setToched]=useState({});

    useEffect(()=>{
        setErrors(validate(data,"singup"))
        console.log(errors);
    },[data,toched])

    const changeHandeler=(event)=>{
        if(event.target.name==="isAccepted"){
            setData({...data,[event.target.name]:event.target.checked})
        } else{
            setData({...data,[event.target.name]:event.target.value})
        }
    } 

    const focousHandeler=(event)=>{
        setToched({...toched,[event.target.name]:true})
    }

    const submitHandeler=(event)=>{
        event.preventDefault()

        if(!Object.keys(errors).length){
            notify("You Signed is Successfully","success")
        }else{
            notify("Invalid data!","error")
            setToched({
                name:true,
                email:true,
                password:true,
                confirmPassword:true,
                isAccepted:true
            })
        }
    }

    return (
        <div className={styles.countainer}>
            <form onSubmit={submitHandeler} className={styles.formContainer}>
                <h2 className={styles.header}>SingUp</h2>
                <div className={styles.formFailed}>
                <label>Name</label>
                <input type="text" name="name" value={data.name} onChange={changeHandeler} onFocus={focousHandeler} className={(errors.name && toched.name ? styles.unCompailed : styles.formInput)}/>
                {errors.name && toched.name &&<span>{errors.name}</span>}
                </div>

                <div className={styles.formFailed}>
                <label>Email</label>
                <input type="text" name="email" value={data.email} onChange={changeHandeler} onFocus={focousHandeler} className={(errors.name && toched.name ? styles.unCompailed : styles.formInput)}/>
                {errors.name && toched.email &&<span>{errors.email}</span>}
                </div>

                <div className={styles.formFailed}>
                <label>Password</label>
                <input type="password" name="password" value={data.password} onChange={changeHandeler} onFocus={focousHandeler} className={(errors.name && toched.name ? styles.unCompailed : styles.formInput)}/>
                {errors.name && toched.password &&<span>{errors.password}</span>}
                </div>

                <div className={styles.formFailed}>
                <label>ConfirmPassword</label>
                <input type="password" name="confirmPassword" value={data.confirmPassword} onChange={changeHandeler} onFocus={focousHandeler} className={(errors.name && toched.name ? styles.unCompailed : styles.formInput)}/>
                {errors.name && toched.confirmPassword &&<span>{errors.confirmPassword}</span>}
                </div>

                <div className={styles.formFailed}>
                <div className={styles.cheboxCountainer}>
                <label>I accept terms of privacy policy</label>
                <input type="checkbox" name="isAccepted" value={data.isAccepted} onChange={changeHandeler} onFocus={focousHandeler} className={(errors.name && toched.name ? styles.unCompailed : styles.formInput)}/>
                </div>
                {errors.name && toched.isAccepted &&<span>{errors.isAccepted}</span>}
                </div>
                
                <div className={styles.formBouttns}>
                   <Link to="/Login">Login</Link>
                    <button type='submit'>Sing Up</button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default SingUp;