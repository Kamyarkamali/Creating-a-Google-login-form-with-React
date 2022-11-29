export const validate=(data,type)=>{
    const errors={};

   

    if(!data.email){
        errors.email="Reqired Email"
    } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)){
        errors.email="Email Addres Invalide"
    } else{
        delete errors.email
    }


    if(!data.password){
        errors.password="Passwor is Reqired"
    } else if(data.password.length < 6){
        errors.password="Password need to 6 character or more"
    } else{
        delete errors.password
    }


  

    if(type==="singup"){
        if(!data.name.trim()){
            errors.name="UserName Reqired"
        } else{
            delete errors.name
        }

        if(!data.confirmPassword){
            errors.confirmPassword="ConfirPassword"
        } else if(data.confirmPassword !==data.password){
            errors.confirmPassword="Password do not Match"
        } else{
            delete errors.confirmPassword
        }
    
        if(data.isAccepted){
            delete errors.isAccepted
        } else{
            errors.isAccepted="Accept our regulations"
        }
    }

    return errors;
} 