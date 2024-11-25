import emailjs from '@emailjs/browser';




    const publicKey = process.env.PUBLIC_KEY
    const templateId = process.env.TEMPLATE_ID
    const serviceId = process.env.SERVICE_ID



    export const handleSendEmail = (e:React.FormEvent<HTMLFormElement>,formRef:React.MutableRefObject<HTMLFormElement | null>)=>{
        if(formRef.current) 
        if(publicKey && serviceId && templateId )return emailjs
          .sendForm(serviceId,templateId, formRef.current, {
            publicKey: publicKey,
          })
    }